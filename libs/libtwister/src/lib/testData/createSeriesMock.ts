import { nanoid } from 'nanoid';
import * as uuid from 'uuid';

import {
  GAME_SET_SIZE,
  GameSet,
  GameSetSize,
  ISeries,
  SeriesMeta,
} from '../model';

import { GameSetMock } from './gameSetMock';

interface ISeriesConfig {
  numCore: number;
  numLarge: number;
  numMedium: number;
  numSmall: number;
}

/**
 *
 * @param config
 */
export function createSeriesMock(config: ISeriesConfig): ISeries {
  const numCore = config.numCore > 0 ? config.numCore : 1;

  const series = new SeriesMeta(uuid.v4(), `Test series ${nanoid(4)}`, '');

  const gameSets = [
    [GAME_SET_SIZE.core, numCore],
    [GAME_SET_SIZE.large, config.numLarge],
    [GAME_SET_SIZE.medium, config.numMedium],
    [GAME_SET_SIZE.small, config.numSmall],
  ].flatMap(([size, count]) => generateGameSets(size, count, series));

  return {
    seriesMeta: series,
    gameSets,
  };
}

/**
 *
 * @param size
 * @param count
 * @param series
 */
function generateGameSets(
  size: GameSetSize,
  count: number,
  series?: SeriesMeta
): GameSet[] {
  const gameSets: GameSet[] = [];

  for (let i = 0; i < count; i++) {
    const core = new GameSetMock(size, undefined, series).getGameSet();
    gameSets.push(core);
  }

  return gameSets;
}
