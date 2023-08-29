/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { LEGENDARY } from '../data/gameSets';

import { GameSet } from './GameSet';
import { Bystander } from './cards';
import { GameSetSize } from './gameSetSize.enum';
import { SERIES } from './types/series.type';

describe('GameSet', () => {
  describe('sorter', () => {
    const coreBox = new GameSet(
      {
        id: 'core',
        name: 'core',
        releaseYear: 1970,
        series: SERIES.mainline,
        size: GameSetSize.CORE,
      },
      []
    );

    const largeBox = new GameSet(
      {
        id: 'large',
        name: 'large',
        releaseYear: 1970,
        series: SERIES.mainline,
        size: GameSetSize.LARGE,
      },
      []
    );

    const firstBox = new GameSet(
      {
        id: 'First',
        name: 'First',
        releaseYear: 1970,
        series: SERIES.mainline,
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
  it('Empty gameset', () => {
    const empty = GameSet.empty();
    expect(empty).toBeInstanceOf(GameSet);
    expect(empty.name).toBe('EMPTY GAME SET');
  });

  describe('getCards', () => {
    it('should return all cards', () => {
      const cards = LEGENDARY.GAME_SET.getCards();

      expect(cards).toBeDefined();
      expect(cards).toBeInstanceOf(Array);
      expect(cards).toEqual(
        expect.arrayContaining(LEGENDARY.GAME_SET.bystanders as Bystander[])
      );
      expect(cards).toEqual(
        expect.arrayContaining(LEGENDARY.GAME_SET.schemes!)
      );
      expect(cards).toEqual(
        expect.arrayContaining(LEGENDARY.GAME_SET.henchmen!)
      );
      expect(cards).toEqual(expect.arrayContaining(LEGENDARY.GAME_SET.heroes));
      expect(cards).toEqual(
        expect.arrayContaining(LEGENDARY.GAME_SET.masterminds!)
      );
      expect(cards).toEqual(
        expect.arrayContaining(LEGENDARY.GAME_SET.villains!)
      );
    });
  });
});
