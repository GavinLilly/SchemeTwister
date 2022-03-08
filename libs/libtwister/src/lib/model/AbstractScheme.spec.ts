/* eslint-disable @typescript-eslint/no-non-null-assertion */

import defaultRules from '../data/defaultRules';
import LEGENDARY from '../data/gameSets/legendary';
import { DOOMBOT_LEGION } from '../data/gameSets/legendary/henchmen';
import { DR_DOOM } from '../data/gameSets/legendary/masterminds';
import XMEN from '../data/gameSets/xMen';
import { ARCADE } from '../data/gameSets/xMen/masterminds';
import { HELLFIRE_CLUB, MURDERWORLD } from '../data/gameSets/xMen/villains';
import { MultiCardStore } from '../factories';

import { AbstractMastermind } from './AbstractMastermind';
import { AbstractScheme } from './AbstractScheme';
import { GameSetup } from './GameSetup';
import { IHenchmen, IHero, IVillainGroup } from './interfaces';
import { IGameSetup } from './interfaces/gameSetup.interface';
import { IScheme } from './interfaces/scheme.interface';
import { NumPlayers, numPlayers } from './types/numPlayers.type';

class TestAbstractScheme extends AbstractScheme {
  public readonly gameSetId = '0f0a6c5b-6476-4850-aaac-25f06316b1b4';
}

const schemeDesc: Omit<IScheme, 'gameSetId' | 'rules' | 'cardType'> = {
  name: 'Test scheme',
  id: 'ea6412df-9a3a-451c-a25b-5ab49507b958',
  twist: "There's some twists",
  evilWins: 'Evil wins',
  setup: 'Setup',
};

describe('Abstract scheme', () => {
  it('should create with 1 count of twists', () =>
    expect(new TestAbstractScheme(schemeDesc, 8)).toBeTruthy());

  it('should create with 5 counts of twists', () =>
    expect(new TestAbstractScheme(schemeDesc, 1, 2, 3, 4, 5)).toBeTruthy());

  describe('Rules', () => {
    it('should have default rules when not overridden', () => {
      const scheme = new TestAbstractScheme(schemeDesc, 8);
      expect(scheme.rules).toEqual(defaultRules());
    });

    describe('Overriding default rules', () => {
      let overriddenScheme: AbstractScheme;

      beforeAll(() => {
        overriddenScheme = new TestAbstractScheme(
          schemeDesc,
          8
        ).overrideDefaultRules({
          heroDeck: { numHeroes: 10 },
        });
      });

      it.each(numPlayers)('%s player game should have 10 heroes', (num) =>
        expect(overriddenScheme.rules[num].heroDeck.numHeroes).toBe(10)
      );
    });

    describe('Overriding each rule', () => {
      let overriddenScheme: AbstractScheme;

      beforeAll(() => {
        overriddenScheme = new TestAbstractScheme(
          schemeDesc,
          8
        ).overrideEachRule((rule, num) => {
          rule.numWounds = 3 * num;
          return rule;
        });
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
    let scheme: AbstractScheme;
    let setup: IGameSetup;
    let heroStore: MultiCardStore<IHero>;
    let villainStore: MultiCardStore<IVillainGroup>;
    let henchmenStore: MultiCardStore<IHenchmen>;
    let mastermindStore: MultiCardStore<AbstractMastermind>;

    beforeAll(async () => {
      scheme = new TestAbstractScheme(schemeDesc, 10);
      heroStore = new MultiCardStore<IHero>(XMEN.heroes);
      villainStore = new MultiCardStore<IVillainGroup>(XMEN.villains!);
      henchmenStore = new MultiCardStore<IHenchmen>(XMEN.henchmen!);
      mastermindStore = new MultiCardStore<AbstractMastermind>(
        XMEN.masterminds!
      );
      setup = await scheme.getSetup(
        2,
        ARCADE,
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );
    });

    beforeEach(() => {
      [heroStore, villainStore, henchmenStore, mastermindStore].forEach(
        (store) => store.resetStore()
      );
    });

    it('should be an instance of GameSetup', () =>
      expect(setup).toBeInstanceOf(GameSetup));

    it('should include Aracade as the mastermind', () =>
      expect(setup.mastermind).toBe(ARCADE));

    it('should include Murderworld in the villain deck', () =>
      expect(setup.villainDeck.villains).toContain(MURDERWORLD));

    it('should put 1 hero in the additional deck', async () => {
      const heroAdditional = new TestAbstractScheme(
        schemeDesc,
        8
      ).overrideDefaultRules({
        additionalDeck: {
          name: 'Foo',
          deck: {
            numHeroes: 1,
          },
        },
      });

      const additionalSetup = await heroAdditional.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(additionalSetup.additionalDeck).toBeTruthy();
      expect(additionalSetup.additionalDeck?.deck.heroes).toHaveLength(1);
    });

    it('should put 1 henchmen in the hero deck', async () => {
      const henchmenHero = new TestAbstractScheme(
        schemeDesc,
        8
      ).overrideDefaultRules({ heroDeck: { numHenchmenGroups: 1 } });

      const heroHenchmenSetup = await henchmenHero.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(heroHenchmenSetup.heroDeck.henchmen).toHaveLength(1);
    });

    it('should put 1 mastermind in the villain deck', async () => {
      const mastermindVillain = new TestAbstractScheme(
        schemeDesc,
        8
      ).overrideDefaultRules({ villainDeck: { numMasterminds: 1 } });

      expect(mastermindVillain.rules[3].villainDeck.numMasterminds).toBe(1);

      const mastermindVillainSetup = await mastermindVillain.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(mastermindVillainSetup.villainDeck.masterminds).toBeTruthy();
      expect(mastermindVillainSetup.villainDeck.masterminds).toHaveLength(1);
    });

    it('should put 5 bystanders in the hero deck', async () => {
      const bystanderScheme = new TestAbstractScheme(
        schemeDesc,
        6
      ).overrideDefaultRules({ heroDeck: { numBystanders: 5 } });

      const bystanderSetup = await bystanderScheme.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(bystanderSetup.heroDeck.numBystanders).toBe(5);
    });

    it('should include Doombots in the villain deck', async () => {
      const doomHenchmenStore = new MultiCardStore<IHenchmen>([
        ...LEGENDARY.henchmen!,
        ...XMEN.henchmen!,
      ]);
      const goonsSetup = await scheme.getSetup(
        4,
        DR_DOOM,
        heroStore,
        villainStore,
        doomHenchmenStore,
        mastermindStore
      );

      expect(goonsSetup.villainDeck.henchmen).toContain(DOOMBOT_LEGION);
    });

    it('should not need to fill in any more slots in the villain deck', async () => {
      const villains = [HELLFIRE_CLUB, MURDERWORLD];
      const filledSetup = await scheme.getSetup(
        2,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore,
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
  });
});
