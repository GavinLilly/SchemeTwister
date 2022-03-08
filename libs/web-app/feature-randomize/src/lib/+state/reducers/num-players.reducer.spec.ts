import {
  decrementNumPlayers,
  incrementNumPlayers,
  setNumPlayers,
} from '../actions/num-players.actions';

import { _numPlayersReducer, initialState } from './num-players.reducer';

describe('NumPlayers Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = _numPlayersReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('incrementNumPlayers', () => {
    it('should increment the number of players by 1', () => {
      const action = incrementNumPlayers;

      const result = _numPlayersReducer(initialState, action);

      expect(result).toBe(initialState + 1);
    });
  });

  describe('decrementNumPlayers', () => {
    it('should decrement the number of players by 1', () => {
      const action = decrementNumPlayers;

      const result = _numPlayersReducer(initialState, action);

      expect(result).toBe(initialState - 1);
    });
  });

  describe('setNumPlayers', () => {
    it('should set the number of players to 4', () => {
      const action = setNumPlayers;

      const result = _numPlayersReducer(4, action);

      expect(result).toBe(initialState - 1);
    });
  });
});
