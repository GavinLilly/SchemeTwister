import { GAME_SET as ANNIHILATION } from '../../data/gameSets/annihilation/annihilation.gameset';
import { SNEAK_ATTACK_THE_HEROES_HOMES } from '../../data/gameSets/annihilation/annihilation.schemes';
import { GAME_SET as LEGENDARY } from '../../data/gameSets/legendary/legendary.gameset';
import { StoreBuilder, StoreOfStores } from '../../factories';

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
      const scheme = new PlayerPicksAHeroScheme(SNEAK_ATTACK_THE_HEROES_HOMES);
      const setup = scheme.getSetup({ numPlayers: 3, store });

      expect(
        Array.from(setup.heroDeck.heroes).filter((hero) =>
          hero.name.match('Player \\d picks a hero')
        )
      ).toHaveLength(3);
    });
  });
});
