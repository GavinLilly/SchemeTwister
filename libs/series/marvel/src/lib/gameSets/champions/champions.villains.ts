import { VillainGroup } from '@schemetwister/libtwister';
import { DEMOLISH } from '@schemetwister/series-marvel-common';

import { SIZE_CHANGING } from './champions.keywords';
import { META } from './champions.meta';

export const MONSTERS_UNLEASHED = new VillainGroup({
  id: 'a189a196-91f3-496b-8ca4-39708c881bb1',
  name: 'Monsters Unleashed',
  gameSet: META,
  keywords: [DEMOLISH, SIZE_CHANGING],
});

export const WRECKING_CREW = new VillainGroup({
  id: '170cc43f-32cb-4dfd-b2b6-f833cd875e59',
  name: 'Wrecking Crew',
  gameSet: META,
  keywords: [DEMOLISH],
});
