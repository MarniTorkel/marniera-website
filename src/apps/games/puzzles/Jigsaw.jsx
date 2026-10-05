
import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { artwork, designs, freshJigsaw, layouts, piecePath, placePiece, targetAt, validSave } from './jigsawLogic'
import './jigsaw.css'
const storageKey='marniera-jigsaw-v1'
function load(){try{const saved=JSON.parse(localStorage.getItem(storageKey));if(validSave(saved))return saved}catch{}return freshJigsaw()}
function Piece({game,index,image,whole=false}){
 const id=useId(),[cols,rows]=layouts[game.count],w=600/cols,h=450/rows,pad=Math.min(w,h)*.22
 const x=index%cols*w,y=Math.floor(index/cols)*h,path=piecePath(index,game.count,game.shape)
 return <svg viewBox={whole?'0 0 600 450':[x-pad,y-pad,w+2*pad,h+2*pad].join(' ')} aria-hidden="true"><defs><clipPath id={id}><path d={path}/></clipPath></defs><image href={image} width="600" height="450" clipPath={'url(#'+id+')'}/><path d={path} fill="none" stroke="#526d70" strokeWidth=".8"/></svg>
}
export default function Jigsaw(){
 const [game,setGame]=useState(load),[selected,setSelected]=useState(null),[drag,setDrag]=useState(null),[preview,setPreview]=useState(false),[message,setMessage]=useState('Choose a piece to begin.'),[saveMessage,setSaveMessage]=useState(''),[full,setFull]=useState(false)
 const board=useRef(null),container=useRef(null),pointer=useRef(null),suppressClick=useRef(false)
 const image=useMemo(()=>artwork(game.design,game.seed),[game.design,game.seed]),[cols,rows]=layouts[game.count],complete=game.placed.length===game.count
 useEffect(()=>{try{localStorage.setItem(storageKey,JSON.stringify(game));setSaveMessage('Progress saved on this device.')}catch{setSaveMessage('Progress cannot be saved in this browser.')}},[game])
 useEffect(()=>{const sync=()=>setFull(document.fullscreenElement===container.current);document.addEventListener('fullscreenchange',sync);return()=>document.removeEventListener('fullscreenchange',sync)},[])
 const start=(changes={})=>{setGame(freshJigsaw(changes.count??game.count,changes.design??game.design,Date.now()>>>0,changes.shape??game.shape));setSelected(null);setDrag(null);pointer.current=null;setMessage('New puzzle ready.')}
 const place=(piece,target)=>{const next=placePiece(game,piece,target);if(next!==game){setGame(next);setSelected(null);setMessage('Piece placed.');}else setMessage('That piece belongs elsewhere. Try another position.')}
 const onDown=(event,index)=>{if(event.button!==0)return;setSelected(index);pointer.current={index,x:event.clientX,y:event.clientY,moved:false};event.currentTarget.setPointerCapture(event.pointerId)}
 const onMove=event=>{const p=pointer.current;if(!p)return;if(Math.hypot(event.clientX-p.x,event.clientY-p.y)>5)p.moved=true;if(p.moved)setDrag({index:p.index,x:event.clientX,y:event.clientY})}
 const onUp=event=>{const p=pointer.current;if(!p)return;pointer.current=null;setDrag(null);if(p.moved){suppressClick.current=true;setTimeout(()=>{suppressClick.current=false},0);place(p.index,targetAt(event.clientX,event.clientY,board.current.getBoundingClientRect(),game.count))}}
 useEffect(()=>{
 const cancel=()=>{pointer.current=null;setDrag(null)}
 window.addEventListener('pointermove',onMove);window.addEventListener('pointerup',onUp);window.addEventListener('pointercancel',cancel)
 return()=>{window.removeEventListener('pointermove',onMove);window.removeEventListener('pointerup',onUp);window.removeEventListener('pointercancel',cancel)}
 },[game])
 return <div className="jigsaw" ref={container}><h2>Animal & Mosaic Jigsaw</h2><p>Choose a geometric animal illustration or an original mosaic, then drag pieces into the centre. Correct pieces snap into place. You can also select a piece and tap its position, or use Tab and Enter.</p>
 <div className="jigsaw-designs" aria-label="Choose mosaic design">{designs.map(design=><button key={design.id} aria-pressed={game.design===design.id} onClick={()=>start({design:design.id})}><img src={artwork(design.id,game.seed)} alt=""/><span>{design.title}</span></button>)}</div>
 <div className="game-toolbar"><label>Pieces<select value={game.count} onChange={e=>start({count:Number(e.target.value)})}>{Object.keys(layouts).map(n=><option key={n} value={n}>{n} pieces</option>)}</select></label><label>Piece shape<select value={game.shape} onChange={e=>start({shape:e.target.value})}><option value="classic">Classic jigsaw</option><option value="square">Square tiles</option></select></label>
 <button className="button primary" onClick={()=>start()}>{designs.find(d=>d.id===game.design)?.image?'New puzzle':'New artwork'}</button><button className="button secondary" onClick={()=>{setGame({...game,placed:[]});setSelected(null);setMessage('Puzzle restarted.')}}>Restart</button>
 <button className="button secondary" aria-pressed={preview} onClick={()=>setPreview(!preview)}>Picture preview</button>
 {typeof document!=='undefined'&&document.fullscreenEnabled&&<button className="button secondary" onClick={async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await container.current.requestFullscreen()}catch{setMessage('Fullscreen is unavailable in this browser.')}}}>{full?'Exit fullscreen':'Fullscreen'}</button>}</div>
 <p role="status">{complete?'Puzzle complete! Well done.':message} {game.placed.length} / {game.count} pieces placed.</p>
 {preview&&<figure className="jigsaw-preview"><img src={image} alt={designs.find(d=>d.id===game.design)?.title+' completed puzzle reference'}/><figcaption>Completed picture</figcaption></figure>}
 <div className="jigsaw-board" ref={board} style={{'--cols':cols,'--rows':rows}} aria-label="Central puzzle board" role="group">
 {Array.from({length:game.count},(_,i)=><button key={i} data-slot={i} aria-label={'Row '+(Math.floor(i/cols)+1)+', column '+(i%cols+1)+(game.placed.includes(i)?', placed':', empty')} aria-disabled={selected===null||game.placed.includes(i)} onClick={()=>{if(selected!==null)place(selected,i)}} onKeyDown={event=>{const delta={ArrowLeft:-1,ArrowRight:1,ArrowUp:-cols,ArrowDown:cols}[event.key];if(delta!==undefined){event.preventDefault();board.current.querySelector('[data-slot="'+Math.max(0,Math.min(game.count-1,i+delta))+'"]')?.focus()}}}/>)}
 <div className="jigsaw-placed">{game.placed.map(i=><Piece key={i} game={game} index={i} image={image} whole/>)}</div></div>
 <div className="jigsaw-tray" onDragStart={event=>event.preventDefault()} role="group" aria-label="Unplaced puzzle pieces">{game.order.filter(i=>!game.placed.includes(i)).map(i=><button key={i} data-piece={i} className={selected===i?'selected':''} aria-label={'Select piece '+(i+1)} aria-pressed={selected===i} onClick={()=>{if(suppressClick.current){suppressClick.current=false;return}setSelected(i);setMessage('Piece selected. Choose its position on the board.')}} onPointerDown={event=>onDown(event,i)} onPointerCancel={()=>{pointer.current=null;setDrag(null)}}><Piece game={game} index={i} image={image}/></button>)}</div>
 {drag&&<div className="jigsaw-drag" style={{left:drag.x,top:drag.y,width:(board.current?.clientWidth||600)/cols*1.44,aspectRatio:(600/cols+Math.min(600/cols,450/rows)*.44)/(450/rows+Math.min(600/cols,450/rows)*.44)}}><Piece game={game} index={drag.index} image={image}/></div>}
 <p className="feature-note">{saveMessage} Original AI-generated animal illustrations and procedural geometric designs, created for Marniera.</p>
 {complete&&<button className="button primary" onClick={()=>start()}>Play again</button>}</div>
}
