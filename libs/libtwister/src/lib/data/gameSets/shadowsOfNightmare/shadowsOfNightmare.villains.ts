import { VillainGroup } from '../../../model';

import { ASTRAL_PLANE, DEMONIC_BARGAIN } from './shadowsOfNightmare.keywords';
import { META } from './shadowsOfNightmare.meta';

export const LORDS_OF_NETHERWORLD = new VillainGroup({
  id: 'f356c475-f6ac-47a4-bf52-d7ccc813f89d',
  name: 'Lords of the Netherworld',

  gameSet: META,
  keywords: [DEMONIC_BARGAIN],
});

export const FEAR_LORDS = new VillainGroup({
  id: '436d1a17-0888-46a0-8dce-2766d4ede478',
  name: 'Fear Lords',

  gameSet: META,
  keywords: [ASTRAL_PLANE],
});
