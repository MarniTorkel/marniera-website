import assert from 'node:assert/strict'
import { createServer } from 'vite'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
const server=await createServer({configLoader:'native',server:{middlewareMode:true},appType:'custom'})
try {
 const {creativeSections}=await server.ssrLoadModule('/src/data/creativeLab/index.js')
 const {pageFromHash}=await server.ssrLoadModule('/src/hooks/usePageNavigation.js')
 const {default:App}=await server.ssrLoadModule('/src/App.jsx')
 const {generateMarks}=await server.ssrLoadModule('/src/components/creativeLab/GeneratedArt.jsx')
 const {createMemoryDeck,default:Memory}=await server.ssrLoadModule('/src/apps/games/MemoryGame.jsx')
 assert.equal(pageFromHash('#/beyond-ai'),'creative-lab')
 assert.equal(pageFromHash('#/beyond-ai/games'),'creative-lab/games')
 const routes=['creative-lab',...creativeSections.map(c=>'creative-lab/'+c.slug)]
 for(const c of creativeSections)for(const item of c.items||[]) {
  routes.push('creative-lab/'+c.slug+'/'+item.slug)
  const a=generateMarks(item.visual,12,50)
  assert.deepEqual(a,generateMarks(item.visual,12,50),'Reproducible '+item.title)
  assert.notDeepEqual(a,generateMarks(item.visual,13,50),'Variation '+item.title)
  assert.ok(a.length>0 && a.length<2000)
  assert.ok(!JSON.stringify(a).includes('NaN'))
  if(c.slug==='data-art')assert.equal(item.synthetic,true)
 }
 for(const path of routes){
  assert.equal(pageFromHash('#/'+path),path)
  globalThis.window={location:{hash:'#/'+path}}
  const html=renderToStaticMarkup(React.createElement(App))
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1,path)
  assert.ok(!/Beyond AI|Outside AI|Art &amp; Geometry/.test(html))
  for(const match of html.matchAll(/href="(#[^"]*)"/g))if(match[1]!=='#main-content')assert.notEqual(pageFromHash(match[1]),'not-found',match[1])
 }
 for(const n of [6,8,12]){const deck=createMemoryDeck(n);assert.equal(deck.length,n*2);assert.equal(new Set(deck.map(c=>c.id)).size,n*2);for(const symbol of new Set(deck.map(c=>c.symbol)))assert.equal(deck.filter(c=>c.symbol===symbol).length,2)}
 assert.ok(renderToStaticMarkup(React.createElement(Memory)).includes('Pattern Pairs'))
 console.log('PASS: '+routes.length+' Creative Lab routes, study links, seeded visuals, synthetic-data labels, and memory deck integrity.')
} finally {delete globalThis.window;await server.close()}
