/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GAME_SET as DARK_CITY } from '../data/gameSets/darkCity';
import { DOMINO } from '../data/gameSets/darkCity/darkCity.heroes';
import { VERSATILE } from '../data/gameSets/darkCity/darkCity.keywords';
import { CONTEST_OF_CHAMPIONS } from '../data/gameSets/intoTheCosmos/intoTheCosmos.keywords';
import { THE_CONTEST_OF_CHAMPIONS } from '../data/gameSets/intoTheCosmos/intoTheCosmos.schemes';
import { GAME_SET as LEGENDARY } from '../data/gameSets/legendary';
import {
  CAPTAIN_AMERICA,
  CYCLOPS,
  IRON_MAN,
  WOLVERINE,
} from '../data/gameSets/legendary/legendary.heroes';
import {
  MIDTOWN_BANK_ROBBERY,
  REPLACE_EARTHS_LEADERS_WITH_KILLBOTS,
} from '../data/gameSets/legendary/legendary.schemes';
import { GAME_SET as PAINT_THE_TOWN_RED } from '../data/gameSets/paintTheTownRed';
import { CARNAGE } from '../data/gameSets/paintTheTownRed/paintTheTownRed.masterminds';
import { SPLICE_HUMANS_WITH_SPIDER_DNA } from '../data/gameSets/paintTheTownRed/paintTheTownRed.schemes';
import {
  MAXIMUM_CARNAGE,
  SINISTER_SIX,
} from '../data/gameSets/paintTheTownRed/paintTheTownRed.villains';
import { MUTATING_GAMMA_RAYS } from '../data/gameSets/worldWarHulk/worldWarHulk.schemes';
import { StoreBuilder, StoreOfStores } from '../factories';
import instantiateScheme from '../utils/instantiateScheme';

import { GameSetup } from './GameSetup';
import { LiteGameSetup } from './liteGameSetup';
import {
  RequireCard,
  RequireCardInDeckScheme,
  RequireVillainGroup,
  Scheme,
} from './schemes';
import { DECK_TYPE } from './types';

let store: StoreOfStores;

beforeAll(() => {
  store = new StoreBuilder()
    .withHeroGamesets(LEGENDARY)
    .withMastermindGamesets(LEGENDARY, PAINT_THE_TOWN_RED)
    .withVillainGamesets(LEGENDARY, PAINT_THE_TOWN_RED)
    .withHenchmenGamesets(LEGENDARY)
    .build();
});

afterEach(() => store.reset());

describe('GameSetup', () => {
  describe('with Midtown Bank Robbery', () => {
    let setup: GameSetup;

    beforeAll(() => {
      const scheme = new Scheme(MIDTOWN_BANK_ROBBERY);
      setup = scheme.getSetup(
        2,
        store.mastermindStore.getRandom(),
        store
      ) as GameSetup;
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
      expect(scheme).toBe(MIDTOWN_BANK_ROBBERY.name);
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

  describe('Mutating Gamma Rays', () => {
    const scheme = instantiateScheme(MUTATING_GAMMA_RAYS);
    const store = new StoreBuilder()
      .withHeroGamesets(LEGENDARY)
      .withMastermindGamesets(LEGENDARY)
      .withVillainGamesets(LEGENDARY)
      .withHenchmenGamesets(LEGENDARY)
      .build();

    const setup = scheme.getSetup(
      2,
      store.mastermindStore.getRandom(),
      store
    ) as GameSetup;

    const { additionalDeck } = JSON.parse(setup.toString());

    expect(additionalDeck).toEqual(expect.arrayContaining(['Hulk']));
  });

  describe('with "Replace Earth\'s Leaders with Killbots"', () => {
    let setup: GameSetup;

    beforeAll(() => {
      const scheme = new Scheme(REPLACE_EARTHS_LEADERS_WITH_KILLBOTS);
      setup = scheme.getSetup(
        2,
        store.mastermindStore.getRandom(),
        store
      ) as GameSetup;
    });

    describe('getSelectedHeroes()', () => {
      it('should have 5 heroes', () =>
        expect(Array.from(setup.getSelectedHeroes())).toHaveLength(5));

      it('should have 2 henchmen group', () =>
        expect(Array.from(setup.getSelectedHenchmen())).toHaveLength(1));

      it('should have 2 villain groups', () =>
        expect(Array.from(setup.getSelectedVillains())).toHaveLength(2));

      it('should have 1 mastermind', () =>
        expect(Array.from(setup.getSelectedMasterminds())).toHaveLength(1));
    });
  });

  describe('get keywords', () => {
    let legendaryStore: StoreOfStores;

    beforeAll(() => {
      legendaryStore = new StoreBuilder()
        .withHeroGamesets(LEGENDARY)
        .withMastermindGamesets(LEGENDARY)
        .withVillainGamesets(LEGENDARY)
        .withHenchmenGamesets(LEGENDARY)
        .build();
    });

    it('should have no keywords', () => {
      const scheme = new Scheme(REPLACE_EARTHS_LEADERS_WITH_KILLBOTS);
      const setup = scheme.getSetup(
        2,
        legendaryStore.mastermindStore.getRandom(),
        legendaryStore
      ) as GameSetup;

      expect(setup.keywords.size).toBe(0);
    });

    it('should have only the "Contest of Champions" keyword', () => {
      const scheme = new Scheme(THE_CONTEST_OF_CHAMPIONS);

      const setup = scheme.getSetup(
        2,
        legendaryStore.mastermindStore.getRandom(),
        legendaryStore
      ) as GameSetup;

      expect(setup.keywords.size).toBe(1);
      expect(setup.keywords.has(CONTEST_OF_CHAMPIONS)).toBeTruthy();
    });

    it('should have only the "Versatile" keyword', () => {
      const versatileStore: StoreOfStores = new StoreBuilder()
        .withHeroGamesets(LEGENDARY, DARK_CITY)
        .withMastermindGamesets(LEGENDARY)
        .withVillainGamesets(LEGENDARY)
        .withHenchmenGamesets(LEGENDARY)
        .build();
      versatileStore;

      const scheme = new Scheme(REPLACE_EARTHS_LEADERS_WITH_KILLBOTS);
      const setup = scheme.getSetup(
        2,
        versatileStore.mastermindStore.getRandom(),
        versatileStore,
        undefined,
        {
          heroes: new Set([
            DOMINO,
            CYCLOPS,
            WOLVERINE,
            CAPTAIN_AMERICA,
            IRON_MAN,
          ]),
        }
      ) as GameSetup;

      expect(setup.keywords.size).toBe(1);
      expect(setup.keywords.has(VERSATILE)).toBeTruthy();
    });
  });

  describe('with Splice Humans with Spider DNA + Carnage', () => {
    let setup: GameSetup;

    beforeAll(() => {
      const scheme = new RequireCardInDeckScheme(
        SPLICE_HUMANS_WITH_SPIDER_DNA,
        new RequireCard(SINISTER_SIX),
        new RequireVillainGroup(),
        DECK_TYPE.villain
      );
      setup = scheme.getSetup(
        2,
        store.mastermindStore.pickOne(CARNAGE.id),
        store
      ) as GameSetup;
    });

    describe('getSelectedHeroes()', () => {
      it('should have 5 heroes', () =>
        expect(Array.from(setup.getSelectedHeroes())).toHaveLength(5));

      it('should have 1 henchmen group', () =>
        expect(Array.from(setup.getSelectedHenchmen())).toHaveLength(1));

      it('should have 2 villain groups', () =>
        expect(Array.from(setup.getSelectedVillains())).toHaveLength(2));

      it('should have 1 mastermind', () =>
        expect(Array.from(setup.getSelectedMasterminds())).toHaveLength(1));
    });

    it('should have the Sinister Six as a villain group', () =>
      expect(setup.getSelectedVillains()).toContain(SINISTER_SIX));

    it('should have Maximum Carnage as a villain group', () =>
      expect(setup.getSelectedVillains()).toContain(MAXIMUM_CARNAGE));

    it('should have the same UUID each time', async () => {
      const uuid1 = LiteGameSetup.of(setup).calculateUid();
      const uuid2 = LiteGameSetup.of(setup).calculateUid();

      expect(uuid1).toBe(uuid2);
    });
  });

  describe('that is empty', () => {
    it('should create', () => expect(GameSetup.empty()).toBeDefined());
  });
});
