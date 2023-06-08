import { GameSet } from './GameSet';
import { GameSetSize } from './gameSetSize.enum';
import { Series } from './series.enum';

describe('GameSet', () => {
  describe('sorter', () => {
    const coreBox = new GameSet(
      {
        id: 'core',
        name: 'core',
        releaseYear: 1970,
        series: Series.MAINLINE,
        size: GameSetSize.CORE,
      },
      []
    );

    const largeBox = new GameSet(
      {
        id: 'large',
        name: 'large',
        releaseYear: 1970,
        series: Series.MAINLINE,
        size: GameSetSize.LARGE,
      },
      []
    );

    const firstBox = new GameSet(
      {
        id: 'First',
        name: 'First',
        releaseYear: 1970,
        series: Series.MAINLINE,
        size: GameSetSize.LARGE,
      },
      []
    );

    it('should sort sort core boxes before big boxes', () => {
      expect(GameSet.sorter(coreBox, largeBox)).toBe(-1);
      expect(GameSet.sorter(largeBox, coreBox)).toBe(1);
    });

    it('should sort by name, alphabetically', () => {
      expect(GameSet.sorter(firstBox, largeBox)).toBe(-1);
      expect(GameSet.sorter(largeBox, firstBox)).toBe(1);
      expect(GameSet.sorter(firstBox, firstBox)).toBe(0);
    });
  });
  it('Empty gameset', () => expect(GameSet.empty()).toBeInstanceOf(GameSet));
});
