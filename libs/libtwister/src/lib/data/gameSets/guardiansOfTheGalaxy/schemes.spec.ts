/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import { AbstractMastermind , IGameSetup, IHenchmen, IHero, IVillainGroup } from '../../../model';
import LEGENDARY from '../legendary';
import { SKRULLS } from '../legendary/villains';

import { FORGE_THE_INFINITY_GAUNTLET, THE_KREE_SKRULL_WAR } from './schemes';
import { INFINITY_GEMS, KREE_STARFORCE } from './villains';

import GUARDIANS from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

beforeAll(() => {
  heroStore = new MultiCardStore(GUARDIANS.heroes);
  villainStore = new MultiCardStore([
    ...LEGENDARY.villains!,
    ...GUARDIANS.villains!,
  ]);
  henchmenStore = new MultiCardStore(LEGENDARY.henchmen!);
  mastermindStore = new MultiCardStore(GUARDIANS.masterminds!);
});

describe('Guardians of the Galaxy', () => {
  afterEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe('Forge the Infinity Gauntlet', () => {
    it('should include Infinity Gems in the villain deck', async () => {
      const setup = await FORGE_THE_INFINITY_GAUNTLET.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(setup.villainDeck.villains).toContain(INFINITY_GEMS);
    });

    describe('The Kree-Skrull War', () => {
      let setup: IGameSetup;

      beforeAll(async () => {
        setup = await THE_KREE_SKRULL_WAR.getSetup(
          3,
          mastermindStore.getOneRandom(),
          heroStore,
          villainStore,
          henchmenStore,
          mastermindStore
        );
      });
      it('should include Kree Starforce in the villain deck', () =>
        expect(setup.villainDeck.villains).toContain(KREE_STARFORCE));

      it('should include Skrulls in the villain deck', () =>
        expect(setup.villainDeck.villains).toContain(SKRULLS));
    });
  });
});
