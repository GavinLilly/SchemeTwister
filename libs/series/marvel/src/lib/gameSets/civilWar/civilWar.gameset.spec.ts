import { gameSetTest } from '@schemetwister/libtwister/testing';

import { GAME_SET } from './civilWar.gameset';

gameSetTest(GAME_SET, 2, 16, 7, 2, 5, 8);
