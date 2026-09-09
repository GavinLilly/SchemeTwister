import { beforeAll, describe, expect, it } from 'vitest';

import { StoreBuilder, StoreOfStores } from '../../factories';
import { MockCardFactory, MockGameSetFactory } from '../../mocks';
import { GAME_SET_SIZE } from '../types';

import { PlayerPicksAHeroScheme } from './PlayerPicksAHeroScheme';

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
