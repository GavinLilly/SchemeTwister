import { VillainGroup } from '@schemetwister/libtwister';

import { CONQUEROR } from '../marvelStudios/marvelStudios.keywords';

import { MAN_OUT_OF_TIME, MOMENTUM } from './annihilation.keywords';
import { META } from './annihilation.meta';

export const ANNIHILATION_WAVE = new VillainGroup({
  id: 'efcbc5ba-b401-4268-844b-b35c97b4a274',
  name: 'Annihilation Wave',

  gameSet: META,
  keywords: [MOMENTUM],
});

export const TIMELINES_OF_KANG = new VillainGroup({
  id: '3ff639d6-d3ed-47d5-92a3-5696636368d2',
  name: 'Timelines of Kang',

  gameSet: META,
  keywords: [CONQUEROR, MAN_OUT_OF_TIME],
});
