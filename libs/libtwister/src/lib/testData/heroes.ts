import { Hero } from '../model';

import { TEST_GAME_SET_META_1, TEST_GAME_SET_META_2 } from './gameSets';
import { TEST_TEAM_1 } from './teams';

export const TEST_HERO_1 = new Hero({
  id: 'e9cb4c82-c10d-4515-b536-14d064184760',
  name: 'Test hero 1',
  gameSet: TEST_GAME_SET_META_1,
  team: TEST_TEAM_1,
});

export const TEST_HERO_2 = new Hero({
  id: '9c5c8eb2-fb29-487b-adfc-65cceae254b2',
  name: 'Test hero 2',
  gameSet: TEST_GAME_SET_META_1,
  team: TEST_TEAM_1,
});

export const TEST_HERO_3 = new Hero({
  id: 'aefc7ea0-f2f4-463b-982c-0d55810ba124',
  name: 'Test hero 3',
  gameSet: TEST_GAME_SET_META_1,
  team: TEST_TEAM_1,
});

export const TEST_HERO_4 = new Hero({
  id: '92d58acc-ef87-4eb5-b844-c838e4d6c01d',
  name: 'Test hero 4',
  gameSet: TEST_GAME_SET_META_1,
});

export const TEST_HERO_8 = new Hero({
  id: 'f3693146-1471-48dd-addc-d8dd502d7956',
  name: 'Test hero 8 - Moo',
  gameSet: TEST_GAME_SET_META_1,
});

export const TEST_HERO_9 = new Hero({
  id: '2e0abba0-e7b9-4b11-b3fd-472473caa10a',
  name: 'Test hero 9 - Moo',
  gameSet: TEST_GAME_SET_META_1,
});

export const TEST_HERO_5 = new Hero({
  id: '75c20ad8-0d08-4688-801d-7e5e660f1641',
  name: 'Test hero 5 - Foo',
  gameSet: TEST_GAME_SET_META_2,
});

export const TEST_HERO_6 = new Hero({
  id: 'bc59c384-c680-41e8-9ea5-3220f848ddd6',
  name: 'Test hero 6 - Bar',
  gameSet: TEST_GAME_SET_META_2,
});

export const TEST_HERO_7 = new Hero({
  id: '310a8595-8da2-4c32-a47b-a1a692452607',
  name: 'Test hero 7 - Baz',
  gameSet: TEST_GAME_SET_META_2,
});
