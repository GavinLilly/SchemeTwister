import { ISeries } from '@schemetwister/libtwister';

import * as mainline from './gameSets';
import { marvelSeriesMeta } from './marvelSeriesMeta';

export const marvelSeries: ISeries = {
  seriesMeta: marvelSeriesMeta,
  gameSets: Object.values(mainline).map((gameset) => gameset.GAME_SET),
};
