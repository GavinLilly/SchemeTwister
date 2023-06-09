import { VillainGroup } from '../../../model';

import { DARK_MEMORIES, LAST_STAND, LOCATIONS } from './keywords';
import { META } from './meta';

export const ARMY_OF_EVIL = new VillainGroup({
  id: '31b33d1d-befb-44ea-9b0b-72d613ce37af',
  name: 'Army of Evil',

  gameSet: META,
  keywords: [LOCATIONS],
});

export const DARK_AVENGERS = new VillainGroup({
  id: 'd41732e9-2c54-4ef1-963f-0600f14fa810',
  name: 'Dark Avengers',

  gameSet: META,
  keywords: [LAST_STAND, LOCATIONS],
});

export const HOODS_GANG = new VillainGroup({
  id: '0508ea56-82a2-48ea-bffa-722a6d86ef07',
  name: "Hood's Gang",

  gameSet: META,
  keywords: [DARK_MEMORIES, LOCATIONS],
});

export const LETHAL_LEGION = new VillainGroup({
  id: 'b8f4dcec-15d8-4d95-8cc9-a6701a6aad7d',
  name: 'Lethal Legion',

  gameSet: META,
  keywords: [LOCATIONS],
});
