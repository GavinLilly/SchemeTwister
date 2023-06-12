import { GameSets } from '@schemetwister/libtwister';

import * as fromSelectedGameSets from './game-sets.actions';

describe('loadSelectedGameSetss', () => {
  it('should return an action', () => {
    const legendaryGSId = GameSets.LEGENDARY.GAME_SET.id;
    expect(
      fromSelectedGameSets.addGameSet({ gameSetId: legendaryGSId }).type
    ).toBe('[Randomize Page] Add Game Set');
  });
});
