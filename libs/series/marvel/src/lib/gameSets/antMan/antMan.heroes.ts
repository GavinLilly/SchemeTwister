import { Hero } from '@schemetwister/libtwister';
import {
  AVENGERS,
  EMPOWERED,
  MICROSCOPIC_SIZE_CHANGING,
  SIZE_CHANGING,
} from '@schemetwister/schemetwister-series-marvel-common';

import { META } from './antMan.meta';

export const ANT_MAN = new Hero({
  id: '159f7a3b-6440-4acc-8601-23badb411a90',
  name: 'Ant-Man',
  team: AVENGERS,

  gameSet: META,
  keywords: [SIZE_CHANGING, MICROSCOPIC_SIZE_CHANGING],
});

export const WASP = new Hero({
  id: '6980d717-aa7a-44d0-9274-5acce19faee0',
  name: 'Wasp',
  team: AVENGERS,

  gameSet: META,
  keywords: [SIZE_CHANGING, MICROSCOPIC_SIZE_CHANGING],
});

export const JOCASTA = new Hero({
  id: '31bc3cd5-d405-42b6-80b9-00f91deb1d95',
  name: 'Jocasta',
  team: AVENGERS,

  gameSet: META,
  keywords: [SIZE_CHANGING, EMPOWERED],
});

export const WONDER_MAN = new Hero({
  id: 'df842c13-b058-408b-a9b8-88290cfa784b',
  name: 'Wonder Man',
  team: AVENGERS,

  gameSet: META,
  keywords: [SIZE_CHANGING, EMPOWERED],
});

export const BLACK_KNIGHT = new Hero({
  id: 'e50c070f-739c-4d2d-9e35-632665ba22c2',
  name: 'Black Knight',
  team: AVENGERS,

  gameSet: META,
  keywords: [EMPOWERED],
});
