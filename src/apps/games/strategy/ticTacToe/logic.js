export const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
export const createBoard = () => Array(9).fill(0)
export const winningLine = board => lines.find(line=>board[line[0]] && line.every(index=>board[index]===board[line[0]])) || []
export const getWinner = board => board[winningLine(board)[0]] || 0
export const validMoves = board => board.flatMap((value,index)=>value ? [] : [index])
export const isDraw = board => board.every(Boolean) && !getWinner(board)
export function applyMove(board,index,player) {
 if(!Number.isInteger(index)||index<0||index>=9||board[index]!==0||![1,2].includes(player)||getWinner(board)) return null
 const next=[...board];next[index]=player;return next
}
