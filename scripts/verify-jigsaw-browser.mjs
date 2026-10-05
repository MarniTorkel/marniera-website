import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { mkdtemp, readFile, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { preview } from 'vite'
import { chooseMove as ticAI } from '../src/apps/games/strategy/ticTacToe/ai.js'
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
  if(route.split('/').length===3) await until('document.querySelector(".game-panel")?.getAttribute("aria-label") === '+JSON.stringify({'dot-mosaic':'Animal & Mosaic Jigsaw','sudoku':'Sudoku','letter-rush':'Letter Rush','block-garden':'Block Garden','double-trail':'Double Trail','pattern-pairs':'Pattern Pairs','four-in-a-row':'Four in a Row','tic-tac-toe':'Tic-Tac-Toe'}[route.split('/')[2]]))
  else await until('document.querySelectorAll(".game-card").length === 8')
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
 await go('creative-lab/games/dot-mosaic')
 for(const count of [12,24,48,96]){
  await evaluate('(()=>{const select=document.querySelector(".jigsaw select");select.value="'+count+'";select.dispatchEvent(new Event("change",{bubbles:true}))})()')
  await until('document.querySelectorAll(".jigsaw-tray button").length === '+count)
  assert.ok(await evaluate(noOverflow),'Jigsaw fits mobile')
 }
 await evaluate('(()=>{const select=document.querySelector(".jigsaw select");select.value="12";select.dispatchEvent(new Event("change",{bubbles:true}))})()')
 await until('document.querySelectorAll(".jigsaw-tray button").length === 12')
 await click('document.querySelector("[data-piece=\\"0\\"]")')
 await click('document.querySelector("[data-slot=\\"1\\"]")')
 assert.equal(await evaluate('document.querySelectorAll(".jigsaw-tray button").length'),12)
 await evaluate('document.querySelector("[data-slot=\\"0\\"]").focus()')
 await key('Enter','Enter',13,'\r')
 await until('document.querySelectorAll(".jigsaw-tray button").length === 11')
 await send('Page.reload')
 await until('document.querySelectorAll(".jigsaw-tray button").length === 11')
 // Real pointer drag from the tray onto the corresponding central position.
 await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1400,deviceScaleFactor:1,mobile:false})
 await evaluate('document.querySelector(".jigsaw-board").scrollIntoView({block:"center",behavior:"instant"})')
 const pos=await evaluate('(()=>{const a=document.querySelector("[data-piece=\\"1\\"]").getBoundingClientRect(),b=document.querySelector("[data-slot=\\"1\\"]").getBoundingClientRect();return {ax:a.x+a.width/2,ay:a.y+a.height/2,bx:b.x+b.width/2,by:b.y+b.height/2}})()')
 await send('Input.dispatchMouseEvent',{type:'mousePressed',x:pos.ax,y:pos.ay,button:'left',clickCount:1})
 await send('Input.dispatchMouseEvent',{type:'mouseMoved',x:pos.bx,y:pos.by,buttons:1})
 await send('Input.dispatchMouseEvent',{type:'mouseReleased',x:pos.bx,y:pos.by,button:'left',clickCount:1})
 await until('document.querySelectorAll(".jigsaw-tray button").length === 10')
 for(let i=2;i<12;i++){await click('document.querySelector("[data-piece=\\"'+i+'\\"]")');await click('document.querySelector("[data-slot=\\"'+i+'\\"]")')}
 await until('document.querySelector(".jigsaw [role=status]").textContent.includes("Puzzle complete")')
 await writeFile(join(profile,'jigsaw-desktop.png'),Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'))
 await click(button('Restart'))
 assert.equal(await evaluate('document.querySelectorAll(".jigsaw-tray button").length'),12)
 await click(button('Picture preview'))
 assert.ok(await evaluate('!!document.querySelector(".jigsaw-preview img")'))
 await send('Emulation.setDeviceMetricsOverride',{width:320,height:844,deviceScaleFactor:1,mobile:true})
 await evaluate('document.querySelector(".jigsaw-board").scrollIntoView({block:"center",behavior:"instant"})')
 assert.ok(await evaluate(noOverflow))

 const touchPiece=await evaluate('(()=>{const button=document.querySelector(".jigsaw-tray button"),i=button.dataset.piece,a=button.getBoundingClientRect(),b=[...document.querySelectorAll("[data-slot]")].find(el=>el.dataset.slot===i).getBoundingClientRect();return {ax:a.x+a.width/2,ay:a.y+a.height/2,bx:b.x+b.width/2,by:b.y+b.height/2}})()')
 await send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:touchPiece.ax,y:touchPiece.ay}]})
 await send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:touchPiece.bx,y:touchPiece.by}]})
 await send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]})
 await until('document.querySelectorAll(".jigsaw-tray button").length === 11')
 await evaluate('(()=>{const select=document.querySelectorAll(".jigsaw select")[1];select.value="square";select.dispatchEvent(new Event("change",{bubbles:true}))})()')
 await until('document.querySelectorAll(".jigsaw-tray button").length === 12')
 await click('document.querySelectorAll(".jigsaw-designs button")[1]')
 await until('document.querySelectorAll(".jigsaw-designs button")[1].getAttribute("aria-pressed")==="true"')
 await until('[...document.querySelectorAll(".jigsaw-designs img")].every(img=>img.complete&&img.naturalWidth>0)')
 await writeFile(join(profile,'jigsaw-mobile.png'),Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'))

 assert.deepEqual(errors,[]);console.log('PASS: jigsaw mouse/touch dragging, keyboard placement, completion, restart, saved progress, gallery images, shape changes and mobile layout; screenshots '+profile)
} finally {socket?.close();browser.kill();await new Promise(resolve=>server.httpServer.close(resolve))}
