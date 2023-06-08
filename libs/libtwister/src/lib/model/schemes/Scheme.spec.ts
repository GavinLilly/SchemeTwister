import LEGENDARY from '../../data/gameSets/legendary';
import { DOOMBOT_LEGION } from '../../data/gameSets/legendary/henchmen';
import { DR_DOOM } from '../../data/gameSets/legendary/legendary.masterminds';
import XMEN from '../../data/gameSets/xMen';
import {
  HELLFIRE_CLUB,
  MURDERWORLD,
} from '../../data/gameSets/xMen/xMen.villains';
import { ARCADE } from '../../data/gameSets/xMen/xMen.masterminds';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { GameSetup } from '../GameSetup';
import { CardType } from '../cardType.enum';
import { SchemeMinusRules } from '../interfaces';
import { IGameSetup } from '../interfaces/gameSetup.interface';
import { Rules } from '../rules';
import { NumPlayers, numPlayers } from '../types/numPlayers.type';

import { Scheme } from './Scheme';

const baseSchemeDesc: Omit<SchemeMinusRules, 'meta'> = {
  name: 'Test scheme',
  id: 'ea6412df-9a3a-451c-a25b-5ab49507b958',
  twist: "There's some twists",
  evilWins: 'Evil wins',
  setup: 'Setup',
  cardType: CardType.SCHEME,

  gameSet: LEGENDARY,
};

const schemeDescSimpleTwist: SchemeMinusRules = {
  ...baseSchemeDesc,
  meta: { numTwists: 8 },
};

const schemeDescComplexTwist: SchemeMinusRules = {
  ...baseSchemeDesc,
  meta: {
    numTwists: {
      /* eslint-disable @typescript-eslint/naming-convention */
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      /* eslint-enable @typescript-eslint/naming-convention */
    },
  },
};

describe('Base Scheme', () => {
  it('should create with 1 count of twists', () =>
    expect(new Scheme(schemeDescSimpleTwist)).toBeTruthy());

  it('should create with 5 counts of twists', () =>
    expect(new Scheme(schemeDescComplexTwist)).toBeTruthy());

  describe('Rules', () => {
    it('should have default rules when not overridden', () => {
      const scheme = new Scheme(schemeDescSimpleTwist);
      expect(scheme.rules).toEqual(Rules.defaultRules);
    });

    describe('Overriding default rules', () => {
      let overriddenScheme: Scheme;

      const overridingAllRules: SchemeMinusRules = {
        ...schemeDescSimpleTwist,
        meta: {
          numTwists: schemeDescSimpleTwist.meta.numTwists,
          rules: (rule) => {
            rule.heroDeck.numHeroes = 10;
            return rule;
          },
        },
      };

      beforeAll(() => {
        overriddenScheme = new Scheme(overridingAllRules);
      });

      it.each(numPlayers)('%s player game should have 10 heroes', (num) =>
        expect(overriddenScheme.rules[num].heroDeck.numHeroes).toBe(10)
      );
    });

    describe('Overriding each rule', () => {
      let overriddenScheme: Scheme;

      const overridingEachRule: SchemeMinusRules = {
        ...schemeDescSimpleTwist,
        meta: {
          numTwists: schemeDescSimpleTwist.meta.numTwists,
          rules: (rule, num) => {
            rule.numWounds = 3 * num;
            return rule;
          },
        },
      };

      beforeAll(() => {
        overriddenScheme = new Scheme(overridingEachRule);
      });

      it.each([
        [1, 3],
        [2, 6],
        [3, 9],
        [4, 12],
        [5, 15],
      ])('%s player game should have %s wounds', (num, wounds) =>
        expect(overriddenScheme.rules[num as NumPlayers].numWounds).toBe(wounds)
      );
    });
  });

  describe('getSetup()', () => {
    let scheme: Scheme;
    let setup: IGameSetup;
    let store: StoreOfStores;

    beforeAll(() => {
      scheme = new Scheme(schemeDescSimpleTwist);
      store = new StoreBuilder().withSingleGameset(XMEN).build();
      setup = scheme.getSetup(2, ARCADE, store);
    });

    beforeEach(() => store.reset());

    it('should be an instance of GameSetup', () =>
      expect(setup).toBeInstanceOf(GameSetup));

    it('should include Aracade as the mastermind', () =>
      expect(setup.mastermind).toBe(ARCADE));

    it('should include Murderworld in the villain deck', () =>
      expect(setup.villainDeck.villains).toContain(MURDERWORLD));

    it('should put 1 hero in the additional deck', () => {
      const heroAdditional = new Scheme({
        ...baseSchemeDesc,
        meta: {
          numTwists: 8,
          rules: (rule) => {
            rule.additionalDeck = {
              name: 'Foo',
              deck: {
                numHeroes: 1,
              },
            };
            return rule;
          },
        },
      });

      const additionalSetup = heroAdditional.getSetup(
        3,
        store.mastermindStore.getOneRandom(),
        store
      );

      expect(additionalSetup.additionalDeck).toBeTruthy();
      expect(additionalSetup.additionalDeck?.deck.heroes).toHaveLength(1);
    });

    it('should put 1 henchmen in the hero deck', () => {
      const henchmenHero = new Scheme({
        ...baseSchemeDesc,
        meta: {
          numTwists: 8,
          rules: (rule) => {
            rule.heroDeck.numHenchmenGroups = 1;
            return rule;
          },
        },
      });

      const heroHenchmenSetup = henchmenHero.getSetup(
        3,
        store.mastermindStore.getOneRandom(),
        store
      );

      expect(heroHenchmenSetup.heroDeck.henchmen).toHaveLength(1);
    });

    it('should put 1 mastermind in the villain deck', () => {
      const mastermindVillain = new Scheme({
        ...baseSchemeDesc,
        meta: {
          numTwists: 8,
          rules: (rule) => {
            rule.villainDeck.numMasterminds = 1;
            return rule;
          },
        },
      });

      expect(mastermindVillain.rules[3].villainDeck.numMasterminds).toBe(1);

      const mastermindVillainSetup = mastermindVillain.getSetup(
        3,
        store.mastermindStore.getOneRandom(),
        store
      );

      expect(mastermindVillainSetup.villainDeck.masterminds).toBeTruthy();
      expect(mastermindVillainSetup.villainDeck.masterminds).toHaveLength(1);
    });

    it('should put 5 bystanders in the hero deck', () => {
      const bystanderScheme = new Scheme({
        ...baseSchemeDesc,
        meta: {
          numTwists: 8,
          rules: (rule) => {
            rule.heroDeck.numBystanders = 5;
            return rule;
          },
        },
      });

      const bystanderSetup = bystanderScheme.getSetup(
        3,
        store.mastermindStore.getOneRandom(),
        store
      );

      expect(bystanderSetup.heroDeck.numBystanders).toBe(5);
    });

    it('should include Doombots in the villain deck', () => {
      const doomHenchmenStore = new StoreBuilder()
        .withHeroGamesets(XMEN)
        .withMastermindGamesets(LEGENDARY)
        .withVillainGamesets(XMEN)
        .withHenchmenGamesets(LEGENDARY, XMEN)
        .build();
      const doomSetup = scheme.getSetup(4, DR_DOOM, doomHenchmenStore);

      expect(doomSetup.villainDeck.henchmen).toContain(DOOMBOT_LEGION);
    });

    it('should not need to fill in any more slots in the villain deck', () => {
      const villains = [HELLFIRE_CLUB, MURDERWORLD];
      const filledSetup = scheme.getSetup(
        2,
        store.mastermindStore.getOneRandom(),
        store,
        undefined,
        undefined,
        {
          villains: villains,
        }
      );

      expect(filledSetup.villainDeck.villains).toEqual(
        expect.arrayContaining(villains)
      );
    });

    describe('single player mode', () => {
      it('should have 1 Master Strike', () => {
        const soloScheme = new Scheme({
          ...baseSchemeDesc,
          meta: {
            numTwists: 6,
          },
        });

        const setup = soloScheme.getSetup(
          1,
          store.mastermindStore.getOneRandom(),
          store
        );

        expect(setup.villainDeck.numMasterStrikes).toBe(1);
      });

      it('advanced solo should have 5 Master Strike', () => {
        const soloScheme = new Scheme({
          ...baseSchemeDesc,
          meta: {
            numTwists: 6,
          },
        });

        const setup = soloScheme.getSetup(
          1,
          store.mastermindStore.getOneRandom(),
          store,
          true
        );

        expect(setup.villainDeck.numMasterStrikes).toBe(5);
      });
    });
  });
});
