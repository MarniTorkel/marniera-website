export const ROWS = 6
export const COLUMNS = 7
export const createBoard = () => Array(ROWS * COLUMNS).fill(0)
export function winningLine(board) {
 for (let row=0;row<ROWS;row++) for(let col=0;col<COLUMNS;col++) {
  const player=board[row*COLUMNS+col]
  if(!player) continue
  for(const [dr,dc] of [[0,1],[1,0],[1,1],[1,-1]]) {
   const endRow=row+3*dr, endCol=col+3*dc
   if(endRow<0||endRow>=ROWS||endCol<0||endCol>=COLUMNS) continue
   const cells=Array.from({length:4},(_,step)=>(row+step*dr)*COLUMNS+col+step*dc)
   if(cells.every(index=>board[index]===player)) return cells
  }
 }
 return []
}
export const getWinner = board => board[winningLine(board)[0]] || 0
export const validMoves = board => Array.from({length:COLUMNS},(_,col)=>col).filter(col=>board[col]===0)
export const isDraw = board => validMoves(board).length===0 && !getWinner(board)
export function applyMove(board,col,player) {
 if(!Number.isInteger(col)||col<0||col>=COLUMNS||![1,2].includes(player)||board[col]!==0||getWinner(board)) return null
 const next=[...board]
 for(let row=ROWS-1;row>=0;row--) if(!next[row*COLUMNS+col]){next[row*COLUMNS+col]=player;return next}
 return null
}
