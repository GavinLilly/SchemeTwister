/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import {
  AbstractMastermind,
  IHenchmen,
  IHero,
  IVillainGroup,
} from '../../../model';
import LEGENDARY from '../legendary';

import { CLASH_OF_THE_MONSTERS_UNLEASHED } from './schemes';
import { MONSTERS_UNLEASHED } from './villains';

import CHAMPIONS from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

beforeAll(() => {
  heroStore = new MultiCardStore(CHAMPIONS.heroes);
  villainStore = new MultiCardStore([
    ...LEGENDARY.villains!,
    ...CHAMPIONS.villains!,
  ]);
  henchmenStore = new MultiCardStore(LEGENDARY.henchmen!);
  mastermindStore = new MultiCardStore(CHAMPIONS.masterminds!);
});

describe('Champions', () => {
  afterEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe('Clash of the Monsters Unleashed', () => {
    it('should include Monsters Unleashed in the villain deck', async () => {
      const mastermind = mastermindStore.getOneRandom();
      const setup = await CLASH_OF_THE_MONSTERS_UNLEASHED.getSetup(
        3,
        mastermind,
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(setup.villainDeck.villains).toContain(MONSTERS_UNLEASHED);
    });
  });
});
