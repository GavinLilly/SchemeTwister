import { VillainGroup } from '../../../model';

import {
  CELESTIAL_BOONS,
  CONTEST_OF_CHAMPIONS,
  COSMIC_THREAT,
  DANGER_SENSE_ON_VILLAINS,
  SHARDS,
} from './intoTheCosmos.keywords';
import { META } from './intoTheCosmos.meta';

export const ELDERS_OF_THE_UNIVERSE = new VillainGroup({
  id: 'cbf60874-654b-463f-8278-a19950b8e832',
  name: 'Elders of the Universe',

  gameSet: META,
  keywords: [SHARDS, CONTEST_OF_CHAMPIONS],
});

export const CELESTIALS = new VillainGroup({
  id: '764fb512-9c83-498a-a68e-8abfa9961e9e',
  name: 'Celestials',

  gameSet: META,
  keywords: [SHARDS, CELESTIAL_BOONS, COSMIC_THREAT],
});

export const FROM_BEYOND = new VillainGroup({
  id: '1b1edcd2-b7cc-42dc-9dad-5912de02b4b1',
  name: 'From Beyond',

  gameSet: META,
  keywords: [COSMIC_THREAT, COSMIC_THREAT],
});

export const BLACK_ORDER_OF_THANOS = new VillainGroup({
  id: 'aabe7d0a-5f84-4ffc-8d25-8d4e711a5d46',
  name: 'Black Order of Thanos',

  gameSet: META,
  keywords: [DANGER_SENSE_ON_VILLAINS],
});
