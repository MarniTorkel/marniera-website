import assert from 'node:assert/strict'
import { gradeWord, canPlace, placeBlock, slideTiles, spawnTile, hasMoves } from '../src/apps/games/logic.js'
import { answerBank } from '../src/apps/games/words.js'
assert.deepEqual(gradeWord('APPLE','ALLEY'),['correct','present','absent','present','absent'])
assert.deepEqual(gradeWord('APPLE','APPLE'),Array(5).fill('correct'))
for(const n of [4,5,6,7]) { assert.ok(answerBank(n).length>50); assert.ok(answerBank(n).every(w=>w.length===n)) }
const empty=Array(64).fill(0)
assert.equal(canPlace(empty,[[0,0],[0,1]],0,7),false)
assert.equal(placeBlock(empty,[[0,0],[1,0]],7,0),null)
const cross=empty.map((_,i)=>Math.floor(i/8)===0||i%8===0?1:0);cross[0]=0
const cleared=placeBlock(cross,[[0,0]],0,0)
assert.equal(cleared.score,21);assert.ok(cleared.board.every(v=>v===0));assert.equal(cross[1],1)
const row=[2,2,2,2,...Array(12).fill(0)]
assert.deepEqual(slideTiles(row,'left').board.slice(0,4),[4,4,0,0]);assert.equal(slideTiles(row,'left').score,8)
assert.deepEqual(slideTiles(row,'right').board.slice(0,4),[0,0,4,4])
assert.deepEqual(slideTiles([2,2,4,0,...Array(12).fill(0)],'left').board.slice(0,4),[4,4,0,0])
const column=Array(16).fill(0);column[0]=2;column[4]=2
assert.equal(slideTiles(column,'up').board[0],4);assert.equal(slideTiles(column,'down').board[12],4)
assert.equal(slideTiles([2,0,0,0,...Array(12).fill(0)],'left').changed,false)
assert.equal(hasMoves([2,4,2,4,4,2,4,2,2,4,2,4,4,2,4,2]),false)
assert.equal(spawnTile(Array(16).fill(0)).filter(Boolean).length,1)
console.log('PASS: word scoring, answer banks, block boundaries and simultaneous clears, directional merges, scoring, dead boards and spawning.')
