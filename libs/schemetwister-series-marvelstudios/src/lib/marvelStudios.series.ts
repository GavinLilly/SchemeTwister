import { ISeries } from '@schemetwister/libtwister';

import {
  MarvelStudiosAntMan,
  MarvelStudiosGuardiansOfTheGalaxy,
  MarvelStudiosInfinitySaga,
  MarvelStudiosPhaseOne,
  MarvelStudiosWhatIf,
  SpidermanHomecoming,
} from './gameSets';
import { marvelStudiosSeriesMeta } from './marvelStudiosSeriesMeta';

export const marvelStudiosSeries: ISeries = {
  seriesMeta: marvelStudiosSeriesMeta,
  gameSets: [
    MarvelStudiosPhaseOne,
    MarvelStudiosAntMan,
    MarvelStudiosGuardiansOfTheGalaxy,
    MarvelStudiosInfinitySaga,
    SpidermanHomecoming,
    MarvelStudiosWhatIf,
  ].map((gameset) => gameset.GAME_SET),
};
