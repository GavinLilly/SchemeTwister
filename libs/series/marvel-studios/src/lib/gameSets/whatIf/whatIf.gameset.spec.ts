import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './whatIf.gameset';

testGameSet({
  gameSet,
  numBystanders: 6,
  numHeroes: 8,
  numVillains: 5,
  numHenchmen: 3,
  numMasterminds: 4,
  numSchemes: 4,
});
