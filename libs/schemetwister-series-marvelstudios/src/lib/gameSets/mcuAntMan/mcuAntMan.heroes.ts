import { Hero } from '@schemetwister/libtwister';
import {
  AVENGERS,
  CRIME_SYNDICATE,
  MICROSCOPIC_SIZE_CHANGING,
  SIZE_CHANGING,
} from '@schemetwister/schemetwister-series-marvel-common';

import { CONQUEROR } from '../../../../../schemetwister-series-marvel-common/src/lib/keywords/conqueror.keyword';

import { ANTICS, EXPLORE, HEIST } from './mcuAntMan.keywords';
import { META } from './mcuAntMan.meta';

export const ANT_MAN_SCOTT_LANG = new Hero({
  id: '19a7dfde-5992-47b3-a2d0-668fc661b8a1',
  name: 'Ant-Man (Scott Lang)',
  team: AVENGERS,
  gameSet: META,
  keywords: [SIZE_CHANGING, MICROSCOPIC_SIZE_CHANGING, ANTICS, HEIST],
});

export const WASP = new Hero({
  id: 'cda5a631-8dc9-428e-833b-74f11bdd7272',
  name: 'Wasp',
  team: AVENGERS,
  gameSet: META,
  keywords: [SIZE_CHANGING, MICROSCOPIC_SIZE_CHANGING],
});

export const CASSIE_LANG = new Hero({
  id: '38fb52d9-6519-48bb-a28e-42bc71b1f9f6',
  name: 'Cassie Lang',
  team: AVENGERS,
  gameSet: META,
  keywords: [SIZE_CHANGING, MICROSCOPIC_SIZE_CHANGING],
});

export const SCOTT_LANG_CAT_BURGLAR = new Hero({
  id: '69882ed1-a6d7-4769-b6c4-be5e020e163c',
  name: 'Scott Lang, Cat Burglar',
  team: CRIME_SYNDICATE,
  gameSet: META,
  keywords: [HEIST],
});

export const JANET_VAN_DYNE = new Hero({
  id: '48c52563-8270-4720-8ff8-3124c55c0aa4',
  name: 'Janet van Dyne',
  gameSet: META,
  keywords: [MICROSCOPIC_SIZE_CHANGING, EXPLORE],
});

export const FREEDOM_FIGHTERS = new Hero({
  id: '35864b21-6206-4891-ab74-85de4dfa93a0',
  name: 'Freedom Fighters',
  gameSet: META,
  keywords: [CONQUEROR, EXPLORE],
});

export const JENTORRA = new Hero({
  id: '51a1a04f-32d2-496e-92ba-10f5e1163cb5',
  name: 'Jentorra',
  gameSet: META,
  keywords: [CONQUEROR, EXPLORE],
});

export const ANT_ARMY = new Hero({
  id: '0ad7b6e1-0e3b-42c6-913b-9d91edbfdfca',
  name: 'Ant Army',
  gameSet: META,
  keywords: [HEIST, SIZE_CHANGING, ANTICS, MICROSCOPIC_SIZE_CHANGING],
});
