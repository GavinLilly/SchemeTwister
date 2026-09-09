import { beforeAll, describe, expect, it } from 'vitest';

import { MockCardFactory } from '../../mocks/mock-card.factory';
import { MockGameSetFactory } from '../../mocks/mock-game-set.factory';
import { StoreBuilder } from '../../stores/store-builder';
import { StoreOfStores } from '../../stores/store-of-stores';
import { GAME_SET_SIZE } from '../constants/game-set-size.const';

import { PlayerPicksAHeroScheme } from './player-picks-a-hero.scheme';

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
