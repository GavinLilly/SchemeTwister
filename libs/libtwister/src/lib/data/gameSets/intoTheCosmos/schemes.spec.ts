/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import { AbstractMastermind , IGameSetup, IHenchmen, IHero, IVillainGroup } from '../../../model';
import CHAMPIONS from '../champions';
import { NOVA as CHAMP_NOVA } from '../champions/heroes';
import LEGENDARY from '../legendary';

import { ADAM_WARLOCK, NOVA as ITC_NOVA } from './heroes';
import {
  DESTROY_THE_NOVA_CORPS,
  TURN_THE_SOUL_OF_ADAM_WARLOCK,
} from './schemes';

import INTO_THE_COSMOS from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

beforeAll(() => {
  heroStore = new MultiCardStore(INTO_THE_COSMOS.heroes);
  villainStore = new MultiCardStore([
    ...LEGENDARY.villains!,
    ...INTO_THE_COSMOS.villains!,
  ]);
  henchmenStore = new MultiCardStore(LEGENDARY.henchmen!);
  mastermindStore = new MultiCardStore(INTO_THE_COSMOS.masterminds!);
});

describe('Into the Cosmos', () => {
  afterEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe('Turn the Soul of Adam Warlock', () => {
    let setup: IGameSetup;

    beforeAll(async () => {
      setup = await TURN_THE_SOUL_OF_ADAM_WARLOCK.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );
    });

    it('should include an additional deck', () =>
      expect(setup.additionalDeck).toBeTruthy());

    it('should include Adam Warlock in the additional deck', () => {
      expect(setup.additionalDeck?.deck).toBeTruthy();
      expect(setup.additionalDeck?.deck.heroes).toBeTruthy();
      expect(setup.additionalDeck?.deck.heroes).toContain(ADAM_WARLOCK);
    });
  });

  describe('Destroy the Nova Corps', () => {
    describe('with Into the Cosmos enabled', () => {
      let setup: IGameSetup;

      beforeAll(async () => {
        setup = await DESTROY_THE_NOVA_CORPS.getSetup(
          3,
          mastermindStore.getOneRandom(),
          heroStore,
          villainStore,
          henchmenStore,
          mastermindStore
        );
      });

      it('should include Nova from Into the Cosmos in the hero deck', () =>
        expect(setup.heroDeck.heroes).toContain(ITC_NOVA));
    });

    describe('with Into the Cosmos enabled', () => {
      it('should include Nova from Champions in the hero deck', async () => {
        const champHeroStore = new MultiCardStore(CHAMPIONS.heroes);
        const setup = await DESTROY_THE_NOVA_CORPS.getSetup(
          3,
          mastermindStore.getOneRandom(),
          champHeroStore,
          villainStore,
          henchmenStore,
          mastermindStore
        );
        expect(setup.heroDeck.heroes).toContain(CHAMP_NOVA);
      });
    });

    describe('with Into the Cosmos and Champions enabled', () => {
      let setup: IGameSetup;
      let bothHeroStore: MultiCardStore<IHero>;

      beforeAll(async () => {
        bothHeroStore = new MultiCardStore([
          ...CHAMPIONS.heroes,
          ...INTO_THE_COSMOS.heroes,
        ]);
        setup = await DESTROY_THE_NOVA_CORPS.getSetup(
          3,
          mastermindStore.getOneRandom(),
          bothHeroStore,
          villainStore,
          henchmenStore,
          mastermindStore
        );
      });

      const heroPredicate = (hero: IHero) =>
        hero.name.toLowerCase().includes('nova');

      it('should include 1 Nova in the hero deck', () =>
        expect(setup.heroDeck.heroes.filter(heroPredicate)).toHaveLength(1));

      it('should put 2 Nova heroes in the excluded deck of the hero store', () =>
        expect(bothHeroStore.excludedCards?.filter(heroPredicate)).toHaveLength(
          2
        ));
    });

    describe('with neither Into the Cosmos nor Champions enabled', () => {
      it('should include Nova from Champions in the hero deck', async () => {
        const champHeroStore = new MultiCardStore(LEGENDARY.heroes);
        await expect(
          DESTROY_THE_NOVA_CORPS.getSetup(
            3,
            mastermindStore.getOneRandom(),
            champHeroStore,
            villainStore,
            henchmenStore,
            mastermindStore
          )
        ).rejects.toThrow();
      });
    });
  });
});
