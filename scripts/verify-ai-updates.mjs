import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { createServer } from 'vite'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
const feed=JSON.parse(await readFile(new URL('../src/data/aiGuide/ai-updates.json',import.meta.url)))
assert.ok(feed.items.length<=150)
assert.equal(new Set(feed.items.map(i=>i.id)).size,feed.items.length)
assert.ok(['ok','partial','failed','manual'].includes(feed.status))
for(const item of feed.items){for(const field of ['id','title','date','discoveredAt','category','summary','whyItMatters','sourceName','sourceUrl','articleUrl'])assert.ok(item[field],field);assert.ok(item.articleUrl.startsWith('https://'));assert.ok(Number.isFinite(Date.parse(item.date)))}
const server=await createServer({configLoader:'native',server:{middlewareMode:true},appType:'custom'})
try{
 const news=await server.ssrLoadModule('/src/data/aiGuide/news.js')
 for(const category of news.newsCategories)assert.ok(news.filterUpdates(category).every(i=>i.category===category))
 assert.equal(news.updatesFresh(Date.parse(news.newsUpdated)+49*3600000),false)
 const {default:Guide}=await server.ssrLoadModule('/src/pages/Guide.jsx')
 const html=renderToStaticMarkup(React.createElement(Guide,{page:'ai-lab/guide/news'}))
 assert.ok(html.includes('aria-current="page">AI Updates'))
 assert.ok(html.includes('Read original announcement'))
 const {default:Lab}=await server.ssrLoadModule('/src/pages/AILab.jsx')
 const lab=renderToStaticMarkup(React.createElement(Lab,{page:'ai-lab'}))
 assert.equal((lab.match(/Read original announcement/g)||[]).length,Math.min(3,feed.items.length))
 assert.ok(lab.includes('View all AI Updates'))
 console.log('PASS: feed schema, category filters, stale timestamp, active Updates tab and overview newest three.')
}finally{await server.close()}
