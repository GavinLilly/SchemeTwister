import { VillainGroup } from '../../../model';
import { VILLAINOUS_WEAPONS } from '../heroesOfAsgard/heroesOfAsgard.keywords';

import {
  COMMAND,
  TRIGGERED_ARTIFACTS,
} from './mcuGuardiansOfTheGalaxy.keywords';
import { META } from './mcuGuardiansOfTheGalaxy.meta';

export const FOLLOWERS_OF_RONAN = new VillainGroup({
  id: '516413ba-1e1c-4d76-bdda-3b6eee1e16d0',
  name: 'Followers of Ronan',

  gameSet: META,
  keywords: [COMMAND, VILLAINOUS_WEAPONS],
});

export const RAVAGERS = new VillainGroup({
  id: '899ad45d-7915-4a3e-98cf-2d23a0992180',
  name: 'Ravagers',

  gameSet: META,
  keywords: [COMMAND, VILLAINOUS_WEAPONS, TRIGGERED_ARTIFACTS],
});
