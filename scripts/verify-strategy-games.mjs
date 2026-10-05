import assert from 'node:assert/strict'
import * as four from '../src/apps/games/strategy/fourInARow/logic.js'
import { chooseMove as fourAI, evaluateBoard } from '../src/apps/games/strategy/fourInARow/ai.js'
import * as tic from '../src/apps/games/strategy/ticTacToe/logic.js'
import { chooseMove as ticAI } from '../src/apps/games/strategy/ticTacToe/ai.js'
import { createGameReducer } from '../src/apps/games/strategy/state.js'
const boardWith=(size,cells,player=1)=>{const board=Array(size).fill(0);for(const cell of cells)board[cell]=player;return board}
for(const cells of [[35,36,37,38],[16,23,30,37],[35,29,23,17],[38,30,22,14]]) {
 const board=boardWith(42,cells)
 assert.equal(four.getWinner(board),1,'Four direction: '+cells)
 assert.equal(four.winningLine(board).length,4)
 assert.equal(four.applyMove(board,6,2),null,'No moves after victory')
}
assert.equal(four.getWinner(boardWith(42,[5,6,7,8])),0,'Do not wrap a row')
const empty=four.createBoard();const dropped=four.applyMove(empty,3,1)
assert.equal(dropped[38],1);assert.equal(empty[38],0,'Moves do not mutate input')
assert.equal(four.applyMove(dropped,3,2)[31],2,'Pieces fall onto previous pieces')
let fullColumn=four.createBoard();for(let i=0;i<6;i++)fullColumn=four.applyMove(fullColumn,3,i%2+1)
assert.equal(four.applyMove(fullColumn,3,1),null);assert.ok(!four.validMoves(fullColumn).includes(3))
for(const bad of [-1,7,1.5,NaN])assert.equal(four.applyMove(empty,bad,1),null)
const fourDraw=Array.from({length:42},(_,i)=>(Math.floor(i/7)+Math.floor((i%7)/2))%2+1)
assert.equal(four.getWinner(fourDraw),0);assert.equal(four.isDraw(fourDraw),true)
assert.equal(fourAI(fourDraw,1,'Hard'),null)
for(const difficulty of ['Medium','Hard']) {
 assert.equal(fourAI(boardWith(42,[35,36,37],1),2,difficulty),3,'Block immediate win')
 assert.equal(fourAI(boardWith(42,[35,36,37],2),2,difficulty),3,'Take immediate win')
 assert.equal(fourAI(boardWith(42,[21,28,35],1),2,difficulty),0,'Block vertical threat')
 assert.ok(four.validMoves(fullColumn).includes(fourAI(fullColumn,2,difficulty)))
}
assert.equal(fourAI(empty,2,'Medium'),3,'Medium prefers centre')
assert.ok(evaluateBoard(boardWith(42,[38],2),2)>evaluateBoard(boardWith(42,[35],2),2),'Hard values centre control')
assert.equal(fourAI(empty,2,'Hard'),fourAI(empty,2,'Hard'),'Hard search is deterministic')
assert.ok(four.validMoves(empty).includes(fourAI(empty,2,'Hard',0.5,{nodeLimit:20})))
for(const rules of [four,tic])for(const difficulty of ['Easy','Medium','Hard']){
 const ai=rules===four?fourAI:ticAI
 const board=rules.createBoard()
 for(const random of [0,0.2,0.5,0.999])assert.ok(rules.validMoves(board).includes(ai(board,2,difficulty,random)))
}
assert.notEqual(fourAI(empty,2,'Easy',0),fourAI(empty,2,'Easy',0.99),'Easy varies with injected randomness')
for(const cells of tic.lines){assert.equal(tic.getWinner(boardWith(9,cells,2)),2,'Tic direction: '+cells);assert.equal(tic.winningLine(boardWith(9,cells,2)).length,3)}
const ticDraw=[1,2,1,1,2,2,2,1,1]
assert.equal(tic.isDraw(ticDraw),true);assert.equal(tic.getWinner(ticDraw),0);assert.equal(ticAI(ticDraw,1,'Hard'),null)
assert.equal(tic.applyMove([1,...Array(8).fill(0)],0,2),null)
assert.equal(tic.applyMove(tic.createBoard(),9,1),null)
const ticEmpty=tic.createBoard();assert.equal(tic.applyMove(ticEmpty,4,1)[4],1);assert.equal(ticEmpty[4],0)
assert.equal(ticAI([1,1,0,0,2,0,0,0,0],2,'Medium'),2,'Medium blocks')
assert.equal(ticAI([2,2,0,1,1,0,0,0,0],2,'Hard'),2,'Hard takes win before blocking')
assert.equal(ticAI(ticEmpty,2,'Medium'),4)
const fork=[1,0,0,0,2,0,0,0,1]
assert.ok([1,3,5,7].includes(ticAI(fork,2,'Hard')),'Hard prevents a fork')
assert.ok([2,6].includes(ticAI(fork,2,'Medium')),'Medium uses its simpler corner preference')
let checked=0
for(const human of [1,2]){
 const seen=new Set()
 function explore(board,turn){
  const key=board.join('')+turn;if(seen.has(key))return;seen.add(key);checked++
  const winner=tic.getWinner(board)
  assert.notEqual(winner,human,'Hard must never lose: '+board)
  if(winner||tic.isDraw(board))return
  const moves=turn===human?tic.validMoves(board):[ticAI(board,turn,'Hard')]
  for(const move of moves){assert.ok(tic.validMoves(board).includes(move));explore(tic.applyMove(board,move,turn),3-turn)}
 }
 explore(tic.createBoard(),1)
}
for(const rules of [four,tic]){
 const reduce=createGameReducer(rules)
 let game=reduce(undefined,{type:'init'})
 assert.equal(game.started,false)
 game=reduce(game,{type:'start',first:1});const round=game.round
 game=reduce(game,{type:'move',move:0,player:1,round})
 assert.equal(game.turn,2)
 assert.strictEqual(reduce(game,{type:'move',move:1,player:1,round}),game,'Reject extra human moves during computer turn')
 game=reduce(game,{type:'start',first:1})
 assert.ok(game.board.every(value=>value===0));assert.equal(game.turn,1)
 assert.strictEqual(reduce(game,{type:'move',move:1,player:2,round}),game,'Reject stale worker response after restart')
 game=reduce(game,{type:'setup'});assert.equal(game.started,false);assert.ok(game.board.every(value=>value===0))
}
console.log('PASS: Four in a Row directions, gravity, full columns, draws, tactical AI and bounded search; Tic-Tac-Toe rules, fork defence and '+checked+' exhaustive Hard AI states; reset and stale-turn protection.')
