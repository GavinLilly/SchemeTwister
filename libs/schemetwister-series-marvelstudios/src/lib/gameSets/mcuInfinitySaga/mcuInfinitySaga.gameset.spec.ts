import { gameSetTest } from '@schemetwister/libtwister/testing';

import { GAME_SET } from './mcuInfinitySaga.gameset';

gameSetTest(GAME_SET, 0, 5, 2, 0, 2, 4);
