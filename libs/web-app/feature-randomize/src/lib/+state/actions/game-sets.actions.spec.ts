import { mainline } from '@schemetwister/schemetwister-series-marvel';

import { gameSetSelectionActions } from './game-sets.actions';

describe('loadSelectedGameSetss', () => {
  it('should return an action', () => {
    const legendaryGSId = mainline.LEGENDARY.GAME_SET.id;
    expect(
      gameSetSelectionActions.addGameSet({ gameSetId: legendaryGSId }).type
    ).toBe('[Game Set Selection dialog] Add Game Set');
  });
});
