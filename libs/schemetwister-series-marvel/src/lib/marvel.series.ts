import { ISeries } from '@schemetwister/libtwister';

import * as mainline from './gameSets';
import { marvelSeriesMeta } from './marvelSeriesMeta';

export const marvelSeries: ISeries = {
  ...marvelSeriesMeta,
  gameSets: Object.values(mainline).map((gameset) => gameset.GAME_SET),
};
