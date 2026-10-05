
import assert from 'node:assert/strict'
import {makeTiles,swapTiles,solvedTiles,makeSudoku,countSolutions,conflicts,sudokuComplete} from '../src/apps/games/puzzles/logic.js'
for(const size of [3,4,5])for(let seed=0;seed<10;seed++){
 let tiles=makeTiles(size,seed)
 assert.equal(new Set(tiles).size,size*size);assert.ok(!solvedTiles(tiles))
 for(let i=0;i<tiles.length;i++)tiles=swapTiles(tiles,i,tiles.indexOf(i))
 assert.ok(solvedTiles(tiles))
 assert.deepEqual(makeTiles(size,seed),makeTiles(size,seed))
}
for(const size of [4,6,9])for(let seed=0;seed<15;seed++){
 const {givens,solution}=makeSudoku(size,seed)
 assert.equal(givens.length,size*size);assert.ok(givens.includes(0))
 assert.equal(countSolutions(givens,size),1,'Unique solution')
 assert.ok(sudokuComplete(solution,size));assert.ok(!sudokuComplete(givens,size))
 assert.deepEqual(conflicts(givens,size),[])
 assert.ok(givens.every((v,i)=>!v||v===solution[i]))
 const invalid=[...solution];invalid[0]=invalid[1];assert.ok(conflicts(invalid,size).includes(0));assert.ok(!sudokuComplete(invalid,size))
}
console.log('PASS: tile shuffling/swapping/completion and 45 unique Sudoku puzzles across 4×4, 6×6 and 9×9, clues, conflicts and completion.')
