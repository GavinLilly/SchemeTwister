import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './dimensions.gameset';

testGameSet({
  gameSet,
  numBystanders: 5,
  numHeroes: 5,
  numHenchmen: 2,
  numMasterminds: 1,
});
