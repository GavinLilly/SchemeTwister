import {
  IHeroDeck,
  INumPlayerRules,
  ITeam,
  randomize,
  Scheme,
  StoreOfStores,
} from '@schemetwister/libtwister';

export class Require2TeamsScheme extends Scheme {
  protected override initialiseHeroDeck(
    rules: Readonly<INumPlayerRules>,
    store: Readonly<StoreOfStores>,
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    numPlayers: number
  ): IHeroDeck {
    const teamCounts = store.heroStore.availableCards
      .map((hero) => hero.team)
      .filter((team): team is ITeam => team !== undefined)
      .reduce(
        (acc, curr) => acc.set(curr, (acc.get(curr) || 0) + 1),
        new Map<ITeam, number>()
      );

    const teamsWithThreeOrMoreHeroes = Array.from(teamCounts.entries())
      .filter(([, counts]) => counts > 3)
      .map(([team]) => team);

    const chosenTeams = randomize(teamsWithThreeOrMoreHeroes, 2);

    return {
      heroes: chosenTeams
        .flatMap((team) =>
          store.heroStore.pickRandom(3, (hero) => hero.team === team)
        )
        .toSorted((a, b) => a.name.localeCompare(b.name)),
    };
  }
}
