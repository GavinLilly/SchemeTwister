import { gameSetTest } from '@schemetwister/libtwister/testing';

import { GAME_SET } from './villains.gameset';

gameSetTest(GAME_SET, 5, 15, 7, 4, 4, 8);
