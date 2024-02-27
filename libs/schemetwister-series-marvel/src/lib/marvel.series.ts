import { ISeries } from '@schemetwister/libtwister';

import * as mainline from './gameSets';

export const marvelSeries: ISeries = {
  id: '47f5c493-4cb9-45ca-af7a-190d9f552b44',
  seriesName: 'Marvel',
  description: '',
  gameSets: Object.values(mainline).map((gameset) => gameset.GAME_SET),
};
