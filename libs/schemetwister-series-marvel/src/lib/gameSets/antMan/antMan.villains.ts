import { VillainGroup } from '@schemetwister/libtwister';

import {
  CHIVALROUS_DUEL,
  EMPOWERED,
  MICROSCOPIC_SIZE_CHANGING,
  SIZE_CHANGING,
} from './antMan.keywords';
import { META } from './antMan.meta';

export const ULTRONS_LEGACY = new VillainGroup({
  id: 'ac9173ae-138c-41ca-a4c8-945d1e09ffcd',
  name: "Ultron's Legacy",

  gameSet: META,
  keywords: [MICROSCOPIC_SIZE_CHANGING, SIZE_CHANGING, EMPOWERED],
});

export const QUEENS_VENGEANCE = new VillainGroup({
  id: 'cd0cfd2c-6b04-4385-bee1-573ee311af17',
  name: "Queen's Vengeance",

  gameSet: META,
  keywords: [MICROSCOPIC_SIZE_CHANGING, CHIVALROUS_DUEL],
});
