import { ISeries } from '@schemetwister/libtwister';

import {
  MarvelStudiosAntMan,
  MarvelStudiosGuardiansOfTheGalaxy,
  MarvelStudiosInfinitySaga,
  MarvelStudiosPhaseOne,
  MarvelStudiosWhatIf,
  SpidermanHomecoming,
} from './gameSets';

export const marvelStudiosSeries: ISeries = {
  seriesName: 'Marvel Studios',
  description: '',
  gameSets: [
    MarvelStudiosPhaseOne,
    MarvelStudiosAntMan,
    MarvelStudiosGuardiansOfTheGalaxy,
    MarvelStudiosInfinitySaga,
    SpidermanHomecoming,
    MarvelStudiosWhatIf,
  ].map((gameset) => gameset.GAME_SET),
};
