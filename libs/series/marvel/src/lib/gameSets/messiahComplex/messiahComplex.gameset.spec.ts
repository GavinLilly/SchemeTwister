import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './messiahComplex.gameset';

testGameSet({
  gameSet,
  numBystanders: 3,
  numHeroes: 8,
  numVillains: 4,
  numHenchmen: 2,
  numMasterminds: 3,
  numSchemes: 4,
});
