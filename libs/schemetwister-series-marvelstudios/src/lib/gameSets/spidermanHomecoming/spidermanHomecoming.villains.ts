import { VillainGroup } from '@schemetwister/libtwister';
import {
  DANGER_SENSE,
  WALL_CRAWL,
} from '@schemetwister/schemetwister-series-marvel-common';

import { STRIKER } from './spidermanHomecoming.keywords';
import { META } from './spidermanHomecoming.meta';

export const SALVAGERS = new VillainGroup({
  id: '36db4913-6798-42f6-b8bb-0603ef256005',
  name: 'Salvagers',
  gameSet: META,
  keywords: [STRIKER],
});

export const VULTURE_TECH = new VillainGroup({
  id: '4795a9f5-9992-4ef7-9884-c94118fd939f',
  name: 'Vulture Tech',
  gameSet: META,
  keywords: [WALL_CRAWL, DANGER_SENSE, STRIKER],
});
