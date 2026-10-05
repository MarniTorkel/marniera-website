"""Bounded official-feed ingestion. Python standard library; no AI keys required."""
import argparse, hashlib, json, re, time
from datetime import datetime, timezone, timedelta
from email.utils import parsedate_to_datetime
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit, parse_qsl, urlencode
from urllib.request import Request, build_opener, HTTPRedirectHandler
from urllib.error import HTTPError
import xml.etree.ElementTree as ET
ROOT = Path(__file__).resolve().parents[1]
CATEGORIES = ['Models','Agents','Coding','Research','Protocols','Multimodal','Evaluation','Safety','AI Strategy']
TOPICS = {'Models':['foundations'],'Agents':['agents'],'Coding':['tools-actions'],'Research':['research'],'Protocols':['protocols'],'Multimodal':['multimodal'],'Evaluation':['evaluation'],'Safety':['safety'],'AI Strategy':['production']}
WHY = {c: 'Useful context when reviewing '+v+'; check the original announcement for scope and limitations.' for c,v in zip(CATEGORIES,['model choices','agent workflows','coding workflows','research directions','interoperability','multimodal workflows','evaluation methods','system safeguards','AI adoption and governance'])}
class Plain(HTMLParser):
    def __init__(self): super().__init__(); self.parts=[]; self.hidden=0
    def handle_starttag(self,tag,attrs):
        if tag in ('script','style'): self.hidden+=1
    def handle_endtag(self,tag):
        if tag in ('script','style'): self.hidden=max(0,self.hidden-1)
    def handle_data(self,data):
        if not self.hidden: self.parts.append(data)
def clean(value):
    parser=Plain(); parser.feed(value or ''); return re.sub(r'\s+',' ',' '.join(parser.parts)).strip()
def canonical(url):
    p=urlsplit(url)
    return urlunsplit((p.scheme.lower(),p.netloc.lower(),p.path.rstrip('/') or '/',urlencode([(k,v) for k,v in parse_qsl(p.query) if not k.lower().startswith('utm_') and k.lower() not in ('ref','source','fbclid','gclid')]),''))
def allowed(url,source):
    p=urlsplit(url)
    return p.scheme=='https' and not p.username and not p.password and p.hostname in source['allowedHosts']
class SafeRedirect(HTTPRedirectHandler):
    def __init__(self,source): self.source=source
    def redirect_request(self,req,fp,code,msg,headers,newurl):
        if not allowed(newurl,self.source): raise ValueError('Redirect outside source allowlist')
        return super().redirect_request(req,fp,code,msg,headers,newurl)
def fetch(source):
    if source['type']!='rss': raise ValueError('No reviewed adapter for this source type')
    url=source['feedUrl']
    if not allowed(url,source): raise ValueError('Feed outside source allowlist')
    for attempt in range(2):
        try:
            with build_opener(SafeRedirect(source)).open(Request(url,headers={'User-Agent':'MarnieraAIUpdates/1.0 (curated RSS reader)','Accept':'application/rss+xml, application/atom+xml, application/xml, text/xml'}),timeout=10) as response:
                body=response.read(3_000_001)
                if len(body)>3_000_000: raise ValueError('Feed exceeds 3 MB limit')
                return body
        except HTTPError as error:
            if error.code not in (500,502,503,504) or attempt: raise
        except (TimeoutError, OSError):
            if attempt: raise
        time.sleep(2)
def parsed_date(value):
    try: date=datetime.fromisoformat(value.replace('Z','+00:00'))
    except ValueError: date=parsedate_to_datetime(value)
    return date.replace(tzinfo=date.tzinfo or timezone.utc).astimezone(timezone.utc)
def category(text,source):
    for name,pattern in [('Protocols',r'\bmcp\b|\ba2a\b|protocol'),('Safety',r'safety|security|safeguard|vulnerabil'),('AI Strategy',r'governance|adoption|policy|regulat'),('Evaluation',r'eval|benchmark'),('Multimodal',r'image|video|audio|multimodal|speech'),('Coding',r'coding|code agent|developer|\bsdk\b'),('Agents',r'agent'),('Models',r'model|\bllm\b'),('Research',r'research|paper')]:
        if re.search(pattern,text): return name
    return source['categories'][0]
def parse(body,source,now):
    if re.search(br'<!DOCTYPE|<!ENTITY',body,re.I): raise ValueError('DTD/entity declarations are not supported')
    tree=ET.fromstring(body); items=[]
    if tree.tag.split('}')[-1] not in ('rss','feed','RDF'): raise ValueError('Response is not an RSS/Atom feed')
    for entry in tree.iter():
        if entry.tag.split('}')[-1] not in ('item','entry'): continue
        fields={}; url=''
        for child in entry:
            key=child.tag.split('}')[-1]
            fields[key]=''.join(child.itertext())
            if key=='link' and child.attrib.get('rel','alternate')=='alternate': url=child.attrib.get('href') or child.text or url
        url=url.strip() or fields.get('guid','').strip()
        if not allowed(url,source): continue
        title=clean(fields.get('title',''))[:220]
        excerpt=clean(fields.get('description') or fields.get('summary') or '')
        text=(title+' '+excerpt[:1500]).lower()
        if not title or not re.search(r'\bai\b|artificial intelligence|machine learning|model|agent|\bllm\b|\bmcp\b|\ba2a\b|neural|diffusion',text): continue
        if re.search(r'funding round|raises \$|celebrity|rumou?r|top \d+|you won.t believe',text): continue
        if not re.search(r'releas|introduc|launch|announc|new |open.source|research|benchmark|evaluat|protocol|governance|security|model|paper',text): continue
        try: date=parsed_date(fields.get('pubDate') or fields.get('published') or fields.get('date') or fields.get('updated') or '')
        except (ValueError,TypeError,OverflowError): continue
        if date>now or date<now-timedelta(days=365): continue
        url=canonical(url); cat=category(text,source)
        # Store only a short feed excerpt, never full article content.
        summary=' '.join(excerpt.split()[:18])
        if len(excerpt.split())>18: summary+='…'
        if not summary: summary='An official source announcement. Read the original for details.'
        items.append(dict(id=hashlib.sha256((url+title).encode()).hexdigest()[:16],title=title,date=date.date().isoformat(),discoveredAt=now.isoformat().replace('+00:00','Z'),category=cat,summary=summary,whyItMatters=WHY[cat],sourceName=source['name'],sourceUrl=source['url'],articleUrl=url,relatedTopicSlugs=TOPICS[cat]))
    return items
def relevant_title(title):
    return not re.search(r'joins? .*board|appoint|partnership|partners? with|creative intelligence|funding|raises \$|acqui[rs]|our next chapter|people behind|meet the |celebrat',title,re.I)
def merge(old,new,now):
    result=[]; urls=set(); titles=set()
    # Preserve editorial records; shared changelog URLs may describe separate releases.
    for item in [*old,*new]:
        if not item.get('curated') and not relevant_title(item['title']): continue
        key=re.sub(r'\W+','',item['title'].lower()); url=canonical(item['articleUrl'])
        if key in titles or (url in urls and not item.get('curated')): continue
        if item['date']<(now-timedelta(days=365)).date().isoformat(): continue
        titles.add(key); urls.add(url); result.append(item)
    return sorted(result,key=lambda i:(i['date'],i['id']),reverse=True)[:150]
def run(sources,old,now,fetcher=fetch,delay=0.75):
    statuses=[]; fresh=[]
    for source in sorted((s for s in sources if s['enabled']),key=lambda s:s['priority']):
        try:
            parsed=parse(fetcher(source),source,now); fresh.extend(parsed)
            statuses.append({'id':source['id'],'status':'ok','items':len(parsed)})
        except Exception as error:
            statuses.append({'id':source['id'],'status':'failed','error':str(error)[:180]})
        if delay: time.sleep(delay)
    successes=sum(s['status']=='ok' for s in statuses)
    stamp=now.isoformat(timespec='seconds').replace('+00:00','Z')
    status='ok' if successes and successes==len(statuses) else 'partial' if successes else 'failed'
    return {**old,'version':1,'lastAttempt':stamp,'lastUpdated':stamp if status=='ok' else old.get('lastUpdated'),'status':status,'sourceStatus':statuses,'items':merge(old['items'],fresh,now) if successes else old['items']}
def main():
    parser=argparse.ArgumentParser(); parser.add_argument('--source'); args=parser.parse_args()
    sources=json.loads((ROOT/'src/config/aiNewsSources.json').read_text(encoding='utf-8'))
    if args.source: sources=[s for s in sources if s['id']==args.source]
    path=ROOT/'src/data/aiGuide/ai-updates.json'; old=json.loads(path.read_text(encoding='utf-8'))
    result=run(sources,old,datetime.now(timezone.utc))
    path.write_text(json.dumps(result,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
    print(json.dumps({k:v for k,v in result.items() if k!='items'},indent=2)); print(str(len(result['items']))+' retained updates')
    return 1 if result['status']=='failed' else 0
if __name__=='__main__': raise SystemExit(main())
