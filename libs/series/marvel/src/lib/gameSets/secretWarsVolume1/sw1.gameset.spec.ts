import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './sw1.gameset';

testGameSet({
  gameSet,
  numBystanders: 1,
  numHeroes: 14,
  numVillains: 6,
  numHenchmen: 3,
  numMasterminds: 4,
  numSchemes: 8,
});
