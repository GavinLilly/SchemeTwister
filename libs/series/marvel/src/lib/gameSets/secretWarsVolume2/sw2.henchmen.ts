import { Henchmen } from '@schemetwister/libtwister';
import { WALL_CRAWL } from '@schemetwister/series-marvel-common';

import { FATEFUL_RESURRECTION } from './sw2.keywords';
import { META } from './sw2.meta';

export const KHONSHU_GUARDIANS = new Henchmen({
  id: 'a425e8d9-8f87-4111-bd68-a50a73904cd3',
  name: 'Khonshu Guardians',
  attackPoints: '3',
  victoryPoints: 1,
  gameSet: META,
  fight: 'KO one of your Heroes.',
});

export const MAGMA_MEN = new Henchmen({
  id: 'fbd43c0f-b168-439b-908e-876a9e68ac07',
  name: 'Magma Men',
  attackPoints: '3',
  victoryPoints: 1,
  gameSet: META,
  fight: 'KO one of your Heroes.',
  keywords: [FATEFUL_RESURRECTION],
});

export const SPIDERINFECTED = new Henchmen({
  id: '905b8f21-2c2d-446d-b4d4-068071b823bc',
  name: 'Spider-Infected',
  attackPoints: '3',
  victoryPoints: 1,
  gameSet: META,
  fight: 'The next Hero you gain this turn has Wall-Crawl',
  keywords: [WALL_CRAWL],
});
