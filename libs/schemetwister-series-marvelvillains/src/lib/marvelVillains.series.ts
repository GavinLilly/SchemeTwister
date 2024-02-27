import { ISeries } from '@schemetwister/libtwister';

import { GAME_SET as FearItself } from './gameSets/fearItself';
import { GAME_SET as Villains } from './gameSets/villains';

export const marvelVillainsSeries: ISeries = {
  id: '1d71661c-e372-4b94-a2f9-e85ced2570ec',
  seriesName: 'Marvel Villains',
  description: '',
  gameSets: [Villains, FearItself],
};
