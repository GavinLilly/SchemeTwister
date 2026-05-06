import { afterEach, beforeAll, describe, expect, it } from 'vitest';

import { StoreBuilder, StoreOfStores } from '../factories';
import { TEST_GAME_SET_1, TEST_GAME_SET_2 } from '../testData/gameSets';
import { TEST_KEYWORD_1 } from '../testData/keywords';
import {
  TEST_NORMAL_SCHEME,
  TEST_REQUIRE_CARD_NAME_IN_DECK_SCHEME,
} from '../testData/schemes';
import instantiateScheme from '../utils/instantiateScheme';

import { GameSetup } from './GameSetup';
import { Mastermind } from './cards';
import { Scheme } from './schemes';

let store: StoreOfStores;

beforeAll(() => {
  store = new StoreBuilder()
    .withHeroGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
    .withMastermindGamesets(TEST_GAME_SET_1)
    .withVillainGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
    .withHenchmenGamesets(TEST_GAME_SET_1)
    .build();
});

afterEach(() => store.reset());

describe('GameSetup', () => {
  describe('with TEST_NORMAL_SCHEME', () => {
    let gameSetup: GameSetup;

    beforeAll(() => {
      const scheme = new Scheme(TEST_NORMAL_SCHEME);
      const setup = scheme.getSetup({ numPlayers: 2, store });
      gameSetup = new GameSetup(setup);
    });

    it('should have 5 heroes', () =>
      expect(Array.from(gameSetup.getSelectedHeroes())).toHaveLength(5));

    it('should have 1 henchmen group', () =>
      expect(Array.from(gameSetup.getSelectedHenchmen())).toHaveLength(1));

    it('should have 2 villain groups', () =>
      expect(Array.from(gameSetup.getSelectedVillains())).toHaveLength(2));

    it('should have 1 mastermind', () =>
      expect(Array.from(gameSetup.getSelectedMasterminds())).toHaveLength(1));

    it('toString', () => {
      const {
        numPlayers,
        scheme,
        mastermind,
        heroDeck,
        villainDeck,
        additionalDeck,
      } = JSON.parse(gameSetup.toString());
      expect(numPlayers).toBe(2);
      expect(scheme).toBe(TEST_NORMAL_SCHEME.name);
      expect(mastermind).toBe(gameSetup.mastermind.name);
      expect(heroDeck).toEqual(
        expect.arrayContaining(
          Array.from(gameSetup.heroDeck.heroes).map((hero) => hero.name)
        )
      );
      expect(villainDeck).toEqual(
        expect.arrayContaining(
          Array.from(gameSetup.villainDeck.henchmen).map(
            (henchmen) => henchmen.name
          )
        )
      );
      expect(villainDeck).toEqual(
        expect.arrayContaining(
          Array.from(gameSetup.villainDeck.villains).map(
            (villains) => villains.name
          )
        )
      );
      expect(additionalDeck).toHaveLength(0);
    });

    describe('villainDeckAsArray', () =>
      it('should not have any masterminds', () => {
        gameSetup
          .villainDeckAsArray()
          .forEach((card) => expect(card).not.toBeInstanceOf(Mastermind));
      }));

    describe('additionalDeckAsArray', () =>
      it('should return an empty Set', () => {
        const additionalDeck = gameSetup.additionalDecksAsArray();
        expect(additionalDeck).toBeInstanceOf(Set);
        expect(additionalDeck.size).toBe(0);
      }));
  });

  describe('TEST_REQUIRE_CARD_NAME_IN_DECK_SCHEME', () => {
    const scheme = instantiateScheme(TEST_REQUIRE_CARD_NAME_IN_DECK_SCHEME);
    const store = new StoreBuilder()
      .withAllFromGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
      .build();

    const setup = scheme.getSetup({ numPlayers: 2, store });

    const gameSetup = new GameSetup(setup);

    const doesContainExpectedHeroName = gameSetup.additionalDecks[0].deck
      .heroes!.map((hero) => hero.name)
      .some((heroName) => heroName.includes('Foo'));

    it('should contain the expected hero name', () =>
      expect(doesContainExpectedHeroName).toBeTruthy());

    it('should return a set of the additional deck cards', () => {
      expect(gameSetup.additionalDecksAsArray()).toBeInstanceOf(Set);
      expect(gameSetup.additionalDecksAsArray().size).toBe(1);
    });
  });

  describe('get keywords', () => {
    let testStore: StoreOfStores;

    beforeAll(() => {
      testStore = new StoreBuilder()
        .withAllFromGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
        .build();
    });

    afterEach(() => testStore.reset());

    it('should have no keywords', () => {
      const scheme = new Scheme(TEST_NORMAL_SCHEME);
      const setup = scheme.getSetup({
        numPlayers: 2,
        mastermind: testStore.mastermindStore.getRandom(),
        store: testStore,
      });
      const gameSetup = new GameSetup(setup);

      expect(gameSetup.keywords.size).toBe(0);
    });

    it('should have only the "TEST_KEYWORD_1" keyword', () => {
      const scheme = new Scheme(TEST_REQUIRE_CARD_NAME_IN_DECK_SCHEME);

      const setup = scheme.getSetup({
        numPlayers: 2,
        mastermind: testStore.mastermindStore.getRandom(),
        store: testStore,
      });
      const gameSetup = new GameSetup(setup);

      expect(gameSetup.keywords.size).toBe(1);
      expect(gameSetup.keywords.has(TEST_KEYWORD_1)).toBeTruthy();
    });
  });

  describe('that is empty', () =>
    it('should create', () => expect(GameSetup.empty()).toBeDefined()));
});
