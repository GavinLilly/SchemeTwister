import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './villains.gameset';

testGameSet({
  gameSet,
  numBystanders: 5,
  numHeroes: 15,
  numVillains: 7,
  numHenchmen: 4,
  numMasterminds: 4,
  numSchemes: 8,
});
