import { mainline, marvelSeries } from '@schemetwister/series-marvel';

import { IGameSetsState } from '../reducers/game-sets.reducer';

import { selectGameSetIds } from './game-sets.selectors';

describe('GameSets Selectors', () => {
  const initialState: IGameSetsState = {
    seriesIds: [marvelSeries.seriesMeta.id],
    gameSetIds: [
      mainline.LEGENDARY.GAME_SET.id,
      mainline.DARK_CITY.GAME_SET.id,
    ],
    loading: false,
    error: '',
  };

  it('should select the IDs', () => {
    const result = selectGameSetIds.projector(initialState);
    expect(result).toHaveLength(2);
    expect(result).toContain(mainline.LEGENDARY.GAME_SET.id);
  });
});
