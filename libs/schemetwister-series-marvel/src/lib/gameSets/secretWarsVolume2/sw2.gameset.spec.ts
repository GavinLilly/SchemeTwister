import { gameSetTest } from '@schemetwister/libtwister/testing';

import { GAME_SET } from './sw2.gameset';

gameSetTest(GAME_SET, 3, 16, 6, 3, 4, 8);
