import { StoreBuilder, StoreOfStores } from '../factories';
import { TEST_GAME_SET_1, TEST_GAME_SET_2 } from '../testData/gameSets';
import { TEST_KEYWORD_1 } from '../testData/keywords';
import {
  TEST_NORMAL_SCHEME,
  TEST_REQUIRE_CARD_NAME_IN_DECK_SCHEME,
} from '../testData/schemes';
import instantiateScheme from '../utils/instantiateScheme';

import { GameSetup } from './GameSetup';
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
    let setup: GameSetup;

    beforeAll(() => {
      const scheme = new Scheme(TEST_NORMAL_SCHEME);
      setup = scheme.getSetup({ numPlayers: 2, store }) as GameSetup;
    });

    it('should have 5 heroes', () =>
      expect(Array.from(setup.getSelectedHeroes())).toHaveLength(5));

    it('should have 1 henchmen group', () =>
      expect(Array.from(setup.getSelectedHenchmen())).toHaveLength(1));

    it('should have 2 villain groups', () =>
      expect(Array.from(setup.getSelectedVillains())).toHaveLength(2));

    it('should have 1 mastermind', () =>
      expect(Array.from(setup.getSelectedMasterminds())).toHaveLength(1));

    it('toString', () => {
      const {
        numPlayers,
        scheme,
        mastermind,
        heroDeck,
        villainDeck,
        additionalDeck,
      } = JSON.parse(setup.toString());
      expect(numPlayers).toBe(2);
      expect(scheme).toBe(TEST_NORMAL_SCHEME.name);
      expect(mastermind).toBe(setup.mastermind.name);
      expect(heroDeck).toEqual(
        expect.arrayContaining(
          Array.from(setup.heroDeck.heroes).map((hero) => hero.name)
        )
      );
      expect(villainDeck).toEqual(
        expect.arrayContaining(
          Array.from(setup.villainDeck.henchmen).map(
            (henchmen) => henchmen.name
          )
        )
      );
      expect(villainDeck).toEqual(
        expect.arrayContaining(
          Array.from(setup.villainDeck.villains).map(
            (villains) => villains.name
          )
        )
      );
      expect(additionalDeck).toHaveLength(0);
    });
  });

  describe('TEST_REQUIRE_CARD_NAME_IN_DECK_SCHEME', () => {
    const scheme = instantiateScheme(TEST_REQUIRE_CARD_NAME_IN_DECK_SCHEME);
    const store = new StoreBuilder()
      .withHeroGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
      .withMastermindGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
      .withVillainGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
      .withHenchmenGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
      .build();

    const setup = scheme.getSetup({ numPlayers: 2, store }) as GameSetup;

    const { additionalDeck } = JSON.parse(setup.toString());

    expect(additionalDeck).toEqual(expect.arrayContaining(['Name']));
  });

  describe('get keywords', () => {
    let legendaryStore: StoreOfStores;

    beforeAll(() => {
      legendaryStore = new StoreBuilder()
        .withAllFromGamesets(TEST_GAME_SET_1)
        .build();
    });

    it('should have no keywords', () => {
      const scheme = new Scheme(TEST_NORMAL_SCHEME);
      const setup = scheme.getSetup({
        numPlayers: 2,
        selectedMastermind: legendaryStore.mastermindStore.getRandom(),
        store: legendaryStore,
      }) as GameSetup;

      expect(setup.keywords.size).toBe(0);
    });

    it('should have only the "Contest of Champions" keyword', () => {
      const scheme = new Scheme(TEST_REQUIRE_CARD_NAME_IN_DECK_SCHEME);

      const setup = scheme.getSetup({
        numPlayers: 2,
        selectedMastermind: legendaryStore.mastermindStore.getRandom(),
        store: legendaryStore,
      }) as GameSetup;

      expect(setup.keywords.size).toBe(1);
      expect(setup.keywords.has(TEST_KEYWORD_1)).toBeTruthy();
    });
  });

  describe('that is empty', () =>
    it('should create', () => expect(GameSetup.empty()).toBeDefined()));
});
