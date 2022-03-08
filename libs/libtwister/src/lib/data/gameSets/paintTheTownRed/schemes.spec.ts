/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import { AbstractMastermind , IHero, IVillainGroup, IHenchmen } from '../../../model';
import LEGENDARY from '../legendary';

import { SPLICE_HUMANS_WITH_SPIDER_DNA } from './schemes';
import { SINISTER_SIX } from './villains';

import PAINT_THE_TOWN_RED from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

beforeAll(() => {
  heroStore = new MultiCardStore(PAINT_THE_TOWN_RED.heroes);
  villainStore = new MultiCardStore([
    ...LEGENDARY.villains!,
    ...PAINT_THE_TOWN_RED.villains!,
  ]);
  henchmenStore = new MultiCardStore(LEGENDARY.henchmen!);
  mastermindStore = new MultiCardStore(PAINT_THE_TOWN_RED.masterminds!);
});

describe('Paint the Town Red', () => {
  afterEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe('Splice Humans with Spider DNA', () => {
    it('should contain the Sinister Six in the villain deck', async () => {
      const setup = await SPLICE_HUMANS_WITH_SPIDER_DNA.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(setup.villainDeck.villains).toContain(SINISTER_SIX);
    });
  });
});
