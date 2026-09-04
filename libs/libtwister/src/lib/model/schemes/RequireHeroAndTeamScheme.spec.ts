import { describe, expect, it } from 'vitest';

import { StoreBuilder } from '../../factories';
import { MockCardFactory, MockGameSetFactory } from '../../mocks';
import { randomize } from '../../utils/randomize';
import { ITeam } from '../interfaces';
import { GAME_SET_SIZE } from '../types';

import { RequireHeroAndTeamScheme } from './RequireHeroAndTeamScheme';

describe('RequireHeroAndTeamScheme', () => {
  const gameSet = new MockGameSetFactory().createGameSet(GAME_SET_SIZE.core, {
    numHeroes: {
      heroesPerTeam: 5,
      numberOfTeams: 3,
    },
    numBystanders: 1,
    numHenchmen: 3,
    numMasterminds: 4,
    numVillains: 4,
    numSchemes: 2,
  });
  const selectedHero = gameSet.heroes[0];
  const allTeams = gameSet.heroes
    .map((hero) => hero.team)
    .filter((team): team is ITeam => team !== undefined);

  const dedupedTeams = Array.from(new Set(allTeams));
  const selectedTeam = randomize(dedupedTeams);
  const schemeDefinition = new MockCardFactory().createScheme();
  schemeDefinition.meta.rules = (rule) => {
    rule.heroDeck.numHeroes = 6;
    rule.villainDeck.numHeroes = 1;
    return rule;
  };
  const scheme = new RequireHeroAndTeamScheme(
    schemeDefinition,
    selectedHero,
    selectedTeam,
    4,
    2
  );
  const store = new StoreBuilder().withAllFromGamesets(gameSet).build();
  const setup = scheme.getSetup({ numPlayers: 2, store });

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
