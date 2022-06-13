import { initialState, gameSetupReducer } from './game-setup.reducer';

describe('GameSetup Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = gameSetupReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
