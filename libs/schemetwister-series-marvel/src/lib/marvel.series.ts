import { ISeries } from '@schemetwister/libtwister';

import * as mainline from './gameSets';

export const marvelSeries: ISeries = {
  seriesName: 'Marvel',
  description: '',
  gameSets: Object.values(mainline).map((gameset) => gameset.GAME_SET),
};
