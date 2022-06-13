import { initialState, gameSetsReducer } from './game-sets.reducer';

describe('GameSets Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = gameSetsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
