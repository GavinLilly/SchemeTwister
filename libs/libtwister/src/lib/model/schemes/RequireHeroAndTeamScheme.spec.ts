import { StoreBuilder, StoreOfStores } from '../../factories';
import { TEST_GAME_SET_1 } from '../../testData/gameSets';
import { TEST_HERO_1 } from '../../testData/heroes';
import { TEST_NORMAL_SCHEME } from '../../testData/schemes';
import { TEST_TEAM_1 } from '../../testData/teams';
import { IGameSetup } from '../interfaces';

import { RequireHeroAndTeamScheme } from './RequireHeroAndTeamScheme';
import { Scheme } from './Scheme';

describe('House of M Scheme', () => {
  let store: StoreOfStores;
  let scheme: Scheme;
  let setup: IGameSetup;

  beforeAll(() => {
    store = new StoreBuilder()
      .withHeroGamesets(TEST_GAME_SET_1)
      .withMastermindGamesets(TEST_GAME_SET_1)
      .withVillainGamesets(TEST_GAME_SET_1)
      .withHenchmenGamesets(TEST_GAME_SET_1)
      .build();

    scheme = new RequireHeroAndTeamScheme(
      TEST_NORMAL_SCHEME,
      TEST_HERO_1,
      TEST_TEAM_1,
      2,
      2
    );

    setup = scheme.getSetup({ numPlayers: 2, store });
  });

  it('should include Scarlet Witch in the villain deck', () =>
    expect(setup.villainDeck.heroes).toContain(TEST_HERO_1));

  it('should include 4 X-Men heroes in the hero deck', () =>
    expect(
      Array.from(setup.heroDeck.heroes).filter(
        (hero) => hero.team === TEST_TEAM_1
      )
    ).toHaveLength(4));

  it('should include 2 non-X-Men heroes in the hero deck', () =>
    expect(
      Array.from(setup.heroDeck.heroes).filter(
        (hero) => hero.team !== TEST_TEAM_1
      )
    ).toHaveLength(2));
});
