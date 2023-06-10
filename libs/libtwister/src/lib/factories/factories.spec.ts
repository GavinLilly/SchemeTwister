import { DARK_CITY, LEGENDARY } from '../data/gameSets';
import { CardType, IPlayableObject } from '../model';

import { MultiCardFactory } from './multiCardFactory';
import { MultiCardStore } from './multiCardStore';
import { SingleCardFactory } from './singleCardFactory';

const cardType = CardType.HERO;

class LegCard implements IPlayableObject {
  gameSet = LEGENDARY.default;
  constructor(
    public name: string,
    public id: string,
    public cardType: CardType
  ) {}
}

class DcCard implements IPlayableObject {
  gameSet = DARK_CITY.default;
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

beforeEach(() => {
  jest.resetModules();
});

describe('Single Card Factory', () => {
  describe('with all cards', () => {
    let instance: SingleCardFactory<IPlayableObject>;

    beforeAll(() => {
      instance = new SingleCardFactory([...legData, ...dcData]);
    });

    it('should create', () => expect(instance).toBeTruthy());

    it('should have 10 entries', () =>
      expect(instance.allCards).toHaveLength(10));

    it('should give 1 random card', () =>
      expect(instance.getOneRandom()).toBeTruthy());
  });

  describe('with no cards', () => {
    it('should fail', () => {
      expect(() => new SingleCardFactory([])).toThrow(Error);
    });
  });

  describe('with only Legendary cards', () => {
    let instance: SingleCardFactory<IPlayableObject>;

    beforeAll(() => {
      instance = new SingleCardFactory(legData);
    });

    it('should have 5 card entries', () => {
      expect(instance.allCards).toHaveLength(5);
    });

    it('should only give random Legendary cards', () => {
      expect(instance.getOneRandom().gameSet.id).toEqual(LEGENDARY.default.id);
    });

    describe('isAvailable()', () => {
      it('should return true when given an available card', () =>
        expect(instance.isAvailable(legData[0])).toBeTruthy());

      it('should return true when given an available card ID', () =>
        expect(instance.isAvailable(legData[0].id)).toBeTruthy());

      it("should return false when the given card isn't available", () =>
        expect(instance.isAvailable('foo')).toBeFalsy());
    });
  });

  describe('with excluded cards', () => {
    it('should not include the excluded card', () => {
      const instance = new SingleCardFactory(
        [...legData, ...dcData],
        [dcExcludeCard.id]
      );

      expect(instance.availableCards).not.toContain(dcExcludeCard);
    });
  });
});

describe('Multi Card Factory', () => {
  describe('with all cards', () => {
    let instance: MultiCardFactory<IPlayableObject>;

    beforeAll(() => {
      instance = new MultiCardFactory([...legData, ...dcData]);
    });

    it('should create', () => expect(instance).toBeTruthy());

    it('should have 3 random cards', () =>
      expect(instance.getManyRandom(3)).toHaveLength(3));

    it('should fail with 0 random cards', () => {
      expect(() => instance.getManyRandom(0)).toThrow();
    });

    it('should fail with negative random cards', () => {
      expect(() => instance.getManyRandom(-1)).toThrow();
    });

    it('should not be able to shuffle more cards than are in the deck', () => {
      expect(() => instance.getManyRandom(100)).toThrow(RangeError);
    });
  });

  describe('with only Legendary cards', () => {
    it('should only give random Legendary cards', () => {
      const instance = new MultiCardFactory(legData);

      expect(
        instance
          .getManyRandom(3)
          .every((item) => item.gameSet === LEGENDARY.default)
      ).toBeTruthy();
    });
  });
});

describe('Multi Card Store', () => {
  describe('with all cards', () => {
    let store: MultiCardStore<IPlayableObject>;

    beforeAll(() => {
      store = new MultiCardStore([...legData, ...dcData]);
    });

    afterEach(() => {
      store.resetStore();
    });

    it('should create', () => expect(store).toBeTruthy());

    it('should reset the store', () => {
      store.getManyRandom(3);

      expect(store.excludedCards).toHaveLength(3);

      store.resetStore();

      expect(store.excludedCards).toHaveLength(0);
    });

    it('should have 10 available entries', () =>
      expect(store.availableCards).toHaveLength(10));

    it('should select 1 random card', () => {
      const selectedCard = store.getOneRandom();

      expect(store.availableCards).not.toContain(selectedCard);

      expect(store.excludedCards).toContain(selectedCard);
    });

    it('should select 3 random cards', () => {
      const selectedCards = store.getManyRandom(3);

      expect(
        store.availableCards.every((item) => !selectedCards.includes(item))
      ).toBeTruthy();

      expect(store.excludedCards).toEqual(
        expect.arrayContaining(selectedCards)
      );
    });

    it('should remove the specific card from the available list', () => {
      expect(store.getOne(legData[0].id)).toBeTruthy();
      expect(store.availableCards).not.toContain(legData[0]);
      expect(store.excludedCards).toContain(legData[0]);
    });

    it('should remove specific cards from the available list', () => {
      const picked = legData.slice(3, 5);

      expect(store.getAll(picked.map((item) => item.id))).toHaveLength(2);
      expect(store.availableCards).not.toEqual(expect.arrayContaining(picked));
      expect(store.excludedCards).toEqual(expect.arrayContaining(picked));
    });

    it("should fail if the specific card ID doesn't exist", () => {
      expect(() => store.getOne('foo')).toThrow();
    });
  });
});
