import { ISeries } from '@schemetwister/libtwister';

import * as villains from './gameSets';
import { marvelVillainsSeriesMeta } from './marvelVillainsSeriesMeta';

export const marvelVillainsSeries: ISeries = {
  seriesMeta: marvelVillainsSeriesMeta,
  gameSets: Object.values(villains).map((gameset) => gameset.GAME_SET),
};
