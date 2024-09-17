import { Hero } from '@schemetwister/libtwister';
import { AVENGERS, SHIELD } from '@schemetwister/series-marvel-common';

import { MAN_OUT_OF_TIME, SAVIOR } from './captainAmerica.keywords';
import { META } from './captainAmerica.meta';

export const AGENT_X13 = new Hero({
  id: '46c091cc-92aa-4424-aa0b-8cbb84d6799b',
  name: 'Agent X-13',
  team: SHIELD,
  gameSet: META,
  keywords: [MAN_OUT_OF_TIME, SAVIOR],
});
export const CAPTAIN_AMERICA_FALCON = new Hero({
  id: '832b22ec-9e68-462b-9635-54f9ece643e4',
  name: 'Captain America (Falcon)',
  team: AVENGERS,
  gameSet: META,
  keywords: [SAVIOR],
});
export const CAPTAIN_AMERICA_1941 = new Hero({
  id: '3a15a735-db28-4a83-be68-56bbb28bee96',
  name: 'Captain America 1941',
  team: AVENGERS,
  gameSet: META,
  keywords: [MAN_OUT_OF_TIME, SAVIOR],
});
export const STEVE_ROGERS_DIRECTOR_OF_SHIELD = new Hero({
  id: 'b31e1b13-5a0a-48ed-a5e9-3f4d1d19c578',
  name: 'Steve Rogers, Director of S.H.I.E.L.D.',
  team: SHIELD,
  gameSet: META,
  keywords: [MAN_OUT_OF_TIME, SAVIOR],
});
export const WINTER_SOLDIER = new Hero({
  id: 'd0ec44f1-e1be-426f-9817-6077e10779e8',
  name: 'Winter Soldier',
  gameSet: META,
  keywords: [MAN_OUT_OF_TIME],
});
