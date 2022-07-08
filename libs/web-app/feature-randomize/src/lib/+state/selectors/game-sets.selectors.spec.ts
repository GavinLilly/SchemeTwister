import { GameSets } from '@schemetwister/libtwister';

import { IGameSetsState } from '../reducers/game-sets.reducer';

import { selectGameSetIds, selectGameSets } from './game-sets.selectors';

describe('GameSets Selectors', () => {
  const initialState: IGameSetsState = {
    gameSetIds: [GameSets.LEGENDARY.default.id, GameSets.DARK_CITY.default.id],
    loading: false,
    error: '',
  };

  it('should select the IDs', () => {
    const result = selectGameSetIds.projector(initialState);
    expect(result).toHaveLength(2);
    expect(result).toContain(GameSets.LEGENDARY.default.id);
  });

  it('should select the GameSets', () => {
    const result = selectGameSets.projector(initialState);
    expect(result).toHaveLength(2);
    expect(result).toContain(GameSets.LEGENDARY.default);
  });
});
