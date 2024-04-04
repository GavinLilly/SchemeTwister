import { VillainGroup } from '@schemetwister/libtwister';

import { BURROW, COSMIC_THREAT } from './fantasticFour.keywords';
import { META } from './fantasticFour.meta';

export const HERALDS_OF_GALACTUS = new VillainGroup({
  id: 'ec13a924-108a-48ba-8dfd-4eb6b310febc',
  name: 'Heralds of Galactus',

  gameSet: META,
  keywords: [COSMIC_THREAT],
});

export const SUBTERRANEA = new VillainGroup({
  id: '8e152e27-b507-402e-8049-8425cbc79734',
  name: 'Subterranea',

  gameSet: META,
  keywords: [BURROW],
});
