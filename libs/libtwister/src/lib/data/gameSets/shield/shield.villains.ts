import { VillainGroup } from '../../../model';

import { HYDRA_LEVEL, UNDERCOVER } from './keywords';
import { META } from './meta';

export const HYDRA_ELITE = new VillainGroup({
  id: '4f17b2bc-e761-4684-b7c0-65b381f036d5',
  name: 'Hydra Elite',

  gameSet: META,
  keywords: [HYDRA_LEVEL],
});

export const AIM_HYDRA_OFFSHOOT = new VillainGroup({
  id: '64a7baad-a562-4154-ba45-da13159142de',
  name: 'A.I.M., Hydra Offshoot',

  gameSet: META,
  keywords: [UNDERCOVER, HYDRA_LEVEL],
});
