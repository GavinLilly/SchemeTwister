import * as uuid from 'uuid';
import { describe, it, expect, beforeAll } from 'vitest';

import { GameSetMock } from '../testData/gameSetMock';

import { GameSet } from './GameSet';
import { Bystander } from './cards';
import { SeriesMeta } from './seriesMeta';
import { CARD_TYPE } from './types';
import { GAME_SET_SIZE } from './types/gameSetSize.type';

describe('GameSet', () => {
  let coreBox: GameSet;

  beforeAll(() => {
    coreBox = new GameSetMock(GAME_SET_SIZE.core).getGameSet();
  });

  describe('sorter', () => {
    const series = new SeriesMeta(uuid.v4(), 'Test Series', 'Test Series');

    const largeBox = new GameSetMock(GAME_SET_SIZE.large).getGameSet();

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
      const cards = coreBox.getCards();

      expect(cards).toBeDefined();
      expect(cards).toBeInstanceOf(Array);
      expect(cards).toEqual(expect.arrayContaining(coreBox.bystanders!));
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      expect(cards).toEqual(expect.arrayContaining(coreBox.schemes!));
      expect(cards).toEqual(expect.arrayContaining(coreBox.henchmen!));
      expect(cards).toEqual(expect.arrayContaining(coreBox.heroes));
      expect(cards).toEqual(expect.arrayContaining(coreBox.masterminds!));
      expect(cards).toEqual(expect.arrayContaining(coreBox.villains!));
      /* eslint-enable @typescript-eslint/no-non-null-assertion */
    });

    it('should only return bystanders', () => {
      coreBox
        .getCards(CARD_TYPE.bystander)
        ?.forEach((card) => expect(card).toBeInstanceOf(Bystander));
    });
  });
});
