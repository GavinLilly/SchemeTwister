import { beforeAll, describe, expect, it } from 'vitest';

import { GAME_SET_SIZE } from '../constants/game-set-size.const';
import { StoreBuilder } from '../store/store-builder';
import { StoreOfStores } from '../store/store-of-stores';
import { MockCardFactory } from '../testing/mocks/mock-card.factory';
import { MockGameSetFactory } from '../testing/mocks/mock-game-set.factory';
import { PlayerPicksAHeroScheme } from './player-picks-a-hero-scheme.model';

describe('Player Picks a Hero Scheme', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    const gameSet = new MockGameSetFactory().createGameSet(GAME_SET_SIZE.core);
    store = new StoreBuilder().withAllFromGamesets(gameSet).build();
  });

  describe("Sneak Attack the Heroes' Homes", () => {
    it('should put 3 blank heroes in the hero deck', () => {
      const scheme = new PlayerPicksAHeroScheme(
        new MockCardFactory().createSchemeDefinition()
      );
      const setup = scheme.getSetup({ numPlayers: 3, store });

      expect(
        setup.heroDeck.heroes.filter((hero) =>
          /Player \d picks a hero/.exec(hero.name)
        )
      ).toHaveLength(3);
    });
  });
});
