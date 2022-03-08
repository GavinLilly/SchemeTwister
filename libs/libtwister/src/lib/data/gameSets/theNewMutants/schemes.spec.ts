/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import { AbstractMastermind , IHero, IVillainGroup, IHenchmen } from '../../../model';
import LEGENDARY from '../legendary';

import { THE_DEMON_BEAR_SAGA } from './schemes';
import { DEMONS_OF_LIMBO } from './villains';

import NEW_MUTANTS from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;
beforeAll(() => {
  heroStore = new MultiCardStore([...LEGENDARY.heroes, ...NEW_MUTANTS.heroes]);
  villainStore = new MultiCardStore([
    ...LEGENDARY.villains!,
    ...NEW_MUTANTS.villains!,
  ]);
  henchmenStore = new MultiCardStore(LEGENDARY.henchmen!);
  mastermindStore = new MultiCardStore(NEW_MUTANTS.masterminds!);
});

describe('The New Mutants', () => {
  describe('The Demon Bear Saga', () => {
    it('should have the Demons of Limbo in the villain deck', async () => {
      const setup = await THE_DEMON_BEAR_SAGA.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(setup.villainDeck.villains).toContain(DEMONS_OF_LIMBO);
    });
  });
});
