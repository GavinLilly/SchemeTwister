import { beforeAll, describe, expect, it } from 'vitest';

import { StoreBuilder, StoreOfStores } from '../../factories';
import { GameSetMock } from '../../testData/gameSetMock';
import { TEST_HERO_IN_VILLAIN_DECK_AND_REQUIRE_TEAMS_SCHEME } from '../../testData/schemes';
import { Random } from '../../utils/random';
import { IGameSetup, ITeam } from '../interfaces';
import { GAME_SET_SIZE } from '../types';

import { RequireHeroAndTeamScheme } from './RequireHeroAndTeamScheme';
import { Scheme } from './Scheme';

describe('RequireHeroAndTeamScheme', () => {
  let store: StoreOfStores;
  let scheme: Scheme;
  let setup: IGameSetup;
  const gameSet = new GameSetMock(GAME_SET_SIZE.core, {
    heroes: {
      num: 15,
      teams: {
        heroesPerTeam: 5,
        numberOfTeams: 3,
      },
    },
    numBystanders: 1,
    numHenchmen: 3,
    numMasterminds: 4,
    numVillains: 4,
    numSchemes: 2,
  }).getGameSet();
  const selectedHero = gameSet.heroes[0];
  let selectedTeam = gameSet.heroes
    .map((hero) => hero.team)
    .filter((team): team is ITeam => team !== undefined)[1];

  beforeAll(() => {
    store = new StoreBuilder().withAllFromGamesets(gameSet).build();

    const allTeams = gameSet.heroes
      .map((hero) => hero.team)
      .filter((team): team is ITeam => team !== undefined);

    const dedupedTeams = Array.from(new Set(allTeams));

    selectedTeam = Random.choice(dedupedTeams);

    scheme = new RequireHeroAndTeamScheme(
      TEST_HERO_IN_VILLAIN_DECK_AND_REQUIRE_TEAMS_SCHEME,
      selectedHero,
      selectedTeam,
      4,
      2
    );

    setup = scheme.getSetup({ numPlayers: 2, store });
  });

  it('should include selectedHero in the villain deck', () =>
    expect(setup.villainDeck.heroes).toContain(selectedHero));

  it('should include 4 X-Men heroes in the hero deck', () =>
    expect(
      setup.heroDeck.heroes.filter((hero) => hero.team === selectedTeam)
    ).toHaveLength(4));

  it('should include 2 non-X-Men heroes in the hero deck', () =>
    expect(
      setup.heroDeck.heroes.filter((hero) => hero.team !== selectedTeam)
    ).toHaveLength(2));
});
