/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import { AbstractMastermind , IHenchmen, IHero, IVillainGroup } from '../../../model';


import { MAGGIA_GOONS } from './henchmen';
import { JEAN_GREY } from './heroes';
import {
  ORGANIZED_CRIME_WAVE,
  TRANSFORM_CITIZENS_INTO_DEMONS,
} from './schemes';

import DARK_CITY from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

beforeAll(() => {
  heroStore = new MultiCardStore(DARK_CITY.heroes);
  villainStore = new MultiCardStore(DARK_CITY.villains!);
  henchmenStore = new MultiCardStore(DARK_CITY.henchmen!);
  mastermindStore = new MultiCardStore(DARK_CITY.masterminds!);
});

describe('Dark City', () => {
  afterEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe('Organized Crime Wave', () => {
    it('should include Maggia Goons in the villain deck', async () => {
      const setup = await ORGANIZED_CRIME_WAVE.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(setup.villainDeck.henchmen).toContain(MAGGIA_GOONS);
    });
  });

  describe('Transform Citizens Into Demons', () => {
    it('should include Jean Grey in the villain deck', async () => {
      const setup = await TRANSFORM_CITIZENS_INTO_DEMONS.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(setup.villainDeck.heroes).toContain(JEAN_GREY);
    });
  });
});
