import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './legendary.gameset';

testGameSet({
  gameSet,
  numBystanders: 1,
  numHeroes: 15,
  numVillains: 7,
  numHenchmen: 4,
  numMasterminds: 4,
  numSchemes: 8,
});
