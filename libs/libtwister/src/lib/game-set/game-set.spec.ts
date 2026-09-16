import { faker } from '@faker-js/faker';
import { describe, expect, it } from 'vitest';


import { Bystander } from '../bystander/bystander.model';
import { CARD_TYPE } from '../constants/card-type.const';
import { GAME_SET_SIZE } from '../constants/game-set-size.const';
import { Henchmen } from '../henchmen/henchmen.model';
import { Hero } from '../hero/hero.model';
import { Mastermind } from '../mastermind/mastermind.model';
import { SchemeDefinition } from '../scheme/scheme-definition';
import { MockGameSetFactory } from '../testing/mocks/mock-game-set.factory';
import { createMockSeriesMeta } from '../testing/mocks/mock.utils';
import { VillainGroup } from '../villain-group/villain-group.model';

import { GameSet } from './game-set';

describe('GameSet', () => {
  const coreBox = new MockGameSetFactory().createGameSet(GAME_SET_SIZE.core);

  describe('sorter', () => {
    const series = createMockSeriesMeta();

    const firstBox = new GameSet(
      {
        id: faker.string.uuid(),
        name: 'First',
        releaseYear: faker.date.past().getFullYear(),
        series: series,
        size: GAME_SET_SIZE.large,
      },
      []
    );

    const largeBox = new GameSet(
      {
        id: faker.string.uuid(),
        name: 'Second',
        releaseYear: faker.date.past().getFullYear(),
        series,
        size: GAME_SET_SIZE.large,
      },
      []
    );

    it('should sort core boxes before big boxes', () => {
      const sorted = GameSet.sorter(coreBox, largeBox);

      if (sorted !== -1) {
        console.log('Core', coreBox);
        console.log('Large', largeBox);
      }

      expect(sorted).toBe(-1);
      expect(GameSet.sorter(largeBox, coreBox)).toBe(1);
    });

    it('should sort by name, alphabetically', () => {
      const sorted = GameSet.sorter(firstBox, largeBox);

      if (sorted !== -1) {
        console.log('First', firstBox);
        console.log('Large', largeBox);
      }

      expect(sorted).toBe(-1);
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
        const gameSet = new MockGameSetFactory().createGameSet(
          GAME_SET_SIZE.core,
          {
            numHeroes: 5,
            numBystanders: 0,
            numHenchmen: 0,
            numMasterminds: 0,
            numSchemes: 0,
            numVillains: 0,
          }
        );

        for (const card of gameSet.getCards()) {
          expect(card).toBeInstanceOf(Hero);
        }
      }));
  });
});
