/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import { AbstractMastermind , IHero, IVillainGroup, IHenchmen } from '../../../model';


import { KHONSHU_GUARDIANS } from './henchmen';
import { THE_MARK_OF_KHONSHU } from './schemes';

import SW2 from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

beforeAll(() => {
  heroStore = new MultiCardStore(SW2.heroes);
  villainStore = new MultiCardStore(SW2.villains!);
  henchmenStore = new MultiCardStore(SW2.henchmen!);
  mastermindStore = new MultiCardStore(SW2.masterminds!);
});

describe('Secret Wars Volume 2', () => {
  afterEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe('The Mark of Khonshu', () => {
    it('should include Khonshu Guardians in the villain deck', async () => {
      const setup = await THE_MARK_OF_KHONSHU.getSetup(
        2,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(setup.villainDeck.henchmen).toContain(KHONSHU_GUARDIANS);
    });
  });
});
