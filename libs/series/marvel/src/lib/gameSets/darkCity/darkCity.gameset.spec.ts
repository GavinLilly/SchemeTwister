import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './darkCity.gameset';

testGameSet({
  gameSet,
  numBystanders: 3,
  numHeroes: 17,
  numVillains: 6,
  numHenchmen: 2,
  numMasterminds: 5,
  numSchemes: 8,
});
