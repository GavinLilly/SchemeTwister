import { faker } from '@faker-js/faker';

import { GAME_SET_SIZE, Hero, VillainGroup } from '../model';
import { GameSet } from '../model/GameSet';
import {
  getGamesetSize,
  IGameSetSize,
  IHeroTeamConfig,
} from '../utils/getGameSetSize';

import { MockCardFactory } from './mockCardFactory';
import {
  createMockGamesetMeta,
  createMockKeywords,
  createMockSeriesMeta,
  createMockTeam,
} from './mockUtils';

export class MockGameSetFactory {
  constructor(
    private readonly _series = createMockSeriesMeta(),
    seed?: number
  ) {
    faker.seed(seed);
  }

  public createGameSet(
    size = GAME_SET_SIZE.core,
    cardCounts?: IGameSetSize
  ): GameSet {
    const gameSetMeta = createMockGamesetMeta(this._series, size);
    const keywords = createMockKeywords();
    const fakeCardFactory = new MockCardFactory(gameSetMeta, keywords);
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
    fakeCardFactory: MockCardFactory,
    count: number
  ): Hero[] {
    const teams = faker.helpers.multiple(() => createMockTeam());

    return faker.helpers.multiple(() => fakeCardFactory.createHero(teams), {
      count: count,
    });
  }

  private _createHeroesForTeams(
    fakeCardFactory: MockCardFactory,
    config: IHeroTeamConfig
  ): Hero[] {
    const teams = faker.helpers.multiple(() => createMockTeam(), {
      count: config.numberOfTeams,
    });

    return teams.flatMap((team) =>
      faker.helpers.multiple(() => fakeCardFactory.createHero(team), {
        count: config.heroesPerTeam,
      })
    );
  }

  private readonly _createMasterminds = (
    fakeCardFactory: MockCardFactory,
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
