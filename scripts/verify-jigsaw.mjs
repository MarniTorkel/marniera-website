
import assert from 'node:assert/strict'
import {artwork,designs,freshJigsaw,layouts,piecePath,placePiece,targetAt,validSave} from '../src/apps/games/puzzles/jigsawLogic.js'
for(const count of Object.keys(layouts).map(Number))for(const shape of ['classic','square']){
 let game=freshJigsaw(count,'stars',42,shape)
 assert.ok(validSave(game));assert.equal(new Set(game.order).size,count)
 assert.equal(placePiece(game,0,1),game)
 for(let i=0;i<count;i++){assert.ok(piecePath(i,count,shape).endsWith('Z'));game=placePiece(game,i,i)}
 assert.equal(game.placed.length,count);assert.equal(placePiece(game,0,0),game)
 assert.ok(validSave(JSON.parse(JSON.stringify(game))))
 assert.equal(targetAt(0,0,{left:0,top:0,width:600,height:450},count),0)
 assert.equal(targetAt(599,449,{left:0,top:0,width:600,height:450},count),count-1)
 assert.equal(targetAt(600,450,{left:0,top:0,width:600,height:450},count),-1)
}
assert.ok(!validSave({}));assert.ok(!validSave({...freshJigsaw(),placed:[-1]}))
assert.ok(!validSave({...freshJigsaw(),order:Array(24).fill(0)}))
for(const design of designs){assert.equal(artwork(design.id,5),artwork(design.id,5));if(!design.image)assert.notEqual(artwork(design.id,5),artwork(design.id,6))}
assert.equal(new Set(designs.map(d=>artwork(d.id,5))).size,6)
console.log('PASS: all jigsaw counts and shapes, deterministic original artwork, placement, completion, drop boundaries and save validation.')
