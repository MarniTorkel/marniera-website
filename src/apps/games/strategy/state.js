export function createGameReducer(rules) {
 const fresh = round => ({board:rules.createBoard(),turn:1,started:false,round,error:false})
 return function reducer(state=fresh(0),action) {
  if(action.type==='setup')return fresh(state.round+1)
  if(action.type==='start')return {...fresh(state.round+1),started:true,turn:action.first}
  if(action.type==='retry')return {...state,error:false}
  if(action.round!==state.round)return state
  if(action.type==='error')return {...state,error:true}
  if(action.type!=='move'||!state.started||state.turn!==action.player||rules.getWinner(state.board)||rules.isDraw(state.board))return state
  const board=rules.applyMove(state.board,action.move,action.player)
  return board?{...state,board,turn:3-state.turn,error:false}:state
 }
}
