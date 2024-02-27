import { VillainGroup } from '@schemetwister/libtwister';
import {
  CONQUEROR,
  MICROSCOPIC_SIZE_CHANGING,
  SIZE_CHANGING,
} from '@schemetwister/schemetwister-series-marvel-common';

import { DOUBLE_CROSS, EXPLORE, HEIST } from './mcuAntMan.keywords';
import { META } from './mcuAntMan.meta';

export const CROSS_TECHNOLOGIES = new VillainGroup({
  id: '8a0940e9-c2da-4684-a43d-b578c23de7b0',
  name: 'Cross Technologies',
  gameSet: META,
  keywords: [SIZE_CHANGING, MICROSCOPIC_SIZE_CHANGING],
});

export const GHOST_CHASERS = new VillainGroup({
  id: '63bbceda-38f6-47bb-a14b-3f13b2f374c4',
  name: 'Ghost Chasers',
  gameSet: META,
  keywords: [HEIST, DOUBLE_CROSS, SIZE_CHANGING],
});

export const ARMADA_OF_KANG = new VillainGroup({
  id: '3f149682-ab98-40af-af94-3591202bee7b',
  name: 'Armada of Kang',
  gameSet: META,
  keywords: [CONQUEROR, DOUBLE_CROSS, MICROSCOPIC_SIZE_CHANGING],
});

export const QUANTUM_REALM = new VillainGroup({
  id: '7cc423f6-f416-4d88-a296-f868b9e89656',
  name: 'Quantum Realm',
  gameSet: META,
  keywords: [EXPLORE, MICROSCOPIC_SIZE_CHANGING],
});
