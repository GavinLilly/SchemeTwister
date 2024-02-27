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
  id: '6e6d8882-1aa6-47e9-8312-6abdb802659f',
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
