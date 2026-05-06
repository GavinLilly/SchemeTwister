import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './mcuAntMan.gameset';

testGameSet({
  gameSet,
  numBystanders: 4,
  numHeroes: 8,
  numVillains: 4,
  numHenchmen: 1,
  numMasterminds: 3,
  numSchemes: 4,
});
