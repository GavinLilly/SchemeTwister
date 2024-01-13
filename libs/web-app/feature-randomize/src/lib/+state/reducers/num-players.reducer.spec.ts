import { numPlayersActions } from '../actions/num-players.actions';

import { numPlayersReducer, initialState } from './num-players.reducer';

describe('NumPlayers Reducer', () => {
  describe('incrementNumPlayers', () => {
    it('should increment the number of players by 1', () => {
      const action = numPlayersActions.incrementNumberOfPlayers;

      const result = numPlayersReducer(initialState, action);

      expect(result.numPlayers).toBe(initialState.numPlayers + 1);
    });
  });

  describe('decrementNumPlayers', () => {
    it('should decrement the number of players by 1', () => {
      const action = numPlayersActions.decrementNumberOfPlayers;

      const result = numPlayersReducer(initialState, action);

      expect(result.numPlayers).toBe(initialState.numPlayers - 1);
    });
  });

  describe('setNumPlayers', () => {
    it('should set the number of players to 4', () => {
      const action = numPlayersActions.setNumberOfPlayers;

      const result = numPlayersReducer(initialState, action({ numPlayers: 4 }));

      expect(result.numPlayers).toBe(4);
    });
  });
});
