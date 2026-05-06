import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './intoTheCosmos.gameset';

testGameSet({
  gameSet,
  numBystanders: 3,
  numHeroes: 9,
  numVillains: 4,
  numHenchmen: 2,
  numMasterminds: 3,
  numSchemes: 4,
});
