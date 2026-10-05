import { applyMove, getWinner, validMoves } from './logic.js'
const order = [4,0,2,6,8,1,3,5,7]
export function chooseMove(board,player,difficulty='Medium',random=0.5) {
 const moves=order.filter(move=>board[move]===0)
 if(!moves.length||getWinner(board)) return null
 if(difficulty==='Easy') return moves[Math.min(moves.length-1,Math.max(0,Math.floor(random*moves.length)))]
 const opponent=3-player
 for(const move of moves) if(getWinner(applyMove(board,move,player))===player) return move
 if(difficulty==='Medium') {
  for(const move of moves) if(getWinner(applyMove(board,move,opponent))===opponent) return move
  return moves[0]
 }
 const cache=new Map()
 function minimax(position,turn,depth) {
  const winner=getWinner(position)
  if(winner) return winner===player ? 10-depth : depth-10
  if(!validMoves(position).length) return 0
  const key=position.join('')+turn
  if(cache.has(key)) return cache.get(key)
  let best=turn===player ? -Infinity : Infinity
  for(const move of order.filter(index=>position[index]===0)) {
   const score=minimax(applyMove(position,move,turn),3-turn,depth+1)
   best=turn===player ? Math.max(best,score) : Math.min(best,score)
  }
  cache.set(key,best);return best
 }
 let bestMove=moves[0],bestScore=-Infinity
 for(const move of moves) {const score=minimax(applyMove(board,move,player),opponent,1);if(score>bestScore){bestScore=score;bestMove=move}}
 return bestMove
}
