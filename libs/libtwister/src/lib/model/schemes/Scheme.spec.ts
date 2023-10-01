import {
  BLADE,
  CABLE,
  COLUSSUS,
  JEAN_GREY,
} from '../../data/gameSets/darkCity/darkCity.heroes';
import { GAME_SET as LEGENDARY } from '../../data/gameSets/legendary';
import { DOOMBOT_LEGION } from '../../data/gameSets/legendary/legendary.henchmen';
import {
  DEADPOOL,
  WOLVERINE,
} from '../../data/gameSets/legendary/legendary.heroes';
import { DR_DOOM } from '../../data/gameSets/legendary/legendary.masterminds';
import { GAME_SET as WHAT_IF } from '../../data/gameSets/whatIf';
import { ULTRON_SENTRIES } from '../../data/gameSets/whatIf/whatIf.henchmen';
import { KILLMONGER_SPEC_OPS } from '../../data/gameSets/whatIf/whatIf.heroes';
import {
  EPIC_KILLMONGER_THE_BETRAYER,
  KILLMONGER_THE_BETRAYER,
  ULTRON_INFINITY,
} from '../../data/gameSets/whatIf/whatIf.masterminds';
import { GAME_SET as XMEN } from '../../data/gameSets/xMen';
import { ARCADE } from '../../data/gameSets/xMen/xMen.masterminds';
import {
  HELLFIRE_CLUB,
  MURDERWORLD,
} from '../../data/gameSets/xMen/xMen.villains';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { GameSetup } from '../GameSetup';
import { IGameSetup } from '../interfaces/gameSetup.interface';
import { Rules } from '../rules';
import { CARD_TYPE, SchemeMinusRules } from '../types';
import { NumPlayers, numPlayers } from '../types/numPlayers.type';

import { Scheme } from './Scheme';

const baseSchemeDesc: Omit<SchemeMinusRules, 'meta'> = {
  name: 'Test scheme',
  id: 'ea6412df-9a3a-451c-a25b-5ab49507b958',
  twist: "There's some twists",
  evilWins: 'Evil wins',
  setup: 'Setup',
  cardType: CARD_TYPE.scheme,
  specialRules: 'Special rules',

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

describe('Scheme', () => {
  let baseScheme: Scheme;

  beforeAll(() => {
    baseScheme = new Scheme(schemeDescSimpleTwist);
  });

  it('should have a scheme Card Type', () =>
    expect(baseScheme.cardType).toBe(CARD_TYPE.scheme));

  it('should have an unchanged setup text', () =>
    expect(baseScheme.setup).toEqual('Setup'));

  it('should have an unchanged twist text', () =>
    expect(baseScheme.twist).toEqual("There's some twists"));

  it('should have an unchanged evil wins text', () =>
    expect(baseScheme.evilWins).toEqual('Evil wins'));

  it('should have an unchanged special rules text', () =>
    expect(baseScheme.specialRules).toEqual('Special rules'));

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
      setup = scheme.getSetup({
        numPlayers: 2,
        selectedMastermind: ARCADE,
        store,
      });
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

      const additionalSetup = heroAdditional.getSetup({ numPlayers: 3, store });

      expect(additionalSetup.additionalDeck).toBeTruthy();
      expect(additionalSetup.additionalDeck?.deck).toBeTruthy();
      expect(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        Array.from(additionalSetup.additionalDeck!.deck.heroes!)
      ).toHaveLength(1);
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

      const heroHenchmenSetup = henchmenHero.getSetup({ numPlayers: 3, store });

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect(Array.from(heroHenchmenSetup.heroDeck.henchmen!)).toHaveLength(1);
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

      const mastermindVillainSetup = mastermindVillain.getSetup({
        numPlayers: 3,
        store,
      });

      expect(mastermindVillainSetup.villainDeck.masterminds).toBeTruthy();
      expect(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        Array.from(mastermindVillainSetup.villainDeck.masterminds!)
      ).toHaveLength(1);
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

      const bystanderSetup = bystanderScheme.getSetup({ numPlayers: 3, store });

      expect(bystanderSetup.heroDeck.numBystanders).toBe(5);
    });

    it('should include Doombots in the villain deck', () => {
      const doomHenchmenStore = new StoreBuilder()
        .withHeroGamesets(XMEN)
        .withMastermindGamesets(LEGENDARY)
        .withVillainGamesets(XMEN)
        .withHenchmenGamesets(LEGENDARY, XMEN)
        .build();
      const doomSetup = scheme.getSetup({
        numPlayers: 4,
        selectedMastermind: DR_DOOM,
        store: doomHenchmenStore,
      });

      expect(doomSetup.villainDeck.henchmen).toContain(DOOMBOT_LEGION);
    });

    it.each([2, 3, 4, 5] as NumPlayers[])(
      'should always put Ultron Sentries in the villain deck',
      (numPlayers) => {
        const ultronStore = new StoreBuilder()
          .withHeroGamesets(XMEN)
          .withMastermindGamesets(LEGENDARY, WHAT_IF)
          .withVillainGamesets(XMEN)
          .withHenchmenGamesets(LEGENDARY, WHAT_IF)
          .build();

        const ultronScheme = new Scheme({
          ...baseSchemeDesc,
          meta: {
            numTwists: 8,
          },
        });

        const setup = ultronScheme.getSetup({
          selectedMastermind: ULTRON_INFINITY,
          numPlayers,
          store: ultronStore,
        });

        expect(Array.from(setup.villainDeck.henchmen)).toContain(
          ULTRON_SENTRIES
        );
      }
    );

    it.each([KILLMONGER_THE_BETRAYER, EPIC_KILLMONGER_THE_BETRAYER])(
      'should always put Killmonger Spec Ops in the hero deck',
      (killmonger) => {
        const killmongerStore = new StoreBuilder()
          .withHeroGamesets(XMEN, WHAT_IF)
          .withMastermindGamesets(LEGENDARY, WHAT_IF)
          .withVillainGamesets(XMEN)
          .withHenchmenGamesets(LEGENDARY, WHAT_IF)
          .build();

        const killmongerScheme = new Scheme({
          ...baseSchemeDesc,
          meta: {
            numTwists: 8,
          },
        });

        const setup = killmongerScheme.getSetup({
          selectedMastermind: killmonger,
          numPlayers: 3,
          store: killmongerStore,
        });

        expect(Array.from(setup.heroDeck.heroes)).toContain(
          KILLMONGER_SPEC_OPS
        );
      }
    );

    it('should not need to fill in any more slots in the villain deck', () => {
      const villains = [HELLFIRE_CLUB, MURDERWORLD];
      const filledSetup = scheme.getSetup({
        numPlayers: 2,
        store,
        partialVillainDeck: {
          villains: new Set(villains),
        },
      });

      expect(Array.from(filledSetup.villainDeck.villains)).toEqual(
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

        const setup = soloScheme.getSetup({ numPlayers: 1, store });

        expect(setup.villainDeck.numMasterStrikes).toBe(1);
      });

      it('advanced solo should have 5 Master Strike', () => {
        const soloScheme = new Scheme({
          ...baseSchemeDesc,
          meta: {
            numTwists: 6,
          },
        });

        const setup = soloScheme.getSetup({
          numPlayers: 1,
          store,
          advancedSolo: true,
        });

        expect(setup.villainDeck.numMasterStrikes).toBe(5);
      });
    });
  });

  describe('addToDeck', () => {
    const origDeck = new Set([CABLE, DEADPOOL, JEAN_GREY]);

    it('should add Wolverine to the original deck', () => {
      const newDeck = Array.from(Scheme.addToDeck(origDeck, WOLVERINE));
      expect(newDeck).toHaveLength(4);
      expect(newDeck).toEqual(expect.arrayContaining([...origDeck, WOLVERINE]));
    });

    it('should throw an error when the number of cards to add is larger than the maximum length', () =>
      expect(() =>
        Scheme.addToDeck(origDeck, WOLVERINE, 1, COLUSSUS)
      ).toThrow());

    it('should throw an error when the number of cards to add is larger than the space in the array', () =>
      expect(() =>
        Scheme.addToDeck(origDeck, WOLVERINE, 5, COLUSSUS, BLADE)
      ).toThrow());
  });
});
