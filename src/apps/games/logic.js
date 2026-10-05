export function gradeWord(answer, guess) {
  const result = Array(answer.length).fill('absent'), remaining = answer.split('')
  for (let i = 0; i < answer.length; i++) if (guess[i] === answer[i]) { result[i] = 'correct'; remaining[i] = null }
  for (let i = 0; i < answer.length; i++) if (result[i] !== 'correct') { const index = remaining.indexOf(guess[i]); if (index !== -1) { result[i] = 'present'; remaining[index] = null } }
  return result
}
export const shapes = [[[0,0]], [[0,0],[0,1]], [[0,0],[0,1],[0,2]], [[0,0],[1,0],[2,0]], [[0,0],[0,1],[1,0],[1,1]], [[0,0],[1,0],[1,1]], [[0,0],[0,1],[0,2],[1,1]], [[0,0],[0,1],[0,2],[0,3]], [[0,0],[1,0],[2,0],[2,1]]]
export const canPlace = (board, shape, row, col) => shape.every(([r,c]) => row+r < 8 && col+c < 8 && row+r >= 0 && col+c >= 0 && !board[(row+r)*8+col+c])
export const canFit = (board, shape) => board.some((_, i) => canPlace(board, shape, Math.floor(i/8), i%8))
export function placeBlock(board, shape, row, col) {
  if (!canPlace(board, shape, row, col)) return null
  const next = [...board]; shape.forEach(([r,c]) => { next[(row+r)*8+col+c] = 1 })
  const rows = [], cols = []
  for(let i=0;i<8;i++) { if(next.slice(i*8,i*8+8).every(Boolean)) rows.push(i); if(Array.from({length:8},(_,r)=>next[r*8+i]).every(Boolean)) cols.push(i) }
  for(let i=0;i<64;i++) if(rows.includes(Math.floor(i/8)) || cols.includes(i%8)) next[i]=0
  return {board:next, score:shape.length + (rows.length+cols.length)*10}
}
export function slideTiles(board, direction) {
  const next = [...board]; let score = 0
  for(let line=0;line<4;line++) {
    const ids = Array.from({length:4},(_,i)=> direction === 'left' ? line*4+i : direction === 'right' ? line*4+3-i : direction === 'up' ? i*4+line : (3-i)*4+line)
    const values = ids.map(i=>board[i]).filter(Boolean), merged=[]
    for(let i=0;i<values.length;i++) { if(values[i] === values[i+1]) { merged.push(values[i]*2); score+=values[i]*2; i++ } else merged.push(values[i]) }
    ids.forEach((id,i)=>{next[id]=merged[i] || 0})
  }
  return {board:next, score, changed:next.some((v,i)=>v!==board[i])}
}
export function spawnTile(board) { const empty=board.flatMap((v,i)=>v ? [] : [i]); if(!empty.length)return board; const next=[...board]; next[empty[Math.floor(Math.random()*empty.length)]]=Math.random()<.9?2:4; return next }
export const hasMoves = board => ['left','right','up','down'].some(d=>slideTiles(board,d).changed)
