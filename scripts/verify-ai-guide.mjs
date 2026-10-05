import assert from 'node:assert/strict'
import { createServer } from 'vite'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
const server=await createServer({configLoader:'native',server:{middlewareMode:true},appType:'custom'})
try{
 const {topics,topicGroups,learningTracks}=await server.ssrLoadModule('/src/data/aiGuide/topics.js')
 const {guideTools}=await server.ssrLoadModule('/src/data/aiGuide/tools.js')
 const {aiUpdates,filterUpdates,newsCategories}=await server.ssrLoadModule('/src/data/aiGuide/news.js')
 const {cheatsheet}=await server.ssrLoadModule('/src/data/aiGuide/cheatsheet.js')
 const {navigation}=await server.ssrLoadModule('/src/data/navigation.js')
 const {pageFromHash}=await server.ssrLoadModule('/src/hooks/usePageNavigation.js')
 const {default:App}=await server.ssrLoadModule('/src/App.jsx')
 assert.equal(topics.length,12)
 assert.equal(new Set(topics.map(t=>t.id)).size,12)
 assert.deepEqual(topics.map(t=>t.stage),Array.from({length:12},(_,i)=>i+1))
 assert.ok(navigation.find(n=>n.path==='ai-lab').items.some(i=>i[1]==='ai-lab/guide'))
 assert.ok(!navigation.find(n=>n.path==='about').items.some(i=>i[1].includes('guide')))
 for(const old of ['guild','ai-guide','about/ai-guide'])assert.equal(pageFromHash('#/'+old),'ai-lab/guide')
 assert.equal(pageFromHash('#/about/ai-guide/resources'),'ai-lab/guide/topics')
 for(const [,ids] of [...topicGroups,...learningTracks])for(const id of ids)assert.ok(topics.some(t=>t.id===id))
 for(const topic of topics){assert.ok(topic.resources.length);assert.ok(topic.practice);for(const id of topic.cheats)assert.ok(cheatsheet.some(c=>c.id===id),id);assert.ok(guideTools.some(t=>t.topics.includes(topic.id)))}
 for(const tool of guideTools){assert.ok(tool.use&&tool.category);assert.ok(tool.url.startsWith('https://'));for(const id of tool.topics)assert.ok(topics.some(t=>t.id===id))}
 for(const update of aiUpdates){assert.ok(update.date<=new Date(Date.now()+86400000).toISOString().slice(0,10));assert.ok(!Number.isNaN(Date.parse(update.date)));assert.ok(update.sourceUrl.startsWith('https://'));assert.ok(update.summary&&update.whyItMatters);for(const id of update.topics)assert.ok(topics.some(t=>t.id===id))}
 const sorted=filterUpdates();assert.deepEqual(sorted.map(n=>n.date),sorted.map(n=>n.date).sort().reverse());for(const category of newsCategories)assert.ok(filterUpdates(category).every(n=>n.category===category))
 const routes=['ai-lab/guide',...['roadmap','topics','tools','cheatsheet','news'].map(t=>'ai-lab/guide/'+t),...topics.map(t=>'ai-lab/guide/topics/'+t.id),'ai-lab/guide/cheatsheet/verify']
 for(const page of routes){assert.equal(pageFromHash('#/'+page),page);globalThis.window={location:{hash:'#/'+page}};const html=renderToStaticMarkup(React.createElement(App));assert.equal((html.match(/<h1[ >]/g)||[]).length,1);assert.ok(!html.includes('← About Me'));assert.ok(!html.includes('Case Study'));for(const m of html.matchAll(/href="(#[^"]*)"/g))if(m[1]!=='#main-content')assert.notEqual(pageFromHash(m[1]),'not-found',m[1]);for(const m of html.matchAll(/<a [^>]*target="_blank"[^>]*>/g))assert.ok(m[0].includes('rel="noopener noreferrer"'));}
 console.log('PASS: 19 Guide routes, 12 shared stages, learning tracks, legacy redirects, tool/topic/prompt/news links and dated feed filters.')
}finally{delete globalThis.window;await server.close()}
