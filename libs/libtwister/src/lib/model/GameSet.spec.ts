import * as uuid from 'uuid';

import { TEST_GAME_SET_1 } from '../testData/gameSets';

import { GameSet } from './GameSet';
import { Bystander } from './cards';
import { ISeriesMeta } from './interfaces';
import { GAME_SET_SIZE } from './types/gameSetSize.type';

describe('GameSet', () => {
  describe('sorter', () => {
    const series: ISeriesMeta = {
      id: uuid.v4(),
      seriesName: 'Test Series',
      description: 'Test Series',
    };

    const coreBox = new GameSet(
      {
        id: uuid.v4(),
        name: 'core',
        releaseYear: 1970,
        series: series,
        size: GAME_SET_SIZE.core,
      },
      []
    );

    const largeBox = new GameSet(
      {
        id: uuid.v4(),
        name: 'large',
        releaseYear: 1970,
        series: series,
        size: GAME_SET_SIZE.large,
      },
      []
    );

    const firstBox = new GameSet(
      {
        id: uuid.v4(),
        name: 'First',
        releaseYear: 1970,
        series: series,
        size: GAME_SET_SIZE.large,
      },
      []
    );

    it('should sort core boxes before big boxes', () => {
      expect(GameSet.sorter(coreBox, largeBox)).toBe(-1);
      expect(GameSet.sorter(largeBox, coreBox)).toBe(1);
    });

    it('should sort by name, alphabetically', () => {
      expect(GameSet.sorter(firstBox, largeBox)).toBe(-1);
      expect(GameSet.sorter(largeBox, firstBox)).toBe(1);
      expect(GameSet.sorter(firstBox, firstBox)).toBe(0);
    });
  });
  it('Empty gameset', () => {
    const empty = GameSet.empty();
    expect(empty).toBeInstanceOf(GameSet);
    expect(empty.name).toBe('EMPTY GAME SET');
  });

  describe('getCards', () => {
    it('should return all cards', () => {
      const cards = TEST_GAME_SET_1.getCards();

      expect(cards).toBeDefined();
      expect(cards).toBeInstanceOf(Array);
      expect(cards).toEqual(
        expect.arrayContaining(TEST_GAME_SET_1.bystanders as Bystander[])
      );
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      expect(cards).toEqual(expect.arrayContaining(TEST_GAME_SET_1.schemes!));
      expect(cards).toEqual(expect.arrayContaining(TEST_GAME_SET_1.henchmen!));
      expect(cards).toEqual(expect.arrayContaining(TEST_GAME_SET_1.heroes));
      expect(cards).toEqual(
        expect.arrayContaining(TEST_GAME_SET_1.masterminds!)
      );
      expect(cards).toEqual(expect.arrayContaining(TEST_GAME_SET_1.villains!));
      /* eslint-enable @typescript-eslint/no-non-null-assertion */
    });
  });
});
