import { faker } from '@faker-js/faker';
import {
  GameSet,
  GameSetSize,
  getGamesetSize,
  Hero,
  IGameSetSize,
  IHeroTeamConfig,
  VillainGroup,
} from '@schemetwister/libtwister';

import { FakeCardFactory } from './fakeCardFactory';
import {
  createGamesetMeta,
  createKeywords,
  createSeriesMeta,
  createTeam,
} from './fakerUtils';

export class FakeGameSetFactory {
  constructor(private readonly _series = createSeriesMeta(), seed?: number) {
    faker.seed(seed);
  }

  public createGameSet(size?: GameSetSize, cardCounts?: IGameSetSize): GameSet {
    const gameSetMeta = createGamesetMeta(this._series, size);
    const keywords = createKeywords();
    const fakeCardFactory = new FakeCardFactory(gameSetMeta, keywords);
    const gameSetSizes = cardCounts ?? getGamesetSize(gameSetMeta.size);

    const villains = faker.helpers.multiple(
      () => fakeCardFactory.createVillainGroup(),
      { count: gameSetSizes.numVillains }
    );

    const heroes =
      typeof gameSetSizes.numHeroes === 'number'
        ? this._createNormalHeroes(fakeCardFactory, gameSetSizes.numHeroes)
        : this._createHeroesForTeams(fakeCardFactory, gameSetSizes.numHeroes);

    return new GameSet(
      gameSetMeta,
      heroes,
      this._createMasterminds(
        fakeCardFactory,
        villains,
        gameSetSizes.numMasterminds
      ),
      faker.helpers.multiple(() => fakeCardFactory.createScheme(), {
        count: gameSetSizes.numSchemes,
      }),
      villains,
      faker.helpers.multiple(() => fakeCardFactory.createHenchmen(), {
        count: gameSetSizes.numHenchmen,
      }),
      faker.helpers.multiple(() => fakeCardFactory.createBystander(), {
        count: gameSetSizes.numBystanders,
      })
    );
  }

  private _createNormalHeroes(
    fakeCardFactory: FakeCardFactory,
    count: number
  ): Hero[] {
    const teams = faker.helpers.multiple(() => createTeam());

    return faker.helpers.multiple(() => fakeCardFactory.createHero(teams), {
      count: count,
    });
  }

  private _createHeroesForTeams(
    fakeCardFactory: FakeCardFactory,
    config: IHeroTeamConfig
  ): Hero[] {
    const teams = faker.helpers.multiple(() => createTeam(), {
      count: config.numberOfTeams,
    });

    return teams.flatMap((team) =>
      faker.helpers.multiple(() => fakeCardFactory.createHero(team), {
        count: config.heroesPerTeam,
      })
    );
  }

  private readonly _createMasterminds = (
    fakeCardFactory: FakeCardFactory,
    villains: VillainGroup[],
    count: number
  ) =>
    faker.datatype.boolean()
      ? faker.helpers.multiple(
          () =>
            fakeCardFactory.createMastermind(
              faker.helpers.arrayElements(villains, { min: 1, max: 2 })
            ),
          { count }
        )
      : faker.helpers.multiple(
          () =>
            fakeCardFactory.createEpicMastermind(
              faker.helpers.arrayElements(villains, { min: 1, max: 2 })
            ),
          { count }
        );
}
