import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { mkdtemp, readFile, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { preview } from 'vite'
const executable = process.argv[2]
if (!executable) throw new Error('Pass a Chromium browser executable as the first argument.')
const profile = await mkdtemp(join(tmpdir(), 'marniera-games-check-'))
const server = await preview({preview:{host:'127.0.0.1',port:5179,strictPort:true}})
const browser = spawn(executable, ['--headless=new','--disable-gpu','--no-first-run','--no-default-browser-check','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'], {windowsHide:true,stdio:'ignore'})
let socket
const pause = ms => new Promise(resolve=>setTimeout(resolve,ms))
try {
 let target
 for(let i=0;i<100;i++){try{const port=(await readFile(join(profile,'DevToolsActivePort'),'utf8')).split('\n')[0];const targets=await fetch('http://127.0.0.1:'+port+'/json/list').then(r=>r.json());target=targets.find(t=>t.type==='page');if(target)break}catch{}await pause(100)}
 assert.ok(target,'Headless browser started')
 socket=new WebSocket(target.webSocketDebuggerUrl)
 await new Promise((resolve,reject)=>{socket.addEventListener('open',resolve,{once:true});socket.addEventListener('error',reject,{once:true})})
 let serial=0;const pending=new Map();const errors=[]
 socket.addEventListener('message',event=>{const message=JSON.parse(event.data);if(message.id){const entry=pending.get(message.id);if(entry){pending.delete(message.id);message.error?entry.reject(new Error(JSON.stringify(message.error))):entry.resolve(message.result)}}else if(message.method==='Runtime.exceptionThrown')errors.push(message.params.exceptionDetails.text);else if(message.method==='Runtime.consoleAPICalled'&&message.params.type==='error')errors.push(message.params.args.map(arg=>arg.value||arg.description).join(' '))})
 const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++serial;pending.set(id,{resolve,reject});socket.send(JSON.stringify({id,method,params}))})
 const evaluate=async expression=>{const result=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true,userGesture:true});if(result.exceptionDetails)throw new Error(JSON.stringify(result.exceptionDetails));return result.result.value}
 const until=async expression=>{for(let i=0;i<300;i++){if(await evaluate(expression))return;await pause(50)}throw new Error('Timed out: '+expression+'; page: '+await evaluate('JSON.stringify({url:location.href,ready:document.readyState,heading:document.querySelector("h1")?.textContent})'))}
 const go=async route=>{
  await send('Page.navigate',{url:'http://127.0.0.1:5179/#/'+route})
  await until('location.hash === '+JSON.stringify('#/'+route)+' && document.querySelector(".games-hub") !== null')
  if(route.split('/').length===3) await until('document.querySelector(".game-panel")?.getAttribute("aria-label") === '+JSON.stringify({'letter-rush':'Letter Rush','block-garden':'Block Garden','double-trail':'Double Trail','pattern-pairs':'Pattern Pairs','four-in-a-row':'Four in a Row','tic-tac-toe':'Tic-Tac-Toe'}[route.split('/')[2]]))
  else await until('document.querySelectorAll(".game-card").length === 6')
  await evaluate('new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))')
 }
 const click=async expression=>{await evaluate(expression+'.click()');await pause(60)}
 const button=label=>'[...document.querySelectorAll(".games-hub button")].find(button=>button.textContent.trim()==='+JSON.stringify(label)+')'
 const select=async(index,value)=>{await evaluate('(()=>{const select=document.querySelectorAll(".strategy-settings select")['+index+'];select.value='+JSON.stringify(String(value))+';select.dispatchEvent(new Event("change",{bubbles:true}))})()');await pause(60)}
 const status='document.querySelector(".strategy-status")?.textContent'
 const noOverflow='document.documentElement.scrollWidth <= innerWidth'
 const pieces='document.querySelectorAll(".four-disc.piece-1,.four-disc.piece-2").length'
 const ticBoard='[...document.querySelectorAll(".tic-cell")].map(cell=>cell.textContent==="X"?1:cell.textContent==="O"?2:0)'
 const key=async(key,code,keyCode,text)=>{await send('Input.dispatchKeyEvent',{type:'keyDown',key,code,windowsVirtualKeyCode:keyCode,nativeVirtualKeyCode:keyCode,...(text?{text,unmodifiedText:text}:{})});await send('Input.dispatchKeyEvent',{type:'keyUp',key,code,windowsVirtualKeyCode:keyCode});await pause(60)}
 await send('Runtime.enable');await send('Page.enable');await send('Emulation.setFocusEmulationEnabled',{enabled:true})
 await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1100,deviceScaleFactor:1,mobile:false})

 await send('Page.navigate',{url:'http://127.0.0.1:5179/#/research'})
 await until('document.querySelectorAll(".research-page article").length === 18')
 assert.equal(await evaluate('document.querySelectorAll(".publication-group").length'),2)
 assert.equal(await evaluate('document.querySelector(".research-page a.button").href'),'https://scholar.google.com/citations?user=9C6oFA0AAAAJ&hl=en')
 assert.equal(await evaluate('document.querySelectorAll(".publication-description").length'),18)
 await evaluate('(()=>{const input=document.querySelector("#publication-search");Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value").set.call(input,"Infomap");input.dispatchEvent(new Event("input",{bubbles:true}))})()')
 await until('document.querySelectorAll(".research-page article").length === 1')
 assert.ok(await evaluate('document.querySelector(".research-page article").textContent.includes("Infomap")'))
 await evaluate('[...document.querySelectorAll("button")].find(button=>button.textContent==="Clear search").click()')
 await until('document.querySelectorAll(".research-page article").length === 18')
 await writeFile(join(profile,'research-desktop.png'),Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'))
 await send('Emulation.setDeviceMetricsOverride',{width:320,height:844,deviceScaleFactor:1,mobile:true})
 assert.ok(await evaluate(noOverflow),'Research fits mobile')
 await writeFile(join(profile,'research-mobile.png'),Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'))
 await send('Page.navigate',{url:'http://127.0.0.1:5179/#/'})
 await until('document.querySelector(".portfolio-hero") !== null')
 assert.ok(await evaluate('document.querySelector(".hero-content").textContent.includes("Data Science")'))
 assert.ok(await evaluate(noOverflow),'Home fits mobile')
 await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1100,deviceScaleFactor:1,mobile:false})
 await evaluate('new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))')
 assert.ok(await evaluate('document.querySelector(".home-hero-art").getBoundingClientRect().height < 450'),'Compact desktop hero')
 await writeFile(join(profile,'home-desktop.png'),Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'))
 assert.deepEqual(errors,[])
 console.log('PASS: Research grouping, profile link, descriptions, interactive search, mobile width and compact home hero.')
 console.log('Screenshots: '+profile)
} finally {socket?.close();browser.kill();await new Promise(resolve=>server.httpServer.close(resolve))}
