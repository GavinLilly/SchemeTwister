import { beforeAll, describe, expect, it } from 'vitest';

import { LibTwister } from '../lib-twister';
import { MockSeriesFactory } from '../mocks/mock-series.factory';

import { GAME_SET_SIZE } from './constants/game-set-size.const';
import { GameSetMap } from './game-set-map';
import { Series } from './interfaces/series.interface';

describe('GameSetMap', () => {
  const fakeSeriesFactory = new MockSeriesFactory();
  let map: GameSetMap;
  let series: Series;

  beforeAll(() => {
    series = fakeSeriesFactory.createSeries({
      numCore: 1,
      numLarge: 3,
      numMedium: 0,
      numSmall: 0,
    });
    const otherSeries = fakeSeriesFactory.createSeries({
      numCore: 1,
      numLarge: 0,
      numMedium: 1,
      numSmall: 5,
    });
    const libTwister = new LibTwister({ series: [series, otherSeries] });
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
