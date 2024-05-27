import { ISeries } from '@schemetwister/libtwister';

import { buffySeriesMeta } from './buffySeriesMeta';
import * as mainline from './gameSets';

export const buffySeries: ISeries = {
  seriesMeta: buffySeriesMeta,
  gameSets: Object.values(mainline).map((gameset) => gameset.GAME_SET),
};
