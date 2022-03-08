/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import {
  AbstractMastermind,
  IHenchmen,
  IHero,
  IVillainGroup,
 IGameSetup } from '../../../model';
import DARK_CITY from '../darkCity';
import { JEAN_GREY } from '../darkCity/heroes';
import LEGENDARY from '../legendary';
import { SENTINELS } from '../legendary/henchmen';

import { THE_BROOD } from './henchmen';
import { PHOENIX } from './heroes';
import { ARCADE, DARK_PHOENIX, DEATHBIRD } from './masterminds';
import {
  ALIEN_BROOD_ENCOUNTER,
  MUTANT_HUNTING_SUPER_SENTINELS,
  THE_DARK_PHOENIX_SAGA,
} from './schemes';
import { HELLFIRE_CLUB } from './villains';

import XMEN from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

beforeAll(() => {
  heroStore = new MultiCardStore(XMEN.heroes);
  villainStore = new MultiCardStore(XMEN.villains!);
  henchmenStore = new MultiCardStore(XMEN.henchmen!);
  mastermindStore = new MultiCardStore(XMEN.masterminds!);
});

describe('X-Men schemes', () => {
  afterEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe('Alien Brood Encounters', () => {
    it('should include the Brood in the villain deck', async () => {
      const setup = await ALIEN_BROOD_ENCOUNTER.getSetup(
        2,
        DARK_PHOENIX,
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(setup.villainDeck.henchmen).toContain(THE_BROOD);
    });
  });

  describe('The Dark Phoenix Saga', () => {
    let setup: IGameSetup;

    beforeAll(async () => {
      setup = await THE_DARK_PHOENIX_SAGA.getSetup(
        2,
        ARCADE,
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );
    });

    it('should include the Hellfire Club', () => {
      expect(setup.villainDeck.villains).toContain(HELLFIRE_CLUB);
    });

    describe('with just X-Men heroes', () => {
      it('should include Phoenix', () => {
        expect(setup.villainDeck.heroes).toContain(PHOENIX);
      });
    });

    describe('with just Dark City heroes', () => {
      beforeAll(async () => {
        heroStore = new MultiCardStore(DARK_CITY.heroes);
        setup = await THE_DARK_PHOENIX_SAGA.getSetup(
          2,
          ARCADE,
          heroStore,
          villainStore,
          henchmenStore,
          mastermindStore
        );
      });

      it('should include Jean Grey', () => {
        expect(setup.villainDeck.heroes).toContain(JEAN_GREY);
      });
    });
  });

  describe('Mutant-Hunting Super Sentinels', () => {
    let setup: IGameSetup;

    beforeAll(async () => {
      if (LEGENDARY.henchmen !== undefined) {
        henchmenStore = new MultiCardStore(LEGENDARY.henchmen);
      }

      setup = await MUTANT_HUNTING_SUPER_SENTINELS.getSetup(
        2,
        DEATHBIRD,
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );
    });

    it('should include Sentinels in the villain deck', async () => {
      expect(setup.villainDeck.henchmen).toContain(SENTINELS);
    });
  });
});
