import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './civilWar.gameset';

testGameSet({
  gameSet,
  numBystanders: 2,
  numHeroes: 16,
  numVillains: 7,
  numHenchmen: 2,
  numMasterminds: 5,
  numSchemes: 8,
});
