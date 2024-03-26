import { LibTwister } from '../libTwister';
import { TEST_SERIES_1 } from '../testData/series';
import { TEST_SERIES_META_1 } from '../testData/seriesMeta';

import { GameSetMap } from './gameSetMap';
import { GAME_SET_SIZE } from './types';

describe('GameSetMap', () => {
  let map: GameSetMap;
  const libTwister = new LibTwister(TEST_SERIES_1);

  beforeAll(() => {
    map = libTwister.allGameSets;
  });

  describe('asArray', () => {
    it('should have all game sets', () =>
      expect(map.asArray()).toHaveLength(1));

    it('should only have core game sets', () => {
      const sizes = new Set(
        map.asArray({ size: GAME_SET_SIZE.core }).map((gameset) => gameset.size)
      );
      expect(sizes.size).toEqual(1);
    });

    it('should only have Mainline game sets', () => {
      const sizes = new Set(
        map
          .asArray({ series: TEST_SERIES_META_1 })
          .map((gameset) => gameset.series)
      );
      expect(sizes.size).toEqual(1);
    });
  });
});
