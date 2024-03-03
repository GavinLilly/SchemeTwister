import { LibTwister } from './libTwister';
import { GAME_SET_SIZE, GameSet, NumPlayers, SERIES } from './model';
import {
  TEST_GAME_SET_1,
  TEST_GAME_SET_2,
  TEST_GAME_SET_META_2,
} from './testData/gameSets';
import { TEST_SERIES_1 } from './testData/series';

describe('LibTwister', () => {
  const twister = new LibTwister(TEST_SERIES_1);

  describe('with 1 game set', () => {
    beforeAll(() => (twister.selectedGameSets = [TEST_GAME_SET_1]));

    it('should create', () => expect(twister).toBeTruthy());

    it('should fail with no game sets selected', () =>
      expect(() => (twister.selectedGameSets = [])).toThrow());

    it('should only contain the Legendary game set', () => {
      expect(twister.selectedGameSets).toContain(TEST_GAME_SET_1);
      expect(twister.selectedGameSets).toHaveLength(1);
    });

    it.each([
      ['heroes', 'hero', twister.stores.heroStore, TEST_GAME_SET_1.heroes],
      [
        'masterminds',
        'mastermind',
        twister.stores.mastermindStore,
        TEST_GAME_SET_1.masterminds,
      ],
      ['schemes', 'scheme', twister.schemeFactory, TEST_GAME_SET_1.schemes],
      [
        'villains',
        'villain',
        twister.stores.villainStore,
        TEST_GAME_SET_1.villains,
      ],
      [
        'henchmen',
        'henchmen',
        twister.stores.henchmenStore,
        TEST_GAME_SET_1.henchmen,
      ],
    ])(
      'should contain all of the Legendary %s in the %s store',
      (_cardTypePlural, _cardType, store, cards) =>
        expect(store.allCards).toEqual(cards)
    );

    it.each([2, 3, 4, 5] as NumPlayers[])(
      'should generate a setup with %p players, only using Legendary cards',
      (numPlayers) => {
        const setup = twister.getSetup(numPlayers);

        expect(setup.scheme.gameSet.id).toBe(TEST_GAME_SET_1.id);
        expect(setup.mastermind.gameSet.id).toBe(TEST_GAME_SET_1.id);
        expect(
          Array.from(setup.heroDeck.heroes).every(
            (hero) => hero.gameSet.id === TEST_GAME_SET_1.id
          )
        ).toBeTruthy();
        expect(
          Array.from(setup.villainDeck.henchmen).every(
            (henchmen) => henchmen.gameSet.id === TEST_GAME_SET_1.id
          )
        ).toBeTruthy();
        expect(
          Array.from(setup.villainDeck.villains).every(
            (villain) => villain.gameSet.id === TEST_GAME_SET_1.id
          )
        ).toBeTruthy();
      }
    );
  });

  describe('with 2 game sets', () => {
    beforeAll(
      () => (twister.selectedGameSets = [TEST_GAME_SET_1, TEST_GAME_SET_2])
    );

    it('should create', () => expect(twister).toBeTruthy());

    describe('selectedGameSets', () => {
      it('should only contain the Legendary and Dark City game sets', () => {
        expect(twister.selectedGameSets).toContain(TEST_GAME_SET_1);
        expect(twister.selectedGameSets).toContain(TEST_GAME_SET_2);
        expect(twister.selectedGameSets).toHaveLength(2);
      });

      it('should be sorted by size', () => {
        expect(twister.selectedGameSets[0]).toBe(TEST_GAME_SET_1);
        expect(twister.selectedGameSets[1]).toBe(TEST_GAME_SET_2);
      });
    });

    it('should only contain the Legendary and Dark City game set IDs', () => {
      expect(twister.selectedGameSets).toContain(TEST_GAME_SET_1);
      expect(twister.selectedGameSets).toContain(TEST_GAME_SET_2);
      expect(twister.selectedGameSets).toHaveLength(2);
    });

    it.each([
      [
        'heroes',
        'hero',
        twister.stores.heroStore,
        TEST_GAME_SET_1.heroes,
        TEST_GAME_SET_2.heroes,
      ],
      [
        'masterminds',
        'mastermind',
        twister.stores.mastermindStore,
        TEST_GAME_SET_1.masterminds,
        TEST_GAME_SET_2.masterminds,
      ],
      [
        'schemes',
        'scheme',
        twister.schemeFactory,
        TEST_GAME_SET_1.schemes,
        TEST_GAME_SET_2.schemes,
      ],
      [
        'villains',
        'villain',
        twister.stores.villainStore,
        TEST_GAME_SET_1.villains,
        TEST_GAME_SET_2.villains,
      ],
      [
        'henchmen',
        'henchmen',
        twister.stores.henchmenStore,
        TEST_GAME_SET_1.henchmen,
        TEST_GAME_SET_2.henchmen,
      ],
    ])(
      'should contain all of the TEST_GAME_SET_1 & TEST_GAME_SET_2 %s in the %s store',
      (_cardTypePlural, _cardType, store, legCards, dcCards) => {
        const ids = store.allCards.map((card) => card.id);
        expect(ids).toEqual(
          expect.arrayContaining(dcCards!.map((card) => card.id))
        );
        expect(ids).toEqual(
          expect.arrayContaining(legCards!.map((card) => card.id))
        );
        expect(
          store.allCards
            .map((card) => card.gameSet.id)
            .filter((value, index, array) => array.indexOf(value) === index)
        ).toHaveLength(2);
      }
    );
  });

  describe('gameSetIdToGameSet', () => {
    it('should return the Marvel Studios game set', () => {
      const gameSet = twister.gameSetIdsToGameSets(TEST_GAME_SET_1.id);
      expect(gameSet).toBeDefined();
      expect(gameSet?.name).toBe(TEST_GAME_SET_1.name);
    });

    it('should return undefined', () => {
      expect(twister.gameSetIdsToGameSets('')).toBeUndefined();
      expect(twister.gameSetIdsToGameSets('FOOBAR')).toBeUndefined();
    });
  });

  describe('validateGameSetIds', () => {
    const testMediumSet = new GameSet(
      {
        id: 'a385ade0-c5e1-44e5-87eb-835f067133a8',
        name: 'Test medium',
        releaseYear: 1970,
        series: SERIES.mainline,
        size: GAME_SET_SIZE.medium,
      },
      []
    );

    const testSmallSet = new GameSet(
      {
        id: '2b4a7bd7-de23-4a09-886f-04a1295440f1',
        name: 'Test small',
        releaseYear: 1970,
        series: SERIES.mainline,
        size: GAME_SET_SIZE.small,
      },
      []
    );
    it('should return true for a core and medium size game set IDs', () =>
      expect(
        twister.validateGameSetIds([TEST_GAME_SET_1.id, testMediumSet.id])
      ).toBe(true));

    it('should return true for a single large set', () =>
      expect(twister.validateGameSetIds([TEST_GAME_SET_META_2.id])).toBe(true));

    it('should return false for a single medium set', () =>
      expect(twister.validateGameSetIds([testMediumSet.id])).toBe(false));

    it('should return false for a single small set', () =>
      expect(twister.validateGameSetIds([testSmallSet.id])).toBe(false));

    it('should return false for a non-valid game set id', () =>
      expect(() => twister.validateGameSetIds(['FOOBAR'])).toThrow());

    it('should return false for an empty string game set id', () =>
      expect(() => twister.validateGameSetIds([''])).toThrow());

    it('should return false for an empty game set ID array', () =>
      expect(twister.validateGameSetIds([])).toBe(false));
  });
});
