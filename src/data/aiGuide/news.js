import feed from './ai-updates.json'
export const newsCategories = ['Models','Agents','Coding','Research','Protocols','Multimodal','Evaluation','Safety','AI Strategy']
export const newsUpdated = feed.lastUpdated
export const aiUpdates = feed.items.map(item=>({...item,source:item.sourceName,topics:item.relatedTopicSlugs||[]})).sort((a,b)=>b.date.localeCompare(a.date))
export const filterUpdates = (category='All')=>aiUpdates.filter(item=>category==='All'||item.category===category)
export const updatesFresh = (now=Date.now())=>feed.status==='ok' && Number.isFinite(Date.parse(newsUpdated)) && now-Date.parse(newsUpdated)>=0 && now-Date.parse(newsUpdated)<48*60*60*1000
export const updateTrends = (now=Date.now())=>newsCategories.map(category=>({category,count:aiUpdates.filter(item=>item.category===category&&now-Date.parse(item.date)>=0&&now-Date.parse(item.date)<45*86400000).length})).filter(item=>item.count>=2).sort((a,b)=>b.count-a.count).slice(0,3)
