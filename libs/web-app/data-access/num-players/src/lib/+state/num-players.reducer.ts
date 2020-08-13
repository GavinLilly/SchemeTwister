import * as numPlayerActions from './num-players.actions';

export function numPlayersReducer(state = 2, action: numPlayerActions.NumPlayerActions) {
  switch (action.type) {
    case numPlayerActions.INCREMENT_NUM_PLAYERS:
      return state + 1;
    case numPlayerActions.DECREMENT_NUM_PLAYERS:
      return state - 1;
    case numPlayerActions.SET_NUM_PLAYERS:
      return state = action.payload.numPlayers
  }
}
