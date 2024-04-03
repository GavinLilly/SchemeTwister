import * as uuid from 'uuid';

import { LibTwister } from './libTwister';
import { GAME_SET_SIZE, ISeries, NumPlayers, SeriesMeta } from './model';
import { createSeriesMock } from './testData/createSeriesMock';
import { GameSetMock } from './testData/gameSetMock';

describe('LibTwister', () => {
  describe('Setups', () => {
    describe('with 1 game set', () => {
      const series = createSeriesMock({
        numCore: 1,
        numLarge: 0,
        numMedium: 0,
        numSmall: 0,
      });
      const twister = new LibTwister([series]);
      const gameSet = series.gameSets[0];

      beforeAll(() => {
        twister.selectedGameSets = [gameSet];
      });

      it('should create', () => expect(twister).toBeTruthy());

      it('should fail with no game sets selected', () =>
        expect(() => (twister.selectedGameSets = [])).toThrow());

      it('should only contain the mocked game set', () => {
        expect(twister.selectedGameSets).toContain(gameSet);
        expect(twister.selectedGameSets).toHaveLength(1);
      });

      it.each([
        ['heroes', 'hero', twister.stores.heroStore, gameSet.heroes],
        [
          'masterminds',
          'mastermind',
          twister.stores.mastermindStore,
          gameSet.masterminds,
        ],
        ['schemes', 'scheme', twister.schemeFactory, gameSet.schemes],
        ['villains', 'villain', twister.stores.villainStore, gameSet.villains],
        [
          'henchmen',
          'henchmen',
          twister.stores.henchmenStore,
          gameSet.henchmen,
        ],
      ])(
        'should contain all of the Test %s in the %s store',
        (_cardTypePlural, _cardType, store, cards) =>
          expect(store.allCards).toEqual(cards)
      );

      it.each([2, 3, 4, 5] as NumPlayers[])(
        'should generate a setup with %p players, only using Test gameset cards',
        (numPlayers) => {
          const setup = twister.getSetup(numPlayers);

          expect(setup.scheme.gameSet.id).toBe(gameSet.id);
          expect(setup.mastermind.gameSet.id).toBe(gameSet.id);
          expect(
            Array.from(setup.heroDeck.heroes).every(
              (hero) => hero.gameSet.id === gameSet.id
            )
          ).toBeTruthy();
          expect(
            Array.from(setup.villainDeck.henchmen).every(
              (henchmen) => henchmen.gameSet.id === gameSet.id
            )
          ).toBeTruthy();
          expect(
            Array.from(setup.villainDeck.villains).every(
              (villain) => villain.gameSet.id === gameSet.id
            )
          ).toBeTruthy();
        }
      );
    });

    describe('with 2 game sets', () => {
      const series = createSeriesMock({
        numCore: 1,
        numLarge: 1,
        numMedium: 0,
        numSmall: 0,
      });
      const twister = new LibTwister([series]);
      beforeAll(() => (twister.selectedGameSets = series.gameSets));

      it('should create', () => expect(twister).toBeTruthy());

      describe('selectedGameSets', () => {
        it('should only contain the test game sets', () => {
          expect(twister.selectedGameSets).toHaveLength(2);
          expect(twister.selectedGameSets).toContain(series.gameSets[0]);
          expect(twister.selectedGameSets).toContain(series.gameSets[1]);
        });

        it('should be sorted by size', () => {
          expect(twister.selectedGameSets[0]).toBe(series.gameSets[0]);
          expect(twister.selectedGameSets[1]).toBe(series.gameSets[1]);
        });
      });

      it.each([
        [
          'heroes',
          'hero',
          twister.stores.heroStore,
          series.gameSets[0].heroes,
          series.gameSets[1].heroes,
        ],
        [
          'masterminds',
          'mastermind',
          twister.stores.mastermindStore,
          series.gameSets[0].masterminds,
          series.gameSets[1].masterminds,
        ],
        [
          'schemes',
          'scheme',
          twister.schemeFactory,
          series.gameSets[0].schemes,
          series.gameSets[1].schemes,
        ],
        [
          'villains',
          'villain',
          twister.stores.villainStore,
          series.gameSets[0].villains,
          series.gameSets[1].villains,
        ],
        [
          'henchmen',
          'henchmen',
          twister.stores.henchmenStore,
          series.gameSets[0].henchmen,
          series.gameSets[1].henchmen,
        ],
      ])(
        'should contain all of the test gameset %s in the %s store',
        (_cardTypePlural, _cardType, store, gs1Cards, gs2Cards) => {
          const ids = store.allCards.map((card) => card.id);

          if (gs1Cards !== undefined && gs2Cards !== undefined) {
            expect(ids).toEqual(
              expect.arrayContaining(gs2Cards.map((card) => card.id))
            );
            expect(ids).toEqual(
              expect.arrayContaining(gs1Cards.map((card) => card.id))
            );
          }
          expect(
            store.allCards
              .map((card) => card.gameSet.id)
              .filter((value, index, array) => array.indexOf(value) === index)
          ).toHaveLength(2);
        }
      );
    });

    describe('gameSetIdToGameSet', () => {
      const series = createSeriesMock({
        numCore: 1,
        numLarge: 0,
        numMedium: 0,
        numSmall: 0,
      });
      const twister = new LibTwister([series]);
      it('should return the first game set in the series', () => {
        const gameSet = twister.gameSetIdsToGameSets(series.gameSets[0].id);
        expect(gameSet).toBeDefined();
        expect(gameSet?.name).toBe(series.gameSets[0].name);
      });

      it('should return undefined', () => {
        expect(twister.gameSetIdsToGameSets('')).toBeUndefined();
        expect(twister.gameSetIdsToGameSets('FOOBAR')).toBeUndefined();
      });
    });
  });

  describe('validateGameSetIds', () => {
    const testLargeSet = new GameSetMock(GAME_SET_SIZE.large).getGameSet();

    const testMediumSet = new GameSetMock(GAME_SET_SIZE.medium).getGameSet();

    const testSmallSet = new GameSetMock(GAME_SET_SIZE.small).getGameSet();

    const series: ISeries = {
      seriesMeta: new SeriesMeta(uuid.v4(), 'Test Series', ''),
      gameSets: [testLargeSet, testMediumSet, testSmallSet],
    };

    const twister = new LibTwister([series]);

    it('should return true for a core and medium size game set IDs', () =>
      expect(
        twister.validateGameSetIds([testLargeSet.id, testMediumSet.id])
      ).toBe(true));

    it('should return true for a single large set', () =>
      expect(twister.validateGameSetIds([testLargeSet.id])).toBe(true));

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
