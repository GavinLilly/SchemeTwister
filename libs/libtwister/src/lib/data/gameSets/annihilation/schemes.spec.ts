/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import {
  AbstractMastermind,
  IHenchmen,
  IHero,
  IVillainGroup,
 numPlayers } from '../../../model';
import defaultRules from '../../defaultRules';
import LEGENDARY from '../legendary';

import {
  BREACH_PARALLEL_DIMENSIONS,
  SNEAK_ATTACK_THE_HEROES_HOMES,
} from './schemes';

import ANNIHILATION from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

beforeAll(() => {
  heroStore = new MultiCardStore([...LEGENDARY.heroes, ...ANNIHILATION.heroes]);
  villainStore = new MultiCardStore([
    ...LEGENDARY.villains!,
    ...ANNIHILATION.villains!,
  ]);
  henchmenStore = new MultiCardStore(LEGENDARY.henchmen!);
  mastermindStore = new MultiCardStore(ANNIHILATION.masterminds!);
});

describe('Annihilation', () => {
  afterEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe("Sneak Attack the Heroes' Homes", () => {
    it('should put 3 blank heroes in the hero deck', async () => {
      const setup = await SNEAK_ATTACK_THE_HEROES_HOMES.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(
        setup.heroDeck.heroes.filter((hero) =>
          hero.name.match('Player \\d picks a hero')
        )
      ).toHaveLength(3);
    });
  });

  describe('Breach Parallel Dimensions', () => {
    it.each(numPlayers)(
      'should add 4 extra bystanders to the villain deck for a %d player game',
      async (num) => {
        const setup = await BREACH_PARALLEL_DIMENSIONS.getSetup(
          num,
          mastermindStore.getOneRandom(),
          heroStore,
          villainStore,
          henchmenStore,
          mastermindStore
        );

        const expectedBystanderCount =
          defaultRules()[num].villainDeck.numBystanders! + 4;

        expect(setup.villainDeck.numBystanders).toBe(expectedBystanderCount);
      }
    );
  });
});
