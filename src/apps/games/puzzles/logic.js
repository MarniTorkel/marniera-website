
export function randomSource(seed) {
 let state=seed>>>0
 return ()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296}
}
export function shuffle(items,random) {
 const result=[...items]
 for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]]}
 return result
}
export const solvedTiles = tiles => tiles.every((tile,index)=>tile===index)
export function makeTiles(size,seed) {
 const tiles=shuffle(Array.from({length:size*size},(_,i)=>i),randomSource(seed))
 if(solvedTiles(tiles))[tiles[0],tiles[1]]=[tiles[1],tiles[0]]
 return tiles
}
export function swapTiles(tiles,a,b) {
 if(!Number.isInteger(a)||!Number.isInteger(b)||a<0||b<0||a>=tiles.length||b>=tiles.length)return tiles
 const next=[...tiles];[next[a],next[b]]=[next[b],next[a]];return next
}
export const boxShape = size => size===6?[2,3]:[Math.sqrt(size),Math.sqrt(size)]
export function candidates(board,size,index) {
 const [height,width]=boxShape(size),row=Math.floor(index/size),col=index%size
 return Array.from({length:size},(_,i)=>i+1).filter(value=>!board.some((other,j)=>j!==index&&other===value&&(Math.floor(j/size)===row||j%size===col||(Math.floor(Math.floor(j/size)/height)===Math.floor(row/height)&&Math.floor((j%size)/width)===Math.floor(col/width)))))
}
export function countSolutions(board,size,limit=2) {
 const cells=[...board]
 function search(){
  let target=-1,options=[]
  for(let i=0;i<cells.length;i++)if(!cells[i]){
   const values=candidates(cells,size,i)
   if(!values.length)return 0
   if(target<0||values.length<options.length){target=i;options=values}
  }
  if(target<0)return cells.every((v,i)=>candidates(cells,size,i).includes(v))?1:0
  let count=0
  for(const value of options){cells[target]=value;count+=search();if(count>=limit)break}
  cells[target]=0;return count
 }
 return search()
}
export function makeSudoku(size,seed) {
 const random=randomSource(seed),[height,width]=boxShape(size)
 const groups=(groupCount,groupSize)=>shuffle(Array.from({length:groupCount},(_,i)=>i),random).flatMap(group=>shuffle(Array.from({length:groupSize},(_,i)=>group*groupSize+i),random))
 const rows=groups(size/height,height),cols=groups(size/width,width),digits=shuffle(Array.from({length:size},(_,i)=>i+1),random)
 const solution=rows.flatMap(row=>cols.map(col=>digits[(width*(row%height)+Math.floor(row/height)+col)%size]))
 const givens=[...solution],order=shuffle(Array.from({length:size*size},(_,i)=>i),random)
 const target=Math.floor(size*size*.52);let removed=0
 for(const index of order){const value=givens[index];givens[index]=0;if(countSolutions(givens,size)!==1)givens[index]=value;else removed++;if(removed>=target)break}
 return {solution,givens}
}
export const sudokuComplete = (board,size) => board.every((value,index)=>value>0&&candidates(board,size,index).includes(value))
export const conflicts = (board,size) => board.map((value,index)=>value&&!candidates(board,size,index).includes(value)?index:-1).filter(index=>index>=0)
