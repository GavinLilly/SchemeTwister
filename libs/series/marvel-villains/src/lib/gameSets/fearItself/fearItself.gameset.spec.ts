import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './fearItself.gameset';

testGameSet({
  gameSet,
  numHeroes: 6,
  numVillains: 1,
  numMasterminds: 1,
  numSchemes: 3,
});
