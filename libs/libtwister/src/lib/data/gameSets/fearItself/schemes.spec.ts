/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories';
import {
  IHero,
  IVillainGroup,
  IHenchmen,
  AbstractMastermind,
  IGameSetup,
} from '../../../model';
import LEGENDARY from '../legendary';

import { THE_TRAITOR } from './schemes';

import FEAR_ITSELF from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

beforeAll(() => {
  heroStore = new MultiCardStore([...LEGENDARY.heroes, ...FEAR_ITSELF.heroes]);
  villainStore = new MultiCardStore([
    ...LEGENDARY.villains!,
    ...FEAR_ITSELF.villains!,
  ]);
  henchmenStore = new MultiCardStore(LEGENDARY.henchmen!);
  mastermindStore = new MultiCardStore(FEAR_ITSELF.masterminds!);
});

describe('Fear Itself', () => {
  describe('The Traitor', () => {
    let setup: IGameSetup;

    beforeAll(async () => {
      setup = await THE_TRAITOR.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );
    });

    it('should have an additional deck', () =>
      expect(setup.additionalDeck).toBeTruthy());

    it('should have 1 twist in  the additional deck', () =>
      expect(setup.additionalDeck?.deck.numTwists).toBe(1));

    it('should have 9 wounds in the additional deck', () =>
      expect(setup.additionalDeck?.deck.numWounds).toBe(9));
  });
});
