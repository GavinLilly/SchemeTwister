import { VillainGroup } from '../../../model';

import {
  MOONLIGHT_AND_SUNLIGHT,
  WAKING_NIGHTMARE,
} from './theNewMutants.keywords';
import { META } from './theNewMutants.meta';

export const DEMONS_OF_LIMBO = new VillainGroup({
  id: 'c236e200-011d-4e56-b04a-b61b0011ced3',
  name: 'Demons of Limbo',

  gameSet: META,
  keywords: [MOONLIGHT_AND_SUNLIGHT, WAKING_NIGHTMARE],
});

export const HELLIONS = new VillainGroup({
  id: '2745b10a-fd6d-4d92-94ad-ee7c870876d3',
  name: 'Hellions',

  gameSet: META,
  keywords: [MOONLIGHT_AND_SUNLIGHT, WAKING_NIGHTMARE],
});
