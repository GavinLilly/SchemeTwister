import { describe, beforeAll, it, expect, afterEach } from 'vitest';

import { CARD_TYPE, CardType, IPlayableObject } from '../model';
import {
  TEST_GAME_SET_META_1,
  TEST_GAME_SET_META_2,
} from '../testData/gameSets';

import { CardFactory } from './cardFactory';
import { CardStore } from './cardStore';

const cardType = CARD_TYPE.hero;

class LegCard implements IPlayableObject {
  gameSet = TEST_GAME_SET_META_1;
  constructor(
    public name: string,
    public id: string,
    public cardType: CardType
  ) {}
}

class DcCard implements IPlayableObject {
  gameSet = TEST_GAME_SET_META_2;
  constructor(
    public name: string,
    public id: string,
    public cardType: CardType
  ) {}
}

const legData = [
  new LegCard('LEG1', '4c3f2410-272f-46d1-9a7f-2c7c4073c5f6', cardType),
  new LegCard('LEG2', 'e9ec5bb3-49dc-4e1d-abf1-976b736fd93a', cardType),
  new LegCard('LEG3', '4b08b7ff-20d7-4bed-81f3-3ea5d5f4ff0b', cardType),
  new LegCard('LEG4', '571bf114-0584-45b9-b096-8052281df226', cardType),
  new LegCard('LEG5', '5e91c349-a33e-4dce-90df-f3d7d8d7e06b', cardType),
];

const dcExcludeCard = new DcCard(
  'DC5',
  '842dd6d5-6680-4a4c-9aa6-2bbcf6107212',
  cardType
);
const dcData = [
  new DcCard('DC1', 'c86c0f8d-0c38-409c-a228-494ec5e22444', cardType),
  new DcCard('DC2', 'b0e3887c-261b-4183-b985-9035b29ceaa5', cardType),
  new DcCard('DC3', 'e12886a1-50d6-4c68-b67c-e494baa2c6ee', cardType),
  new DcCard('DC4', 'a028a4db-8a2e-4e6c-b854-52908534835c', cardType),
  dcExcludeCard,
];

describe('Card Factory', () => {
  describe('with all cards', () => {
    let instance: CardFactory<IPlayableObject>;

    beforeAll(() => {
      instance = new CardFactory([...legData, ...dcData]);
    });

    it('should create', () => expect(instance).toBeTruthy());

    it('should have 10 entries', () =>
      expect(instance.allCards).toHaveLength(10));

    it('should give 1 random card', () =>
      expect(instance.getRandom()).toBeTruthy());

    describe('card count explicitly stated', () =>
      it("should give 1 random card, provided it's a DC card", () => {
        const selected = instance.getRandom({
          count: 1,
          filter: (card) => card.name.startsWith('DC'),
        });
        expect(selected).toBeInstanceOf(Array);

        expect(selected[0].name).toContain('DC');
      }));

    describe('card count implicitly stated', () =>
      it("should give 1 random card, provided it's a DC card", () => {
        const selected = instance.getRandom({
          filter: (card) => card.name.startsWith('DC'),
        });
        expect(selected).toBeInstanceOf(Array);

        expect(selected[0].name).toContain('DC');
      }));

    it('should have 3 random cards', () =>
      expect(instance.getRandom({ count: 3 })).toHaveLength(3));

    it('should fail with 0 random cards', () => {
      expect(() => instance.getRandom({ count: 0 })).toThrow();
    });

    it('should fail with negative random cards', () => {
      expect(() => instance.getRandom({ count: -1 })).toThrow();
    });

    it('should not be able to shuffle more cards than are in the deck', () => {
      expect(() => instance.getRandom({ count: 100 })).toThrow(RangeError);
    });

    it('should get the DC1 card', () =>
      expect(instance.get(dcData[0].id)).toBeDefined());

    it('should get an array of cards', () =>
      expect(instance.get([dcData[0].id, dcData[1].id])).toEqual(
        expect.arrayContaining([dcData[0], dcData[1]])
      ));

    it("should return 'LegCard'", () =>
      expect(instance.getStoreType()).toEqual('LegCard'));
  });

  describe('with no cards', () => {
    it('should fail', () => {
      expect(() => new CardFactory([])).toThrow(Error);
    });
  });

  describe('with only Legendary cards', () => {
    let instance: CardFactory<IPlayableObject>;

    beforeAll(() => {
      instance = new CardFactory(legData);
    });

    it('should have 5 card entries', () => {
      expect(instance.allCards).toHaveLength(5);
    });

    it('should only give random Legendary cards', () => {
      const random = instance.getRandom();
      expect(random).not.toBeInstanceOf(Array);
      expect(random.gameSet.id).toEqual(TEST_GAME_SET_META_1.id);
      expect(
        instance
          .getRandom({ count: 3 })
          .every((item) => item.gameSet === TEST_GAME_SET_META_1)
      ).toBeTruthy();
    });

    describe('isAvailable()', () => {
      it('should return true when given an available card', () =>
        expect(instance.isAvailable(legData[0])).toBeTruthy());

      it('should return true when given an available card ID', () =>
        expect(instance.isAvailable(legData[0].id)).toBeTruthy());

      it("should return false when the given card isn't available", () =>
        expect(() => instance.isAvailable('foo')).toThrow());
    });
  });

  describe('with excluded cards', () => {
    it('should not include the excluded card', () => {
      const instance = new CardFactory(
        [...legData, ...dcData],
        [dcExcludeCard.id]
      );

      expect(instance.availableCards).not.toContain(dcExcludeCard);
    });
  });
});

describe('Card Store', () => {
  describe('with all cards', () => {
    let store: CardStore<IPlayableObject>;

    beforeAll(() => {
      store = new CardStore([...legData, ...dcData]);
    });

    afterEach(() => {
      store.resetStore();
    });

    it('should create', () => expect(store).toBeTruthy());

    it('should reset the store', () => {
      store.pickRandom({ count: 3 });

      expect(store.excludedCards).toHaveLength(3);

      store.resetStore();

      expect(store.excludedCards).toHaveLength(0);
    });

    it('should have 10 available entries', () =>
      expect(store.availableCards).toHaveLength(10));

    it('should select 1 random card', () => {
      const selectedCard = store.pickRandom();

      expect(store.availableCards).not.toContain(selectedCard);

      expect(store.excludedCards).toContain(selectedCard);
    });

    it('should select 3 random cards', () => {
      const selectedCards = store.pickRandom({ count: 3 });

      expect(
        store.availableCards.every((item) => !selectedCards.includes(item))
      ).toBeTruthy();

      expect(store.excludedCards).toEqual(
        expect.arrayContaining(selectedCards)
      );
    });

    it('should remove the specific card from the available list', () => {
      expect(store.pickOne(legData[0])).toBeTruthy();
      expect(store.availableCards).not.toContain(legData[0]);
      expect(store.excludedCards).toContain(legData[0]);
    });

    it('should remove specific cards from the available list', () => {
      const picked = legData.slice(3, 5);

      expect(store.pickMany(picked.map((item) => item.id))).toHaveLength(2);
      expect(store.availableCards).not.toEqual(expect.arrayContaining(picked));
      expect(store.excludedCards).toEqual(expect.arrayContaining(picked));
    });

    it("should fail if the specific card ID doesn't exist", () => {
      expect(() => store.get('foo')).toThrow();
    });

    it('should fail if the ID passed is not a UUID', () => {
      expect(() => store.pickOne('FOOBAR')).toThrow();
      expect(() => store.removeCard('FOOBAR')).toThrow();
    });
  });
});
