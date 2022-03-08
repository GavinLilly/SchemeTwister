/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import {
  AbstractMastermind,
  IHero,
  IVillainGroup,
  IHenchmen,
  IGameSetup,
 NumPlayers } from '../../../model';
import { singlePlayerTest } from '../gameSetTests';

import {
  NEGATIVE_ZONE_PRISON_BREAKOUT,
  SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS,
  SUPER_HERO_CIVIL_WAR,
} from './schemes';
import { SKRULLS } from './villains';

import LEGENDARY from './index';

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

describe('Legendary (base set) schemes', () => {
  afterEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe('Negative Zone Prison Breakout', () => {
    const getSetup = async (num: NumPlayers): Promise<IGameSetup> => {
      return await NEGATIVE_ZONE_PRISON_BREAKOUT.getSetup(
        num,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );
    };

    singlePlayerTest(getSetup);
  });

  describe('Secret Invasion of the Skrull Shapeshifters', () => {
    it('should include Skrulls in the villain deck', async () => {
      const setup = await SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS.getSetup(
        2,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(setup.villainDeck.villains).toContain(SKRULLS);
    });
  });

  describe('Super Hero Civil War', () => {
    const getSetup = async (num: NumPlayers): Promise<IGameSetup> => {
      return await SUPER_HERO_CIVIL_WAR.getSetup(
        num,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );
    };

    singlePlayerTest(getSetup);
  });
});
