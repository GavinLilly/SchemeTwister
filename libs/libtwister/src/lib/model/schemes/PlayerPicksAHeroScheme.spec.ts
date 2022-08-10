/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ANNIHILATION from '../../data/gameSets/annihilation';
import { SNEAK_ATTACK_THE_HEROES_HOMES } from '../../data/gameSets/annihilation/schemes';
import LEGENDARY from '../../data/gameSets/legendary';
import { MultiCardStore } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';
import { AbstractMastermind } from '../AbstractMastermind';
import { IHero, IVillainGroup, IHenchmen } from '../interfaces';

import { PlayerPicksAHeroScheme } from './PlayerPicksAHeroScheme';

describe('Player Picks a Hero Scheme', () => {
  let heroStore: MultiCardStore<IHero>;
  let villainStore: MultiCardStore<IVillainGroup>;
  let henchmenStore: MultiCardStore<IHenchmen>;
  let mastermindStore: MultiCardStore<AbstractMastermind>;

  beforeAll(() => {
    heroStore = new MultiCardStore([
      ...ANNIHILATION.heroes,
      ...LEGENDARY.heroes,
    ]);
    villainStore = new MultiCardStore([
      ...LEGENDARY.villains!,
      ...ANNIHILATION.villains!,
    ]);
    henchmenStore = new MultiCardStore(LEGENDARY.henchmen!);
    mastermindStore = new MultiCardStore(ANNIHILATION.masterminds!);
  });

  describe("Sneak Attack the Heroes' Homes", () => {
    it('should put 3 blank heroes in the hero deck', async () => {
      const scheme = new PlayerPicksAHeroScheme(
        injectGameSet(ANNIHILATION.id, SNEAK_ATTACK_THE_HEROES_HOMES)
      );
      const setup = await scheme.getSetup(
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
});
