import { StoreBuilder, StoreOfStores } from '../../factories';
import { TEST_GAME_SET_1 } from '../../testData/gameSets';
import { TEST_PLAYER_PICKS_A_HERO_SCHEME } from '../../testData/schemes';

import { PlayerPicksAHeroScheme } from './PlayerPicksAHeroScheme';

describe('Player Picks a Hero Scheme', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreBuilder().withAllFromGamesets(TEST_GAME_SET_1).build();
  });

  describe("Sneak Attack the Heroes' Homes", () => {
    it('should put 3 blank heroes in the hero deck', () => {
      const scheme = new PlayerPicksAHeroScheme(
        TEST_PLAYER_PICKS_A_HERO_SCHEME
      );
      const setup = scheme.getSetup({ numPlayers: 3, store });

      expect(
        Array.from(setup.heroDeck.heroes).filter((hero) =>
          /Player \d picks a hero/.exec(hero.name)
        )
      ).toHaveLength(3);
    });
  });
});
