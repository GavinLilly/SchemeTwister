/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import { AbstractMastermind , IHero, IVillainGroup, IHenchmen } from '../../../model';


import { COPS, SHIELD_ASSAULT_SQUAD } from './henchmen';
import {
  CAGE_VILLAINS_IN_POWERSUPPRESSING_CELLS,
  CROWN_THOR_KING_OF_ASGARD,
  MASS_PRODUCE_WAR_MACHINE_ARMOR,
} from './schemes';
import { AVENGERS } from './villains';

import VILLAINS from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

beforeAll(() => {
  heroStore = new MultiCardStore(VILLAINS.heroes);
  villainStore = new MultiCardStore(VILLAINS.villains!);
  henchmenStore = new MultiCardStore(VILLAINS.henchmen!);
  mastermindStore = new MultiCardStore(VILLAINS.masterminds!);
});

describe('Villains', () => {
  afterEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe('Cage Villains in Power-Suppressing Cells', () => {
    it('should include Cops in the additional deck', async () => {
      const setup = await CAGE_VILLAINS_IN_POWERSUPPRESSING_CELLS.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(setup.additionalDeck?.deck.henchmen).toContain(COPS);
    });
  });

  describe('Crown Thor King of Asgard', () => {
    it('should include Avengers in the additional deck', async () => {
      const setup = await CROWN_THOR_KING_OF_ASGARD.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(setup.additionalDeck?.deck.villains).toContain(AVENGERS);
    });
  });

  describe('Mass Produce War Machine Armor', () => {
    it('should include S.H.I.E.L.D. Assault Squads in the villain deck', async () => {
      const setup = await MASS_PRODUCE_WAR_MACHINE_ARMOR.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(setup.villainDeck.henchmen).toContain(SHIELD_ASSAULT_SQUAD);
    });
  });
});
