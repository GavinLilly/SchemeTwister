import { ISeries } from '@schemetwister/libtwister';

import { GAME_SET as FearItself } from './gameSets/fearItself';
import { GAME_SET as Villains } from './gameSets/villains';
import { marvelVillainsSeriesMeta } from './marvelVillainsSeriesMeta';

export const marvelVillainsSeries: ISeries = {
  ...marvelVillainsSeriesMeta,
  gameSets: [Villains, FearItself],
};
