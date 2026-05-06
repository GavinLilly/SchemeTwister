import { VillainGroup } from '@schemetwister/libtwister';
import {
  CROSS_DIMENSIONAL_RAMPAGE,
  EMPOWERED,
  RISE_OF_THE_LIVING_DEAD,
} from '@schemetwister/series-marvel-common';

import { SOULBIND } from './whatIf.keywords';
import { META } from './whatIf.meta';

export const BLACK_ORDER_GUARDS = new VillainGroup({
  id: '64823018-2de5-4afa-b562-b72594d32ec5',
  name: 'Black Order Guards',
  gameSet: META,
  keywords: [EMPOWERED],
});

export const INTERGALACTIC_PARTY_ANIMALS = new VillainGroup({
  id: 'f23e57d3-c8d2-418b-a8e6-5703908c605b',
  name: 'Intergalactic Party Animals',
  gameSet: META,
  keywords: [CROSS_DIMENSIONAL_RAMPAGE],
});

export const RIVAL_OVERLORDS = new VillainGroup({
  id: '94dff492-7ba2-4e61-8138-37f40eb5b6d9',
  name: 'Rival Overlords',
  gameSet: META,
  keywords: [SOULBIND],
});

export const STRANGES_DEMONS = new VillainGroup({
  id: '3c28d493-3de3-4ffb-9a6a-98b32a002b56',
  name: "Strange's Demons",
  gameSet: META,
  keywords: [CROSS_DIMENSIONAL_RAMPAGE, SOULBIND],
});

export const ZOMBIE_AVENGERS = new VillainGroup({
  id: 'c84a3fef-d85c-4004-ab8b-bbb51ed4cc0f',
  name: 'Zombie Avengers',
  gameSet: META,
  keywords: [RISE_OF_THE_LIVING_DEAD, CROSS_DIMENSIONAL_RAMPAGE],
});
