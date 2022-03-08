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
  ENSLAVE_MINDS_WITH_THE_CHITAURI_SCEPTER,
  SUPER_HERO_CIVIL_WAR,
} from './schemes';
import { CHITAURI } from './villains';

import MARVEL_STUDIOS from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

beforeAll(() => {
  heroStore = new MultiCardStore(MARVEL_STUDIOS.heroes);
  villainStore = new MultiCardStore(MARVEL_STUDIOS.villains!);
  henchmenStore = new MultiCardStore(MARVEL_STUDIOS.henchmen!);
  mastermindStore = new MultiCardStore(MARVEL_STUDIOS.masterminds!);
});

describe('Marvel Studios phase 1 schemes', () => {
  afterEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe('Enslave Minds with the Chitauri Scepter', () => {
    it('should include Chitauri in the villain deck', async () => {
      const setup = await ENSLAVE_MINDS_WITH_THE_CHITAURI_SCEPTER.getSetup(
        4,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(setup.villainDeck.villains).toContain(CHITAURI);
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
