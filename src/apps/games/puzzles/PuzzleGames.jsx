
import { useState, useRef } from 'react'
import Jigsaw from './Jigsaw'
import { makeSudoku, boxShape, conflicts, sudokuComplete } from './logic'
import './puzzles.css'
const seed=()=>Math.floor(Math.random()*4294967296)
function focusArrow(event,index,size,refs){
 const delta={ArrowLeft:-1,ArrowRight:1,ArrowUp:-size,ArrowDown:size}[event.key]
 if(delta!==undefined){event.preventDefault();refs.current[Math.max(0,Math.min(size*size-1,index+delta))]?.focus()}
}
export function ArtPuzzle(){ return <Jigsaw/> }
export function Sudoku(){
 const [size,setSize]=useState(9),[puzzle,setPuzzle]=useState(()=>makeSudoku(9,seed())),[entries,setEntries]=useState(null),[selected,setSelected]=useState(null),[message,setMessage]=useState(''),[history,setHistory]=useState([])
 const refs=useRef([]),board=entries||puzzle.givens,bad=conflicts(board,size),won=sudokuComplete(board,size),[height,width]=boxShape(size)
 const start=(nextSize=size)=>{setSize(nextSize);setPuzzle(makeSudoku(nextSize,seed()));setEntries(null);setHistory([]);setSelected(null);setMessage('New puzzle ready.')}
 const enter=(value,index=selected)=>{if(index===null||puzzle.givens[index]||won)return;setHistory([...history,board]);setEntries(board.map((v,i)=>i===index?value:v));setMessage(value?'Number entered.':'Cell cleared.')}
 return <div className="sudoku-game"><h2>Sudoku</h2><p>Fill every row, column and outlined box with each number exactly once. Select a cell, then type a number or use the number buttons. Underlined numbers are your entries; bold numbers are fixed clues.</p>
 <div className="game-toolbar"><label>Board size <select value={size} onChange={e=>start(Number(e.target.value))}>{[4,6,9].map(n=><option key={n} value={n}>{n} × {n} ({n*n} cells)</option>)}</select></label><button className="button primary" onClick={()=>start()}>New game</button><button className="button secondary" onClick={()=>{setEntries(null);setHistory([]);setMessage('Puzzle restarted.')}}>Restart</button><button className="button secondary" disabled={!history.length} onClick={()=>{setEntries(history.at(-1));setHistory(history.slice(0,-1));setMessage('Last entry undone.')}}>Undo</button></div>
 <p role="status">{won?'Puzzle complete! Well done.':bad.length?bad.length+' conflicting cells marked with !. Check rows, columns and boxes.':message||'Choose an empty cell to begin.'}</p>
 <div className="sudoku-board" role="group" aria-label={size+' by '+size+' Sudoku board'} style={{'--size':size}}>{board.map((value,index)=><button key={index} ref={el=>{refs.current[index]=el}} className={(puzzle.givens[index]?'given':'editable')+(selected===index?' chosen':'')+(bad.includes(index)?' conflict':'')} style={{borderRightWidth:(index%size+1)%width===0&&index%size!==size-1?3:1,borderBottomWidth:(Math.floor(index/size)+1)%height===0&&index<size*(size-1)?3:1}} aria-label={'Row '+(Math.floor(index/size)+1)+', column '+(index%size+1)+', '+(value||'empty')+(puzzle.givens[index]?', fixed clue':'')+(bad.includes(index)?', conflict':'')} aria-pressed={selected===index} onClick={()=>setSelected(index)} onFocus={()=>setSelected(index)} onKeyDown={e=>{focusArrow(e,index,size,refs);if(/^[1-9]$/.test(e.key)&&Number(e.key)<=size){e.preventDefault();enter(Number(e.key),index)}if(e.key==='Backspace'||e.key==='Delete'||e.key==='0'){e.preventDefault();enter(0,index)}}}>{value||''}{bad.includes(index)&&<small aria-hidden="true">!</small>}</button>)}</div>
 <div className="sudoku-keypad" aria-label="Enter number">{Array.from({length:size},(_,i)=><button className="button secondary" key={i} disabled={selected===null||!!puzzle.givens[selected]||won} onClick={()=>enter(i+1)}>{i+1}</button>)}<button className="button secondary" disabled={selected===null||!!puzzle.givens[selected]||won} onClick={()=>enter(0)}>Erase</button></div>
 <button className="button secondary" onClick={()=>{const errors=board.filter((v,i)=>v&&v!==puzzle.solution[i]).length;setMessage(errors?errors+' entries need another look.':'All entered numbers are correct so far.')}}>Check entries</button>
 {won&&<button className="button primary" onClick={()=>start()}>Play again</button>}</div>
}
