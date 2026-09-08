import { createMockGamesetMeta } from '../mocks/mockUtils';
import { GAME_SET_SIZE, GameSet } from '../model';

import { TEST_BYSTANDER_1, TEST_BYSTANDER_AS_HERO } from './bystanders';
import { TEST_HENCHMEN_1, TEST_HENCHMEN_2, TEST_HENCHMEN_3 } from './henchmen';
import {
  TEST_HERO_1,
  TEST_HERO_2,
  TEST_HERO_3,
  TEST_HERO_4,
  TEST_HERO_5,
  TEST_HERO_6,
  TEST_HERO_7,
  TEST_HERO_8,
  TEST_HERO_9,
} from './heroes';
import { TEST_MASTERMIND_1 } from './masterminds';
import { TEST_NORMAL_SCHEME } from './schemes';
import {
  TEST_VILLAIN_1,
  TEST_VILLAIN_2,
  TEST_VILLAIN_3,
  TEST_VILLAIN_4,
  TEST_VILLAIN_5,
} from './villains';

export const TEST_GAME_SET_META_1 = createMockGamesetMeta(
  undefined,
  GAME_SET_SIZE.core
);

export const TEST_GAME_SET_1 = new GameSet(
  TEST_GAME_SET_META_1,
  [
    TEST_HERO_1,
    TEST_HERO_2,
    TEST_HERO_3,
    TEST_HERO_4,
    TEST_HERO_8,
    TEST_HERO_9,
  ],
  [TEST_MASTERMIND_1],
  [TEST_NORMAL_SCHEME],
  [TEST_VILLAIN_1, TEST_VILLAIN_2, TEST_VILLAIN_3, TEST_VILLAIN_4],
  [TEST_HENCHMEN_1, TEST_HENCHMEN_2, TEST_HENCHMEN_3],
  [TEST_BYSTANDER_1, TEST_BYSTANDER_AS_HERO]
);

export const TEST_GAME_SET_META_2 = createMockGamesetMeta(
  undefined,
  GAME_SET_SIZE.large
);

export const TEST_GAME_SET_2 = new GameSet(
  TEST_GAME_SET_META_2,
  [TEST_HERO_5, TEST_HERO_6, TEST_HERO_7],
  undefined,
  undefined,
  [TEST_VILLAIN_5]
);
