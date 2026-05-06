import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './threeD.gameset';

testGameSet({
  gameSet,
  numBystanders: 5,
  numHeroes: 2,
  numHenchmen: 2,
});
