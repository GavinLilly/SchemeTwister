import ANNIHILATION from '../../data/gameSets/annihilation';
import { SNEAK_ATTACK_THE_HEROES_HOMES } from '../../data/gameSets/annihilation/schemes';
import LEGENDARY from '../../data/gameSets/legendary';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';

import { PlayerPicksAHeroScheme } from './PlayerPicksAHeroScheme';

describe('Player Picks a Hero Scheme', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreBuilder()
      .withHeroGamesets(ANNIHILATION, LEGENDARY)
      .withMastermindGamesets(ANNIHILATION)
      .withVillainGamesets(ANNIHILATION, LEGENDARY)
      .withHenchmenGamesets(LEGENDARY)
      .build();
  });

  describe("Sneak Attack the Heroes' Homes", () => {
    it('should put 3 blank heroes in the hero deck', () => {
      const scheme = new PlayerPicksAHeroScheme(
        injectGameSet(ANNIHILATION, SNEAK_ATTACK_THE_HEROES_HOMES)
      );
      const setup = scheme.getSetup(
        3,
        store.mastermindStore.getOneRandom(),
        store
      );

      expect(
        setup.heroDeck.heroes.filter((hero) =>
          hero.name.match('Player \\d picks a hero')
        )
      ).toHaveLength(3);
    });
  });
});
