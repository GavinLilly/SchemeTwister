import { generateGameSetup } from '../actions/game-setup.actions';

import { gameSetupReducer } from './game-setup.reducer';

describe('GameSetup Reducer', () => {
  describe('Generate Game Setup', () => {
    it('should set loading to true', () => {
      const result = gameSetupReducer(undefined, generateGameSetup());

      expect(result.loading).toBe(true);
    });
  });
});
