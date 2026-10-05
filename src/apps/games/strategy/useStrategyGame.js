import { useEffect, useReducer, useState } from 'react'
import { createGameReducer } from './state'
export default function useStrategyGame(id,rules) {
 const [difficulty,setDifficulty]=useState('Medium')
 const [human,setHuman]=useState(1)
 const [first,setFirst]=useState('human')
 const reducer=createGameReducer(rules)
 const [state,dispatch]=useReducer(reducer,undefined,()=>reducer(undefined,{type:'init'}))
 const winner=rules.getWinner(state.board),draw=rules.isDraw(state.board),over=Boolean(winner||draw)
 const computer=3-human
 const thinking=state.started&&!over&&state.turn===computer
 useEffect(()=>{
  if(!thinking||state.error)return
  let worker,timer,cancelled=false
  const fail=()=>{if(!cancelled)dispatch({type:'error',round:state.round})}
  try {
   worker=new Worker(new URL('./strategy.worker.js',import.meta.url),{type:'module'})
   worker.onmessage=({data})=>{
    if(data.error||!rules.validMoves(state.board).includes(data.move)){fail();return}
    timer=setTimeout(()=>{if(!cancelled)dispatch({type:'move',move:data.move,player:computer,round:state.round})},200)
   }
   worker.onerror=event=>{event.preventDefault();fail()}
   worker.postMessage({game:id,board:state.board,player:computer,difficulty,random:Math.random()})
  } catch {fail()}
  return ()=>{cancelled=true;clearTimeout(timer);worker?.terminate()}
 },[id,state.board,state.round,state.error,thinking,computer,difficulty,rules])
 const start=()=>dispatch({type:'start',first:id==='tic-tac-toe'?1:first==='human'?human:computer})
 return {state,difficulty,setDifficulty,human,setHuman,computer,first,setFirst,winner,draw,over,thinking,
  canPlay:state.started&&!over&&!thinking&&!state.error,
  move:move=>dispatch({type:'move',move,player:human,round:state.round}),
  start,setup:()=>dispatch({type:'setup'}),retry:()=>dispatch({type:'retry'})}
}
