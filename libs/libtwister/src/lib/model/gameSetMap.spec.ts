import { LibTwister } from '../libTwister';

import { GameSetMap } from './gameSetMap';
import { GAME_SET_SIZE, SERIES } from './types';

describe('GameSetMap', () => {
  let map: GameSetMap;

  beforeAll(() => {
    map = LibTwister.allGameSets;
  });

  describe('asArray', () => {
    it('should have all game sets', () =>
      expect(map.asArray()).toHaveLength(36));

    it('should only have core game sets', () => {
      const sizes = new Set(
        map.asArray({ size: GAME_SET_SIZE.core }).map((gameset) => gameset.size)
      );
      expect(sizes.size).toEqual(1);
    });

    it('should only have MCU game sets', () => {
      const sizes = new Set(
        map.asArray({ series: SERIES.mcu }).map((gameset) => gameset.series)
      );
      expect(sizes.size).toEqual(1);
    });
  });
});
