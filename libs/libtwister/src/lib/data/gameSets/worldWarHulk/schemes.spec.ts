/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import { AbstractMastermind , IHero, IVillainGroup, IHenchmen, IGameSetup } from '../../../model';
import LEGENDARY from '../legendary';

import { CYTOPLASM_SPIKES } from './henchmen';
import {
  CYTOPLASM_SPIKE_INVASION,
  FALL_OF_THE_HULKS,
  MUTATING_GAMMA_RAYS,
  SHOOT_HULK_INTO_SPACE,
} from './schemes';

import WORLD_WAR_HULK from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

const hulkPredicate = (hero: IHero) => hero.name.toLowerCase().includes('hulk');

beforeAll(() => {
  heroStore = new MultiCardStore([
    ...LEGENDARY.heroes,
    ...WORLD_WAR_HULK.heroes,
  ]);
  villainStore = new MultiCardStore(WORLD_WAR_HULK.villains!);
  henchmenStore = new MultiCardStore(WORLD_WAR_HULK.henchmen!);
  mastermindStore = new MultiCardStore(WORLD_WAR_HULK.masterminds!);
});

describe('World War Hulk', () => {
  afterEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe('Cytoplasm Spike Invasion', () => {
    let setup: IGameSetup;

    beforeEach(async () => {
      setup = await CYTOPLASM_SPIKE_INVASION.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );
    });

    it('should have an additional "Infected Deck"', () => {
      expect(setup.additionalDeck).toBeTruthy();
      expect(setup.additionalDeck?.name).toBe('Infected Deck');
    });

    it('should contain Cytoplasm Spikes in the additional deck', () =>
      expect(setup.additionalDeck?.deck.henchmen).toContain(CYTOPLASM_SPIKES));
  });

  describe('Fall of the Hulks', () => {
    let setup: IGameSetup;

    beforeEach(async () => {
      setup = await FALL_OF_THE_HULKS.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );
    });

    it('should contain exactly 2 "Hulk" heroes in the hero deck', () =>
      expect(setup.heroDeck.heroes.filter(hulkPredicate)).toHaveLength(2));

    it('should not have any "Hulk" heroes available in the HeroStore', () => {
      expect(heroStore.excludedCards?.length).toBeGreaterThan(0);
      expect(heroStore.availableCards.filter(hulkPredicate)).toHaveLength(0);
    });
  });

  describe.each([MUTATING_GAMMA_RAYS, SHOOT_HULK_INTO_SPACE])(
    '%s',
    (scheme) => {
      it('shoud have 1 Hulk hero in the additional deck', async () => {
        const setup = await scheme.getSetup(
          3,
          mastermindStore.getOneRandom(),
          heroStore,
          villainStore,
          henchmenStore,
          mastermindStore
        );

        expect(setup.additionalDeck).toBeTruthy();
        expect(setup.additionalDeck?.deck.heroes).toHaveLength(1);
        expect(
          setup.additionalDeck?.deck.heroes![0].name.toLowerCase()
        ).toContain('hulk');
      });
    }
  );
});
