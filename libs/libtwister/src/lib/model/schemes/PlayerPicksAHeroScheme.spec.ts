import { beforeAll, describe, expect, it } from 'vitest';

import { StoreBuilder, StoreOfStores } from '../../factories';
import { MockGameSetFactory } from '../../mocks';
import { createMockGamesetMeta } from '../../mocks/mockUtils';
import { SchemeDefinition } from '../cards';

import { GAME_SET_SIZE } from '../types';
import { PlayerPicksAHeroScheme } from './PlayerPicksAHeroScheme';

describe('Player Picks a Hero Scheme', () => {
  const gameSetMeta = createMockGamesetMeta();
  const TEST_PLAYER_PICKS_A_HERO_SCHEME = new SchemeDefinition({
    id: '468198e3-a55b-4b7c-900e-c83f4b3eb65b',
    name: 'Test player picks a hero scheme',
    setup:
      '6 twists. Each player chooses a Hero to be part of the Hero Deck. Randomly select other Heroes up to the normal number of Heroes. Each player adds to their starting deck three non-rare cards with different names from the Hero they chose and three Wounds.',
    twist: `1-5: Each player discards a non-grey Hero or gains a Wound.
    6: Evil wins!`,
    evilWins: 'When 6 twists revealed',
    meta: {
      numTwists: 6,
      overrideScheme: {
        schemeType: PlayerPicksAHeroScheme,
      },
    },
    gameSet: gameSetMeta,
  });

  let store: StoreOfStores;

  beforeAll(() => {
    const gameSet = new MockGameSetFactory().createGameSet(GAME_SET_SIZE.core);
    store = new StoreBuilder().withAllFromGamesets(gameSet).build();
  });

  describe("Sneak Attack the Heroes' Homes", () => {
    it('should put 3 blank heroes in the hero deck', () => {
      const scheme = new PlayerPicksAHeroScheme(
        TEST_PLAYER_PICKS_A_HERO_SCHEME
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
