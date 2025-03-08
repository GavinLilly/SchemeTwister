import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './weaponX.gameset';

testGameSet({
  gameSet,
  numHeroes: 4,
  numVillains: 2,
  numMasterminds: 3,
  numSchemes: 3,
});
