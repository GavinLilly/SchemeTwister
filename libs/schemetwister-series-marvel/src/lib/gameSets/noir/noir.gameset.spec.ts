import { gameSetTest } from '@schemetwister/libtwister/testing';

import { GAME_SET } from './noir.gameset';

gameSetTest(GAME_SET, 1, 5, 2, 0, 2, 4);
