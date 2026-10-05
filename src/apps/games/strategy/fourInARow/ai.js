import { applyMove, getWinner, validMoves, ROWS, COLUMNS } from './logic.js'
const order = [3,2,4,1,5,0,6]
const windows=[]
for(let row=0;row<ROWS;row++) for(let col=0;col<COLUMNS;col++) for(const [dr,dc] of [[0,1],[1,0],[1,1],[1,-1]]) {
 const endRow=row+3*dr,endCol=col+3*dc
 if(endRow>=0&&endRow<ROWS&&endCol>=0&&endCol<COLUMNS) windows.push(Array.from({length:4},(_,i)=>(row+i*dr)*COLUMNS+col+i*dc))
}
export function evaluateBoard(board,player) {
 const opponent=3-player
 let score=0
 for(let row=0;row<ROWS;row++){const piece=board[row*COLUMNS+3];score+=piece===player?8:piece===opponent?-8:0}
 for(const cells of windows) {
  let ours=0,theirs=0,empty=-1
  for(const index of cells){if(board[index]===player)ours++;else if(board[index]===opponent)theirs++;else empty=index}
  if(ours&&theirs) continue
  const playable=empty>=0&&(empty>=35||board[empty+COLUMNS]!==0)
  if(ours===3)score+=120+(playable?80:0)
  else if(ours===2)score+=12
  else if(ours===1)score+=1
  if(theirs===3)score-=160+(playable?100:0)
  else if(theirs===2)score-=15
 }
 return score
}
export function chooseMove(board,player,difficulty='Medium',random=0.5,{maxDepth=6,nodeLimit=60000}={}) {
 const moves=order.filter(move=>board[move]===0)
 if(!moves.length||getWinner(board)) return null
 if(difficulty==='Easy') return moves[Math.min(moves.length-1,Math.max(0,Math.floor(random*moves.length)))]
 for(const move of moves) if(getWinner(applyMove(board,move,player))===player) return move
 const threats=moves.filter(move=>getWinner(applyMove(board,move,3-player))===3-player)
 if(threats.length===1) return threats[0]
 if(difficulty==='Medium') return threats[0] ?? moves[0]
 // Iterative deepening keeps the last completed result if the node budget is reached.
 let nodes=0,bestMove=moves[0]
 const searchLimit=Symbol('search limit')
 function search(position,depth,turn,alpha,beta,ply) {
  if(++nodes>nodeLimit)throw searchLimit
  const winner=getWinner(position)
  if(winner)return winner===player?100000-ply:ply-100000
  if(!validMoves(position).length)return 0
  if(depth===0)return evaluateBoard(position,player)
  let best=turn===player?-Infinity:Infinity
  for(const move of order.filter(col=>position[col]===0)) {
   const value=search(applyMove(position,move,turn),depth-1,3-turn,alpha,beta,ply+1)
   if(turn===player){best=Math.max(best,value);alpha=Math.max(alpha,best)}else{best=Math.min(best,value);beta=Math.min(beta,best)}
   if(alpha>=beta)break
  }
  return best
 }
 for(let depth=1;depth<=maxDepth;depth++) {
  let candidate=bestMove,score=-Infinity
  try {
   for(const move of [bestMove,...moves.filter(move=>move!==bestMove)]) {
    const value=search(applyMove(board,move,player),depth-1,3-player,score,Infinity,1)
    if(value>score){score=value;candidate=move}
   }
   bestMove=candidate
  } catch(error) {if(error!==searchLimit)throw error;break}
 }
 return bestMove
}
