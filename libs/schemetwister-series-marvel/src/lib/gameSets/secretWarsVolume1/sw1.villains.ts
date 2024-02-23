import { VillainGroup } from '@schemetwister/libtwister';

import { BRIBE, TELEPORT } from '../darkCity/darkCity.keywords';

import {
  CROSS_DIMENSIONAL_RAMPAGE,
  RISE_OF_THE_LIVING_DEAD,
} from './sw1.keywords';
import { META } from './sw1.meta';

export const THE_DEADLANDS = new VillainGroup({
  id: '068e3934-7b0e-4f80-ab8a-167c06072090',
  name: 'The Deadlands',

  gameSet: META,
  keywords: [RISE_OF_THE_LIVING_DEAD],
});

export const DOMAIN_OF_APOCALYPSE = new VillainGroup({
  id: '8f5f5b90-bbcd-48b0-845b-0c7e05c4bb7f',
  name: 'Domain of Apocalypse',

  gameSet: META,
  keywords: [TELEPORT, CROSS_DIMENSIONAL_RAMPAGE],
});

export const LIMBO = new VillainGroup({
  id: 'db877f4e-d1d8-466b-86c8-c3253f01e282',
  name: 'Limbo',

  gameSet: META,
  keywords: [TELEPORT],
});

export const MANHATTAN_EARTH1610 = new VillainGroup({
  id: 'f3daf848-5a1d-44bc-ab5f-3261039cc0a2',
  name: 'Manhattan (Earth-1610)',

  gameSet: META,
  keywords: [TELEPORT, CROSS_DIMENSIONAL_RAMPAGE],
});

export const SENTINEL_TERRITORIES = new VillainGroup({
  id: '32e33f51-ef58-4752-926b-eb5bf6fae586',
  name: 'Sentinel Territories',

  gameSet: META,
  keywords: [CROSS_DIMENSIONAL_RAMPAGE],
});

export const WASTELAND = new VillainGroup({
  id: '77a97c27-ea12-4f9e-90ac-be5d017b3f20',
  name: 'Wasteland',

  gameSet: META,
  keywords: [BRIBE, CROSS_DIMENSIONAL_RAMPAGE],
});
