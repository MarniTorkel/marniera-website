import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { mkdtemp, readFile, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createServer } from 'vite'
const executable = process.argv[2]
if (!executable) throw new Error('Pass a Chromium browser executable as the first argument.')
const profile = await mkdtemp(join(tmpdir(), 'marniera-browser-check-'))
const server = await createServer({configLoader:'native',server:{host:'127.0.0.1',port:5179,strictPort:true}})
await server.listen()
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
  const canonical=route.replace('ai-lab/research-ideas','ai-lab/projects').replace('about/publications','research')
  await until('location.hash === '+JSON.stringify('#/'+canonical)+' && document.readyState !== "loading" && document.querySelector("h1") !== null')
  if(route.includes('/cheatsheet/')) {
   const selected=route.split('/').at(-1)==='first-principles'?'prompting':route.split('/').at(-1)
   await until('document.querySelector(".cheatsheet-tabs a[aria-current=page]")?.getAttribute("href") === '+JSON.stringify('#/ai-lab/guide/cheatsheet/'+selected))
   await until(selected==='prompting'?'document.querySelector(".prompt-reference") !== null':'document.querySelector(".reference-cheatsheet") !== null')
  }
  await evaluate('new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))')
 }
 const click=async expression=>{await evaluate(expression+'.click()');await pause(60)}
 const input=async value=>{await evaluate('(()=>{const input=document.querySelector("input[type=search]");Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value").set.call(input,'+JSON.stringify(value)+');input.dispatchEvent(new Event("input",{bubbles:true}))})()');await pause(100)}
 const button=label=>'[...document.querySelectorAll("button")].find(button=>button.textContent.trim()==='+JSON.stringify(label)+')'
 const expanded='document.querySelectorAll(".cheat-accordion button[aria-expanded=true]").length'
 const noOverflow='document.documentElement.scrollWidth <= innerWidth'
 await send('Runtime.enable');await send('Page.enable');await send('Emulation.setFocusEmulationEnabled',{enabled:true})
 await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false})
 await go('data-science');assert.equal(await evaluate('document.querySelectorAll(".ds-card").length'),6)
 await click(button('Spatial'));assert.equal(await evaluate('document.querySelectorAll(".ds-card").length'),1)
 await click(button('All'));assert.equal(await evaluate('document.querySelectorAll(".ds-card").length'),6)
 assert.ok(await evaluate(noOverflow),'Desktop portfolio fits')
 await writeFile(join(profile,'data-science-desktop.png'),Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'))
 await go('data-science/wearable-activity-intelligence');assert.ok(await evaluate('document.body.innerText.includes("participant")'));assert.ok(await evaluate('!document.querySelector("main").innerText.includes("Results")'))
 await go('ai-lab/guide/cheatsheet');assert.equal(await evaluate('document.querySelectorAll(".cheatsheet-overview article").length'),9)
 await go('ai-lab/guide/cheatsheet/prompting');assert.equal(await evaluate(expanded),1,'First category opens on desktop')
 await click(button('Collapse all'));assert.equal(await evaluate(expanded),0)
 await input('FIRST PRINCIPLES');assert.equal(await evaluate(expanded),1);assert.ok(await evaluate('document.querySelector(".cheat-accordion h3").textContent.includes("Think & Challenge")'))
 await input('');assert.equal(await evaluate(expanded),0,'Clearing search restores collapsed state')
 await click(button('Expand all'));assert.equal(await evaluate(expanded),11)
 await input('FIRST PRINCIPLES');await click(button('Collapse all'));assert.equal(await evaluate(expanded),0,'Collapse all works during search')
 await click(button('Expand all'));assert.equal(await evaluate(expanded),1)
 await input('');assert.equal(await evaluate(expanded),11,'Search controls preserve normal state')
 await click(button('Collapse all'));await click('document.querySelector(".prompt-featured button")');assert.equal(await evaluate(expanded),1);assert.ok(await evaluate('document.activeElement.id.startsWith("prompt-")'),'Most Useful focuses visible prompt')
 await send('Browser.grantPermissions',{origin:'http://127.0.0.1:5179',permissions:['clipboardReadWrite','clipboardSanitizedWrite']})
 await click('document.querySelector(".cheat-accordion button[aria-expanded=true]").closest("section").querySelector(".prompt-copy button")')
 assert.ok(await evaluate('navigator.clipboard.readText().then(text=>text.length>0)'),'Copy writes to clipboard')
 await click('document.querySelector(".prompt-builder summary")');await click(button('Load example'))
 assert.ok(await evaluate('document.querySelector(".builder-preview pre").textContent.includes("ROLE")'))
 await click(button('Copy Prompt'));assert.ok(await evaluate('navigator.clipboard.readText().then(text=>text.includes("GOAL"))'))
 await go('ai-lab/guide/cheatsheet/first-principles');await until('document.activeElement.id === "prompt-first-principles"');assert.equal(await evaluate(expanded),2,'Legacy prompt link opens its category')
 for(const sheet of ['foundations','agents','rag','protocols','evaluations','coding-agents','security','strategy']){
  await go('ai-lab/guide/cheatsheet/'+sheet);assert.equal(await evaluate(expanded),1,sheet);await click(button('Expand all'));assert.ok(await evaluate(expanded)>=10);await click(button('Collapse all'));assert.equal(await evaluate(expanded),0)
 }
 await go('ai-lab/guide/cheatsheet/protocols');await input('A2A');assert.ok(await evaluate(expanded)>0);await input('nonsense9876');assert.equal(await evaluate(expanded),0);assert.ok(await evaluate('document.body.innerText.includes("No matching references")'))
 await go('ai-lab/research-ideas');await until('location.hash === "#/ai-lab/projects"');assert.equal(await evaluate('document.querySelector("h1").textContent'),'AI Projects')
 await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true})
 await go('ai-lab/guide/cheatsheet/prompting');assert.equal(await evaluate(expanded),0,'Mobile categories initially collapsed');assert.ok(await evaluate(noOverflow),'Mobile prompting fits')
 assert.ok(await evaluate('(()=>{const tabs=document.querySelector(".cheatsheet-tabs");return tabs.scrollWidth>tabs.clientWidth&&getComputedStyle(tabs).overflowX==="auto"})()'),'Mobile tabs scroll')
 await input('FIRST PRINCIPLES');assert.equal(await evaluate(expanded),1);assert.ok(await evaluate(noOverflow),'Mobile search results fit')
 await evaluate('document.querySelector(".cheat-accordion").scrollIntoView({block:"center"})')
 await pause(100)
 await writeFile(join(profile,'cheatsheet-mobile.png'),Buffer.from((await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false})).data,'base64'))
 await input('');await evaluate('document.querySelector(".cheat-accordion button").focus()')
 assert.ok(await evaluate('document.activeElement.matches(".cheat-accordion button")'),'Keyboard target is focused')
 await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13,nativeVirtualKeyCode:13,text:'\r',unmodifiedText:'\r'})
 await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13})
 await pause(100);assert.equal(await evaluate(expanded),1,'Accordion toggles with keyboard Enter')
 await go('data-science');assert.ok(await evaluate(noOverflow),'Mobile Data Science fits')
 await go('data-science/causal-inference-lab');assert.ok(await evaluate(noOverflow),'Mobile case study fits')
 await go('about/publications');assert.ok(await evaluate('!document.querySelector(".publications").innerText.includes("research projects")'))
 assert.deepEqual(errors,[],'No browser runtime exceptions')
 console.log('PASS: desktop/mobile layout, Data Science filters, all cheatsheet accordions, search restoration, clipboard, Prompt Builder, Most Useful and legacy redirects.')
 console.log('Screenshots: '+profile)
} finally {
 socket?.close();browser.kill();await server.close()
 // Keep only this isolated temporary profile for screenshot inspection; it contains no user browser data.
}
