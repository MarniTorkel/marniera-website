import assert from 'node:assert/strict'
import { createServer } from 'vite'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
const server=await createServer({configLoader:'native',server:{middlewareMode:true},appType:'custom'})
try {
 const {default:App}=await server.ssrLoadModule('/src/App.jsx')
 const {pageFromHash}=await server.ssrLoadModule('/src/hooks/usePageNavigation.js')
 const {evaluations,evaluationCategories,filterEvaluations}=await server.ssrLoadModule('/src/data/aiLab/evaluations.js')
 const {strategyTopics}=await server.ssrLoadModule('/src/data/aiLab/strategyTopics.js')
 const {researchIdeas}=await server.ssrLoadModule('/src/data/aiLab/researchIdeas.js')
 const {navigation}=await server.ssrLoadModule('/src/data/navigation.js')
 assert.deepEqual(navigation.find(n=>n.path==='ai-lab').items.map(i=>i[0]),['AI Lab Overview','AI Guide','AI Agents','AI Projects','Evaluation Lab','AI Strategy'])
 for(const old of ['ai-lab/startup-ideas','startup-ideas','research-startup-ideas'])assert.equal(pageFromHash('#/'+old),'ai-lab/projects')
 assert.equal(evaluations.length,7);assert.equal(strategyTopics.length,10);assert.equal(researchIdeas.length,6)
 for(const c of evaluationCategories)assert.ok(filterEvaluations(c).every(i=>i.category===c))
 assert.equal(filterEvaluations('All','schema')[0].id,'structured-output')
 assert.equal(filterEvaluations('All','nonsense9876').length,0)
 for(const item of evaluations){assert.ok(!item.results);assert.ok(['Planned','Designing'].includes(item.status));for(const key of ['testData','method','limitations','reproducibility'])assert.ok(item[key]);assert.ok(item.measures.length>=4)}
 const routes=['ai-lab','ai-lab/evaluations','ai-lab/strategy','ai-lab/projects',...evaluations.map(i=>'ai-lab/evaluations/'+i.slug),...strategyTopics.map(i=>'ai-lab/strategy/'+i.slug),...researchIdeas.map(i=>'ai-lab/projects/'+i.slug)]
 for(const route of routes){assert.equal(pageFromHash('#/'+route),route);globalThis.window={location:{hash:'#/'+route}};const html=renderToStaticMarkup(React.createElement(App));assert.equal((html.match(/<h1[ >]/g)||[]).length,1,route);for(const m of html.matchAll(/href="(#[^"]*)"/g))if(m[1]!=='#main-content')assert.notEqual(pageFromHash(m[1]),'not-found',m[1]);if(route.startsWith('ai-lab/evaluations/')){assert.ok(html.includes('Evaluation planned'));assert.ok(!html.includes('<h2>Results</h2>'))}assert.ok(!html.includes('I am a Chief AI Officer'))}
 globalThis.window={location:{hash:'#/ai-lab/guide/roadmap'}};assert.ok(renderToStaticMarkup(React.createElement(App)).includes('AI Leader / CAIO'))
 console.log('PASS: 27 AI Lab routes, evaluation filters/search, planned-only results, idea retention, strategy links, startup redirects and leader track.')
}finally{delete globalThis.window;await server.close()}
