import * as rules from './logic'
import useStrategyGame from '../useStrategyGame'
import { GameHeader, GameSettings, GameStatus, GameControls, navigateBoard } from '../GameUI'
import '../strategy.css'
export default function TicTacToe() {
 const game=useStrategyGame('tic-tac-toe',rules)
 const winning=rules.winningLine(game.state.board)
 return <div className="strategy-game"><GameHeader title="Tic-Tac-Toe" description="Classic three-in-a-row strategy against the computer."/><GameSettings game={game} ticTacToe/><GameControls game={game}/><GameStatus game={game}/><p className="strategy-help" id="tic-board-help">X goes first. Select an empty square. Use Tab or arrow keys to navigate, then Enter or Space to play.</p><div className="tic-board" role="group" aria-label="Tic-Tac-Toe board" aria-describedby="tic-board-help" aria-busy={game.thinking&&!game.state.error}>{game.state.board.map((piece,index)=><button key={index} className={'tic-cell piece-'+piece+(winning.includes(index)?' winning-piece':'')} aria-label={'Row '+(Math.floor(index/3)+1)+', column '+(index%3+1)+', '+(piece?(piece===1?'X':'O'):'empty')} aria-disabled={!game.canPlay||Boolean(piece)} onClick={()=>{if(game.canPlay&&!piece)game.move(index)}} onKeyDown={event=>navigateBoard(event,index,3,9)}>{piece===1?'X':piece===2?'O':''}</button>)}</div></div>
}
