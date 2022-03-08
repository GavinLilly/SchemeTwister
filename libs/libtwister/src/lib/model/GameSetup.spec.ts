/* eslint-disable @typescript-eslint/no-non-null-assertion */

import DARK_CITY from '../data/gameSets/darkCity';
import { DOMINO } from '../data/gameSets/darkCity/heroes';
import { VERSATILE } from '../data/gameSets/darkCity/keywords';
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
import { MultiCardStore } from '../factories/multiCardStore';

import { AbstractMastermind } from './AbstractMastermind';
import { GameSetup } from './GameSetup';
import { IHenchmen, IHero, IVillainGroup } from './interfaces';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

beforeAll(() => {
  heroStore = new MultiCardStore(LEGENDARY.heroes);
  villainStore = new MultiCardStore(LEGENDARY.villains!);
  henchmenStore = new MultiCardStore(LEGENDARY.henchmen!);
  mastermindStore = new MultiCardStore(LEGENDARY.masterminds!);
});

afterEach(() => {
  [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
    store.resetStore()
  );
});

describe('GameSetup', () => {
  describe('with Midtown Bank Robbery', () => {
    let setup: GameSetup;

    beforeAll(async () => {
      setup = (await MIDTOWN_BANK_ROBBERY.getSetup(
        2,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
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
      setup = (await REPLACE_EARTHS_LEADERS_WITH_KILLBOTS.getSetup(
        2,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
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
      const setup = (await REPLACE_EARTHS_LEADERS_WITH_KILLBOTS.getSetup(
        2,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      )) as GameSetup;

      expect(setup.keywords.size).toBe(0);
    });

    it('should have only the "Contest of Champions" keyword', async () => {
      const setup = (await THE_CONTEST_OF_CHAMPIONS.getSetup(
        2,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      )) as GameSetup;

      expect(setup.keywords.size).toBe(1);
      expect(setup.keywords.has(CONTEST_OF_CHAMPIONS)).toBeTruthy();
    });

    it('should have only the "Versatile" keyword', async () => {
      heroStore = new MultiCardStore([
        ...LEGENDARY.heroes,
        ...DARK_CITY.heroes,
      ]);

      const setup = (await REPLACE_EARTHS_LEADERS_WITH_KILLBOTS.getSetup(
        2,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore,
        undefined,
        {
          heroes: [DOMINO, CYCLOPS, WOLVERINE, CAPTAIN_AMERICA, IRON_MAN],
        }
      )) as GameSetup;

      expect(setup.keywords.size).toBe(1);
      expect(setup.keywords.has(VERSATILE)).toBeTruthy();
    });
  });
});
