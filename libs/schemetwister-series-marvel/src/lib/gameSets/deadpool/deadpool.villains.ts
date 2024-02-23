import { VillainGroup } from '@schemetwister/libtwister';

import { EXCESSIVE_VIOLENCE } from './deadpool.keywords';
import { META } from './deadpool.meta';

export const DEADPOOLS_FRIENDS = new VillainGroup({
  id: '64a75bb7-bf4a-4b77-a299-de6ee6842001',
  name: `Deadpool's "Friends"`,

  gameSet: META,
  keywords: [EXCESSIVE_VIOLENCE],
});

export const EVIL_DEADPOOL_CORPSE = new VillainGroup({
  id: '2a9d540b-60e5-4ccc-bc60-fcb96fe89321',
  name: 'Evil Deadpool Corpse',

  gameSet: META,
  keywords: [EXCESSIVE_VIOLENCE],
});
