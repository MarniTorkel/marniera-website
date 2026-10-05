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
 await go('creative-lab/games')
 assert.deepEqual(await evaluate('[...document.querySelectorAll(".game-card h2")].map(el=>el.textContent)'),['Animal & Mosaic Jigsaw','Sudoku','Letter Rush','Block Garden','Double Trail','Pattern Pairs','Four in a Row','Tic-Tac-Toe'])
 for(const [category,count] of [['Words',1],['Puzzle',3],['Numbers',2],['Strategy',2],['All',8]]){await click(button(category));assert.equal(await evaluate('document.querySelectorAll(".game-card").length'),count)}
 // Exercise all four existing games through their unchanged inline directory controls.
 await click('[...document.querySelectorAll(".game-card")].find(card=>card.querySelector("h2").textContent==="Letter Rush")')
 await click(button('Start round'));assert.ok(await evaluate('!document.querySelector("input[maxlength]").disabled'))
 await evaluate('(()=>{const input=document.querySelector("input[maxlength]");const letter=input.value;Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value").set.call(input,letter.repeat(5));input.dispatchEvent(new Event("input",{bubbles:true}))})()');await pause(60)
 await click(button('Guess'));assert.equal(await evaluate('document.querySelectorAll(".word-cell.correct,.word-cell.present,.word-cell.absent").length'),5)
 await click(button('New round'));assert.equal(await evaluate('document.querySelectorAll(".word-cell.correct,.word-cell.present,.word-cell.absent").length'),0)
 await click('[...document.querySelectorAll(".game-card")].find(card=>card.querySelector("h2").textContent==="Block Garden")');await click('document.querySelector(".block-cell")');assert.ok(await evaluate('document.querySelectorAll(".block-cell.filled").length')>0)
 await click(button('New game'));assert.equal(await evaluate('document.querySelectorAll(".block-cell.filled").length'),0)
 await click('[...document.querySelectorAll(".game-card")].find(card=>card.querySelector("h2").textContent==="Double Trail")');const before=await evaluate('document.querySelector(".number-board").textContent')
 for(const direction of ['left','up','right','down'])await click('document.querySelector('+JSON.stringify('button[aria-label="Move '+direction+'"]')+')')
 assert.notEqual(await evaluate('document.querySelector(".number-board").textContent'),before)
 await click(button('New game'));assert.equal(await evaluate('document.querySelectorAll(".number-tile.occupied").length'),2)
 await click('[...document.querySelectorAll(".game-card")].find(card=>card.querySelector("h2").textContent==="Pattern Pairs")');await click('document.querySelectorAll(".memory-card")[0]');await click('document.querySelectorAll(".memory-card")[1]');assert.equal(await evaluate('document.querySelectorAll(".memory-card.revealed").length'),2)
 await click(button('New game'));assert.equal(await evaluate('document.querySelectorAll(".memory-card.revealed").length'),0)
 await go('creative-lab/games/four-in-a-row');assert.equal(await evaluate('document.querySelectorAll(".four-disc").length'),42)
 await select(0,'Hard');await click(button('New Game'));assert.equal(await evaluate(status),'Your turn')
 await evaluate('document.querySelectorAll(".four-column")[2].focus()');await key('ArrowRight','ArrowRight',39)
 assert.ok(await evaluate('document.activeElement.getAttribute("aria-label").startsWith("Column 4")'))
 await key('Enter','Enter',13,'\r');await until(status+' === "Your turn"');assert.equal(await evaluate(pieces),2)
 assert.ok(await evaluate('document.querySelectorAll(".four-column")[3].lastElementChild.classList.contains("piece-1")'),'Human piece falls to the bottom')
 assert.ok(await evaluate('[...document.querySelectorAll(".four-disc")].every(disc=>disc.textContent==="")'),'Pastel discs have no X/O markings')
 await evaluate('document.querySelector(".four-board").scrollIntoView({block:"center",behavior:"instant"})')
 await writeFile(join(profile,'four-desktop.png'),Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'))
 // Restart while a worker is pending, then verify no old move arrives.
 await click('document.querySelectorAll(".four-column")[0]');await until(status+' === "Computer thinking..."');await click(button('Restart'));await pause(800);assert.equal(await evaluate(pieces),0)
 await evaluate('document.querySelectorAll(".four-column")[0].click();document.querySelectorAll(".four-column")[1].click()');await until(status+' === "Your turn"');assert.equal(await evaluate('document.querySelectorAll(".four-disc.piece-1").length'),1,'No double human turn')
 await click(button('New Game'));await select(1,'computer');await click(button('New Game'));await until(status+' === "Your turn"');assert.equal(await evaluate(pieces),1,'Computer can start')
 await click(button('New Game'));await select(0,'Medium');await select(1,'human');await click(button('New Game'))
 for(let turn=0;turn<22;turn++){
  if(await evaluate('document.querySelector(".strategy-result") !== null'))break
  await until(status+' === "Your turn" || document.querySelector(".strategy-result") !== null')
  if(await evaluate('document.querySelector(".strategy-result") !== null'))break
  await click('[...document.querySelectorAll(".four-column")].find(column=>column.getAttribute("aria-disabled")==="false")')
  await until(status+' !== "Computer thinking..."')
 }
 assert.ok(await evaluate('document.querySelector(".strategy-result") !== null'),'Four in a Row reaches a result')
 assert.ok(await evaluate('document.querySelectorAll(".winning-piece").length >= 4'),'Winning line is marked')
 const finished=await evaluate(pieces);await click('document.querySelector(".four-column")');assert.equal(await evaluate(pieces),finished)
 await click(button('Play again'));assert.equal(await evaluate(pieces),0)
 await go('creative-lab/games/tic-tac-toe')
 for(const difficulty of ['Easy','Medium','Hard']){
  await select(0,difficulty);await click(button('New Game'));await click('document.querySelectorAll(".tic-cell")[0]');await until(status+' === "Your turn"');assert.equal((await evaluate(ticBoard)).filter(Boolean).length,2)
  await click('document.querySelectorAll(".tic-cell")[0]');assert.equal((await evaluate(ticBoard)).filter(Boolean).length,2,'Occupied square is ignored')
  await click(button('New Game'))
 }
 await select(0,'Hard')
 for(const human of [1,2]){
  await select(1,human);await click(button('New Game'))
  for(let turn=0;turn<5;turn++){
   await until(status+' === "Your turn" || document.querySelector(".strategy-result") !== null')
   if(await evaluate('document.querySelector(".strategy-result") !== null'))break
   const move=ticAI(await evaluate(ticBoard),human,'Hard')
   await click('document.querySelectorAll(".tic-cell")['+move+']')
  }
  await until('document.querySelector(".strategy-result") !== null');assert.equal(await evaluate(status),'Draw','Optimal play draws with either human piece')
  await click(button('Play again'));await until(status+' === "Your turn"');assert.equal((await evaluate(ticBoard)).filter(Boolean).length,human===1?0:1)
  await click(button('New Game'))
 }
 await select(1,1);await click(button('New Game'));await click('document.querySelectorAll(".tic-cell")[4]');await until(status+' === "Computer thinking..."');await click(button('New Game'));await pause(500);assert.equal((await evaluate(ticBoard)).filter(Boolean).length,0,'New Game cancels old turn')
 await send('Emulation.setDeviceMetricsOverride',{width:320,height:844,deviceScaleFactor:1,mobile:true});await send('Emulation.setTouchEmulationEnabled',{enabled:true})
 for(const id of ['four-in-a-row','tic-tac-toe']){
  await go('creative-lab/games/'+id);assert.ok(await evaluate(noOverflow),id+' fits at 320px');await click(button('New Game'))
  const selector=id==='four-in-a-row'?'.four-column':'.tic-cell'
  await evaluate('document.querySelector('+JSON.stringify(selector)+').scrollIntoView({block:"center",behavior:"instant"})')
  const bounds=await evaluate('(()=>{const r=document.querySelector('+JSON.stringify(selector)+').getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}})()')
  await send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[bounds]});await send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]})
  await until(status+' === "Your turn"');await until(id==='four-in-a-row'?pieces+' === 2':ticBoard+'.filter(Boolean).length === 2')
  assert.ok(await evaluate(noOverflow),'Board stays within mobile viewport')
  await writeFile(join(profile,id+'-mobile.png'),Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'))
 }
 await evaluate('document.querySelectorAll(".tic-cell")[1].focus()');await key('ArrowRight','ArrowRight',39);assert.ok(await evaluate('document.activeElement.getAttribute("aria-label").startsWith("Row 1, column 3")'))
 await key('Enter','Enter',13,'\r');await until(status+' !== "Computer thinking..."');assert.equal(await evaluate('document.querySelectorAll(".tic-cell")[2].textContent'),'X','Tic-Tac-Toe supports keyboard play')

 await send('Emulation.setDeviceMetricsOverride',{width:320,height:844,deviceScaleFactor:1,mobile:true})

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
 await go('creative-lab/games/sudoku')
 for(const size of [4,6,9]){
  await evaluate('(()=>{const select=document.querySelector(".sudoku-game select");select.value="'+size+'";select.dispatchEvent(new Event("change",{bubbles:true}))})()')
  await until('document.querySelectorAll(".sudoku-board button").length === '+size*size)
  assert.ok(await evaluate(noOverflow),'Sudoku fits at 320px')
  await click('document.querySelector(".sudoku-board .editable")')
  await evaluate('document.querySelector(".sudoku-board .editable").focus()');await key('1','Digit1',49,'1')
  assert.equal(await evaluate('document.querySelector(".sudoku-board .editable").textContent.replace("!","")'),'1')
  await click(button('Undo'))
  assert.equal(await evaluate('document.querySelector(".sudoku-board .editable").textContent'),'')
  await click('document.querySelector(".sudoku-board .editable")')
  await click('document.querySelector(".sudoku-keypad button")')
  await click(button('Restart'))
  assert.ok(await evaluate('[...document.querySelectorAll(".sudoku-board .editable")].every(b=>!b.textContent)'))
 }
 await writeFile(join(profile,'sudoku-mobile.png'),Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'))
 assert.deepEqual(errors,[],'No runtime or console errors')
 console.log('PASS: production worker AI; all eight games; directory filters; keyboard/touch; 320px layouts; computer-first play; optimal draws; restart, replay and stale-worker cancellation.')
 console.log('Screenshots: '+profile)
} finally {socket?.close();browser.kill();await new Promise(resolve=>server.httpServer.close(resolve))}
