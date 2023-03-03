/* eslint-disable @typescript-eslint/no-non-null-assertion */

import DARK_CITY from '../data/gameSets/darkCity';
import { DOMINO } from '../data/gameSets/darkCity/heroes';
import { VERSATILE } from '../data/gameSets/darkCity/keywords';
import INTO_THE_COSMOS from '../data/gameSets/intoTheCosmos';
import { CONTEST_OF_CHAMPIONS } from '../data/gameSets/intoTheCosmos/keywords';
import { THE_CONTEST_OF_CHAMPIONS } from '../data/gameSets/intoTheCosmos/schemes';
import LEGENDARY from '../data/gameSets/legendary';
import {
  CAPTAIN_AMERICA,
  CYCLOPS,
  IRON_MAN,
  WOLVERINE,
} from '../data/gameSets/legendary/heroes';
import {
  MIDTOWN_BANK_ROBBERY,
  REPLACE_EARTHS_LEADERS_WITH_KILLBOTS,
} from '../data/gameSets/legendary/schemes';
import PAINT_THE_TOWN_RED from '../data/gameSets/paintTheTownRed';
import { CARNAGE } from '../data/gameSets/paintTheTownRed/masterminds';
import { SPLICE_HUMANS_WITH_SPIDER_DNA } from '../data/gameSets/paintTheTownRed/schemes';
import {
  MAXIMUM_CARNAGE,
  SINISTER_SIX,
} from '../data/gameSets/paintTheTownRed/villains';
import { StoreBuilder, StoreOfStores } from '../factories/storeOfStores';
import { injectGameSet } from '../utils/schemeInjector';

import { GameSetup } from './GameSetup';
import { RequireVillainsInVillainDeckScheme, Scheme } from './schemes';

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

    beforeAll(async () => {
      const scheme = new Scheme(
        injectGameSet(LEGENDARY.id, MIDTOWN_BANK_ROBBERY)
      );
      setup = (await scheme.getSetup(
        2,
        store.mastermindStore.getOneRandom(),
        store
      )) as GameSetup;
    });

    describe('getSelectedHeroes()', () => {
      it('should have 5 heroes', () =>
        expect(setup.getSelectedHeroes()).toHaveLength(5));

      it('should have 1 henchmen group', () =>
        expect(setup.getSelectedHenchmen()).toHaveLength(1));

      it('should have 2 villain groups', () =>
        expect(setup.getSelectedVillains()).toHaveLength(2));

      it('should have 1 mastermind', () =>
        expect(setup.getSelectedMasterminds()).toHaveLength(1));
    });
  });

  describe("with Replace Earth's Leaders with Killbots", () => {
    let setup: GameSetup;

    beforeAll(async () => {
      const scheme = new Scheme(
        injectGameSet(LEGENDARY.id, REPLACE_EARTHS_LEADERS_WITH_KILLBOTS)
      );
      setup = (await scheme.getSetup(
        2,
        store.mastermindStore.getOneRandom(),
        store
      )) as GameSetup;
    });

    describe('getSelectedHeroes()', () => {
      it('should have 5 heroes', () =>
        expect(setup.getSelectedHeroes()).toHaveLength(5));

      it('should have 2 henchmen group', () =>
        expect(setup.getSelectedHenchmen()).toHaveLength(1));

      it('should have 2 villain groups', () =>
        expect(setup.getSelectedVillains()).toHaveLength(2));

      it('should have 1 mastermind', () =>
        expect(setup.getSelectedMasterminds()).toHaveLength(1));
    });
  });

  describe('get keywords', () => {
    it('should have no keywords', async () => {
      const scheme = new Scheme(
        injectGameSet(LEGENDARY.id, REPLACE_EARTHS_LEADERS_WITH_KILLBOTS)
      );
      const setup = (await scheme.getSetup(
        2,
        store.mastermindStore.getOneRandom(),
        store
      )) as GameSetup;

      expect(setup.keywords.size).toBe(0);
    });

    it('should have only the "Contest of Champions" keyword', async () => {
      const scheme = new Scheme(
        injectGameSet(INTO_THE_COSMOS.id, THE_CONTEST_OF_CHAMPIONS)
      );
      const setup = (await scheme.getSetup(
        2,
        store.mastermindStore.getOneRandom(),
        store
      )) as GameSetup;

      expect(setup.keywords.size).toBe(1);
      expect(setup.keywords.has(CONTEST_OF_CHAMPIONS)).toBeTruthy();
    });

    it('should have only the "Versatile" keyword', async () => {
      const versatileStore: StoreOfStores = new StoreBuilder()
        .withHeroGamesets(LEGENDARY, DARK_CITY)
        .withMastermindGamesets(LEGENDARY)
        .withVillainGamesets(LEGENDARY)
        .withHenchmenGamesets(LEGENDARY)
        .build();
      versatileStore;

      const scheme = new Scheme(
        injectGameSet(LEGENDARY.id, REPLACE_EARTHS_LEADERS_WITH_KILLBOTS)
      );
      const setup = (await scheme.getSetup(
        2,
        versatileStore.mastermindStore.getOneRandom(),
        versatileStore,
        undefined,
        {
          heroes: [DOMINO, CYCLOPS, WOLVERINE, CAPTAIN_AMERICA, IRON_MAN],
        }
      )) as GameSetup;

      expect(setup.keywords.size).toBe(1);
      expect(setup.keywords.has(VERSATILE)).toBeTruthy();
    });
  });

  describe('with Splice Humans with Spider DNA + Carnage', () => {
    let setup: GameSetup;

    beforeAll(async () => {
      const scheme = new RequireVillainsInVillainDeckScheme(
        injectGameSet(LEGENDARY.id, SPLICE_HUMANS_WITH_SPIDER_DNA),
        SINISTER_SIX
      );
      setup = (await scheme.getSetup(
        2,
        store.mastermindStore.getOne(CARNAGE.id),
        store
      )) as GameSetup;
    });

    describe('getSelectedHeroes()', () => {
      it('should have 5 heroes', () =>
        expect(setup.getSelectedHeroes()).toHaveLength(5));

      it('should have 1 henchmen group', () =>
        expect(setup.getSelectedHenchmen()).toHaveLength(1));

      it('should have 2 villain groups', () =>
        expect(setup.getSelectedVillains()).toHaveLength(2));

      it('should have 1 mastermind', () =>
        expect(setup.getSelectedMasterminds()).toHaveLength(1));
    });

    it('should have the Sinister Six as a villain group', () =>
      expect(setup.getSelectedVillains()).toContain(SINISTER_SIX));

    it('should have Maximum Carnage as a villain group', () =>
      expect(setup.getSelectedVillains()).toContain(MAXIMUM_CARNAGE));
  });
});
