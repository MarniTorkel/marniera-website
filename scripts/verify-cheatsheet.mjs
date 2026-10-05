import assert from 'node:assert/strict'
import { cheatsheet, categories, filterCheats, buildPrompt, builderFields, groupCheats, categoryDescriptions } from '../src/data/aiGuide/cheatsheet.js'
import { createServer } from 'vite'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
assert.equal(categories.length,11)
assert.equal(new Set(cheatsheet.map(i=>i.id)).size,cheatsheet.length)
assert.equal(new Set(cheatsheet.map(i=>i.prompt)).size,cheatsheet.length)
for(const item of cheatsheet){for(const field of ['id','shortcut','title','category','description','prompt'])assert.ok(item[field]?.trim(),item.id+' '+field);assert.equal(item.officialCommand,false);assert.ok(categories.includes(item.category));assert.ok(!item.prompt.includes('================================================'))}
for(const c of categories){const result=filterCheats(cheatsheet,c);assert.ok(result.length>0,c);assert.ok(result.every(i=>i.category===c||(c==='Learning'&&i.shortcut==='ELI10')))}
for(const key of ['shortcut','title','description','category','example','tags']){const fixture={...cheatsheet[0],[key]:key==='tags'?['uniqueneedle']:'uniqueneedle'};assert.equal(filterCheats([fixture],'All','uniqueneedle').length,1,key)}
assert.ok(filterCheats(cheatsheet,'All','research').some(i=>i.category==='Evidence & Verification'))
for(const title of ['DEBUG','TEST FIRST','REGRESSION CHECK'])assert.ok(filterCheats(cheatsheet,'All','code').some(i=>i.shortcut===title))
assert.ok(filterCheats(cheatsheet,'All','code').some(i=>i.category==='Agents & Workflows'))
assert.equal(filterCheats(cheatsheet,'All','unmatchable98765').length,0)
assert.deepEqual(filterCheats(cheatsheet,'All','  VERIFY  '),filterCheats(cheatsheet,'All','verify'))
assert.equal(cheatsheet.filter(i=>i.featured).length,6)
assert.equal(buildPrompt({}),'')
assert.equal(buildPrompt({Role:'  Engineer ',Goal:'Fix code',Context:'  '}),'ROLE\nEngineer\n\nGOAL\nFix code')
assert.equal(buildPrompt(Object.fromEntries(builderFields.map(f=>[f,f]))).split('\n\n').length,7)
for(const name of ['RESEARCH QUESTION','CODING TASK','DATA ANALYSIS','DECISION','AGENT TASK','TCCA','GOAL'])assert.ok(cheatsheet.find(i=>i.shortcut===name)?.prompt.includes('\n'))
const grouped=groupCheats(cheatsheet)
assert.equal(grouped.length,categories.length)
assert.equal(grouped.flatMap(g=>g.items).length,cheatsheet.length)
assert.equal(new Set(grouped.flatMap(g=>g.items.map(i=>i.id))).size,cheatsheet.length)
for(const group of grouped)assert.ok(categoryDescriptions[group.category])
assert.equal(groupCheats(filterCheats(cheatsheet,'Coding'),'Coding').length,1)
assert.ok(groupCheats(filterCheats(cheatsheet,'Learning'),'Learning')[0].items.some(i=>i.shortcut==='ELI10'))
const server=await createServer({configLoader:'native',server:{middlewareMode:true},appType:'custom'})
try{const {default:Cheatsheet}=await server.ssrLoadModule('/src/components/aiGuide/PromptCheatsheet.jsx');const html=renderToStaticMarkup(React.createElement(Cheatsheet));assert.ok(html.includes('Prompt &amp; Agent Cheatsheet'));assert.equal((html.match(/class="prompt-item/g)||[]).length,cheatsheet.length);assert.ok(html.includes('Build a Prompt'));
assert.ok(html.includes('Prompts at a glance'));
assert.equal((html.match(/class="cheat-accordion"/g)||[]).length,categories.length);
for(const match of html.matchAll(/href="#(prompt-[^"]+)"/g))assert.ok(html.includes('id="'+match[1]+'"'),match[1]);
for(const item of cheatsheet)assert.equal((html.match(new RegExp('id="prompt-'+item.id+'"','g'))||[]).length,1);
assert.ok(html.includes('not built-in AI commands'));assert.ok(html.includes('https://www.sabrina.dev/t/prompts'));console.log('PASS: '+cheatsheet.length+' unique patterns, all categories, search fields, recipes, builder formatting and reference render.')}finally{await server.close()}
