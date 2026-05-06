import { ITeam, StoreBuilder, StoreOfStores } from '@schemetwister/libtwister';
import { beforeAll, beforeEach, describe, expect, it } from 'vitest';

import { GAME_SET as LEGENDARY } from '../legendary';

import { GAME_SET as CIVIL_WAR } from './civilWar.gameset';
import { AVENGERS_VS_XMEN } from './civilWar.schemes';
import { Require2TeamsScheme } from './require2TeamsScheme';

describe('Require 2 teams scheme', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreBuilder()
      .withAllFromGamesets(LEGENDARY, CIVIL_WAR)
      .build();
  });

  beforeEach(() => store.reset());

  describe('Avengers vs X-Men', () => {
    it('should only select 2 teams', () => {
      const scheme = new Require2TeamsScheme(AVENGERS_VS_XMEN);
      const setup = scheme.getSetup({ numPlayers: 2, store });

      const selectedTeams = new Set(
        setup.heroDeck.heroes
          .map((hero) => hero.team)
          .filter((team): team is ITeam => team !== undefined)
      );

      expect(selectedTeams.size).toBe(2);
      expect(setup.heroDeck.heroes).toHaveLength(6);
    });
  });
});
