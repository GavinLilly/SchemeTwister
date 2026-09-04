import { faker } from '@faker-js/faker';

import { GAME_SET_SIZE, ISeries } from '../model';

import { MockGameSetFactory } from './mockGameSetFactory';
import { createMockSeriesMeta } from './mockUtils';

interface ISeriesConfig {
  numCore: number;
  numLarge: number;
  numMedium: number;
  numSmall: number;
}

export class MockSeriesFactory {
  constructor(seed?: number) {
    faker.seed(seed);
  }

  public createSeries(config?: ISeriesConfig): ISeries {
    const seriesMeta = createMockSeriesMeta();
    const gameSetFactory = new MockGameSetFactory(seriesMeta);

    if (config === undefined) {
      return {
        seriesMeta,
        gameSets: [
          ...faker.helpers.multiple(
            () => gameSetFactory.createGameSet(GAME_SET_SIZE.core),
            { count: { min: 1, max: 2 } }
          ),
          ...faker.helpers.multiple(() => gameSetFactory.createGameSet()),
        ],
      };
    }

    const numCore = config.numCore > 0 ? config.numCore : 1;

    const gameSets = [
      [GAME_SET_SIZE.core, numCore],
      [GAME_SET_SIZE.large, config.numLarge],
      [GAME_SET_SIZE.medium, config.numMedium],
      [GAME_SET_SIZE.small, config.numSmall],
    ].flatMap(([size, count]) =>
      faker.helpers.multiple(() => gameSetFactory.createGameSet(size), {
        count,
      })
    );

    return { seriesMeta, gameSets };
  }
}
