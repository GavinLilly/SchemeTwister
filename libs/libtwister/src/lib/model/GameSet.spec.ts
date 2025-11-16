import * as uuid from 'uuid';
import { describe, it, expect, beforeAll } from 'vitest';

import { GameSetMock } from '../testData/gameSetMock';

import { GameSet } from './GameSet';
import {
  Bystander,
  Henchmen,
  Hero,
  Mastermind,
  SchemeDefinition,
  VillainGroup,
} from './cards';
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
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      expect(cards).toEqual(expect.arrayContaining(coreBox.bystanders!));
      expect(cards).toEqual(expect.arrayContaining(coreBox.schemes!));
      expect(cards).toEqual(expect.arrayContaining(coreBox.henchmen!));
      expect(cards).toEqual(expect.arrayContaining(coreBox.heroes));
      expect(cards).toEqual(expect.arrayContaining(coreBox.masterminds!));
      expect(cards).toEqual(expect.arrayContaining(coreBox.villains!));
      /* eslint-enable @typescript-eslint/no-non-null-assertion */
    });

    it.each([
      [CARD_TYPE.bystander, Bystander],
      [CARD_TYPE.scheme, SchemeDefinition],
      [CARD_TYPE.henchmen, Henchmen],
      [CARD_TYPE.hero, Hero],
      [CARD_TYPE.mastermind, Mastermind],
      [CARD_TYPE.villainGroup, VillainGroup],
    ])('should only return %s', (cardType, cardClass) => {
      const cards = coreBox.getCards(cardType);
      if (cards !== undefined) {
        for (const card of cards) {
          expect(card).toBeInstanceOf(cardClass);
        }
      }
    });

    it('should return undefined', () =>
      expect(coreBox.getCards(CARD_TYPE.wound)).toBeUndefined());

    describe('with only heroes', () =>
      it('should only return the heroes', () => {
        const gameSet = new GameSetMock(GAME_SET_SIZE.core, {
          heroes: { num: 5 },
          numBystanders: 0,
          numHenchmen: 0,
          numMasterminds: 0,
          numSchemes: 0,
          numVillains: 0,
        }).getGameSet();

        for (const card of gameSet.getCards()) {
          expect(card).toBeInstanceOf(Hero);
        }
      }));
  });
});
