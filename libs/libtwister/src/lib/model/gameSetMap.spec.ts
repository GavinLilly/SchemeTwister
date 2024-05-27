import { describe, beforeAll, it, expect } from 'vitest';

import { LibTwister } from '../libTwister';
import { createSeriesMock } from '../testData/createSeriesMock';

import { GameSetMap } from './gameSetMap';
import { ISeries } from './interfaces';
import { GAME_SET_SIZE } from './types';

describe('GameSetMap', () => {
  let map: GameSetMap;
  let series: ISeries;

  beforeAll(() => {
    series = createSeriesMock({
      numCore: 1,
      numLarge: 3,
      numMedium: 0,
      numSmall: 0,
    });
    const otherSeries = createSeriesMock({
      numCore: 1,
      numLarge: 0,
      numMedium: 1,
      numSmall: 5,
    });
    const libTwister = new LibTwister([series, otherSeries]);
    map = libTwister.allGameSets;
  });

  describe('asArray', () => {
    it('should have all game sets', () =>
      expect(map.asArray()).toHaveLength(11));

    it('should only have core game sets', () => {
      const sizes = new Set(
        map.asArray({ size: GAME_SET_SIZE.core }).map((gameset) => gameset.size)
      );
      expect(sizes.size).toEqual(1);
    });

    it('should only have game sets from one series', () => {
      const sizes = new Set(
        map
          .asArray({ series: series.seriesMeta })
          .map((gameset) => gameset.series)
      );
      expect(sizes.size).toEqual(1);
    });
  });
});
