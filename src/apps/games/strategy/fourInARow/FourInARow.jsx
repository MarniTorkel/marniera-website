import * as rules from './logic'
import useStrategyGame from '../useStrategyGame'
import { GameHeader, GameSettings, GameStatus, GameControls, navigateBoard } from '../GameUI'
import '../strategy.css'
export default function FourInARow() {
 const game=useStrategyGame('four-in-a-row',rules)
 const winning=rules.winningLine(game.state.board)
 return <div className="strategy-game"><GameHeader title="Four in a Row" description="Take turns dropping pieces into the grid. Connect four horizontally, vertically or diagonally before your opponent."/><GameSettings game={game}/><GameControls game={game}/><GameStatus game={game}/><p className="strategy-help" id="four-board-help">Select a column to drop a piece. Use Tab or the arrow keys to choose a column, then Enter or Space to play.</p><div className="four-board" role="group" aria-label="Four in a Row board" aria-describedby="four-board-help" aria-busy={game.thinking&&!game.state.error}>{Array.from({length:7},(_,col)=>{
 const full=game.state.board[col]!==0
 return <button className="four-column" key={col} aria-label={'Column '+(col+1)+(full?', full':', drop a piece')} aria-disabled={!game.canPlay||full} onClick={()=>{if(game.canPlay&&!full)game.move(col)}} onKeyDown={event=>navigateBoard(event,col,7,7)}><span className="four-column-label" aria-hidden="true">{col+1} ↓</span>{Array.from({length:6},(_,row)=>{const index=row*7+col,piece=game.state.board[index];return <span key={row} className={'four-disc piece-'+piece+(winning.includes(index)?' winning-piece':'')} role="img" aria-label={'Row '+(row+1)+', column '+(col+1)+', '+(piece?(piece===game.human?'your mint disc':'computer lavender disc'):'empty')}></span>})}</button>
 })}</div></div>
}
