import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './shield.gameset';

testGameSet({
  gameSet,
  numHeroes: 4,
  numVillains: 2,
  numMasterminds: 2,
  numSchemes: 4,
});
