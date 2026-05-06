import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './sw2.gameset';

testGameSet({
  gameSet,
  numBystanders: 3,
  numHeroes: 16,
  numVillains: 6,
  numHenchmen: 3,
  numMasterminds: 4,
  numSchemes: 8,
});
