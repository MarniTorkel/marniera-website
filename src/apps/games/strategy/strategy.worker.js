import { chooseMove as fourMove } from './fourInARow/ai.js'
import { chooseMove as ticMove } from './ticTacToe/ai.js'
self.onmessage = ({data}) => {
 try {
  const choose=data.game==='four-in-a-row'?fourMove:ticMove
  self.postMessage({move:choose(data.board,data.player,data.difficulty,data.random)})
 } catch {self.postMessage({error:true})}
}
