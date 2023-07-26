import { GameSets } from '@schemetwister/libtwister';

import { setGameSets } from '../actions/game-sets.actions';

import { gameSetsReducer } from './game-sets.reducer';

describe('GameSets Reducer', () => {
  describe('Set Game Sets', () => {
    it('should set loading to true', () => {
      const result = gameSetsReducer(
        undefined,
        setGameSets({ gameSetIds: [GameSets.LEGENDARY.GAME_SET.id] })
      );

      expect(result.loading).toBe(true);
    });
  });
});
