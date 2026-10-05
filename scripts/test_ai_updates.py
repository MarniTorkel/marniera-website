import importlib.util, unittest
from datetime import datetime, timezone
from pathlib import Path
spec=importlib.util.spec_from_file_location('updater',Path(__file__).with_name('fetch-ai-updates.py'))
u=importlib.util.module_from_spec(spec);spec.loader.exec_module(u)
SOURCE={'id':'test','name':'Official','url':'https://example.org','feedUrl':'https://example.org/rss','allowedHosts':['example.org'],'categories':['Models'],'type':'rss','priority':1,'enabled':True}
NOW=datetime(2026,9,11,tzinfo=timezone.utc)
RSS=b'<rss><channel><item><title>Introducing a new AI model</title><link>https://example.org/model?utm_source=rss</link><pubDate>Thu, 10 Sep 2026 12:00:00 GMT</pubDate><description>New model for testing.</description></item></channel></rss>'
class Tests(unittest.TestCase):
    def test_rss_atom(self):
        items=u.parse(RSS,SOURCE,NOW);self.assertEqual(len(items),1);self.assertEqual(items[0]['articleUrl'],'https://example.org/model')
        atom=b'<feed xmlns="http://www.w3.org/2005/Atom"><entry><title>New AI agent release</title><link href="https://example.org/agent"/><updated>2026-09-10T12:00:00Z</updated></entry></feed>'
        self.assertEqual(u.parse(atom,SOURCE,NOW)[0]['category'],'Agents')
    def test_failure_isolation(self):
        def fetch(s):
            if s['id']=='bad': raise TimeoutError('timeout')
            return RSS
        old={'lastUpdated':'2026-09-01T00:00:00Z','items':[]}
        result=u.run([SOURCE,{**SOURCE,'id':'bad'}],old,NOW,fetch,0)
        self.assertEqual(result['status'],'partial');self.assertEqual(len(result['items']),1);self.assertEqual(result['lastUpdated'],old['lastUpdated'])
        failed=u.run([{**SOURCE,'id':'bad'}],result,NOW,fetch,0)
        self.assertEqual(failed['items'],result['items']);self.assertEqual(failed['status'],'failed')
    def test_dedup_retention(self):
        item=u.parse(RSS,SOURCE,NOW)[0]
        self.assertEqual(len(u.merge([item],[{**item,'articleUrl':item['articleUrl']+'?utm_campaign=x'}],NOW)),1)
        self.assertEqual(len(u.merge([{**item,'curated':True}],[{**item,'id':'other','title':'Separate changelog release','curated':True}],NOW)),2)
        self.assertEqual(u.merge([{**item,'date':'2020-01-01'}],[],NOW),[])
    def test_security_and_filter(self):
        self.assertFalse(u.allowed('https://example.org.evil.com/rss',SOURCE))
        self.assertEqual(u.parse(RSS.replace(b'https://example.org/model',b'https://evil.com/model'),SOURCE,NOW),[])
        self.assertEqual(u.parse(RSS.replace(b'Introducing a new AI model',b'Celebrity funding round'),SOURCE,NOW),[])
        with self.assertRaises(ValueError):u.parse(b'<!DOCTYPE rss>'+RSS,SOURCE,NOW)
if __name__=='__main__':unittest.main()
