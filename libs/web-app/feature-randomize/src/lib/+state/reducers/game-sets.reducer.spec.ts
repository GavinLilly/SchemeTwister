
import { gameSetSelectionActions } from '../actions/game-sets.actions';

import { gameSetsReducer } from './game-sets.reducer';

import { mainline } from '@schemetwister/series-marvel';

describe('GameSets Reducer', () => {
  describe('Set Game Sets', () => {
    it('should set loading to true', () => {
      const result = gameSetsReducer(
        undefined,
        gameSetSelectionActions.setGameSets({
          gameSetIds: [mainline.LEGENDARY.GAME_SET.id],
        })
      );

      expect(result.loading).toBe(true);
    });
  });
});
