import { ISeries } from '@schemetwister/libtwister';

import { GAME_SET as FearItself } from './gameSets/fearItself';
import { GAME_SET as Villains } from './gameSets/villains';

export const marvelVillainsSeries: ISeries = {
  seriesName: 'Villains',
  description: '',
  gameSets: [Villains, FearItself],
};
