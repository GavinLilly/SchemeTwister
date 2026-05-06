import { VillainGroup } from '@schemetwister/libtwister';

import { POISION_VILLAINS, SYMBIOTE_BONDS } from './venom.keywords';
import { META } from './venom.meta';

export const LIFE_FOUNDATION = new VillainGroup({
  id: '8e892d94-e2ae-4949-9cf3-dd20487c6b9a',
  name: 'Life Foundation',
  gameSet: META,
  keywords: [SYMBIOTE_BONDS],
});

export const POISONS = new VillainGroup({
  id: 'db59bd15-218a-4f34-b8b7-f78ddf148053',
  name: 'Poisons',
  gameSet: META,
  keywords: [SYMBIOTE_BONDS, POISION_VILLAINS],
});
