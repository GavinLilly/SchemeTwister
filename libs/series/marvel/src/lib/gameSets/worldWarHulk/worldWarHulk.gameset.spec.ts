import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './worldWarHulk.gameset';

testGameSet({
  gameSet,
  numBystanders: 4,
  numHeroes: 15,
  numVillains: 7,
  numHenchmen: 3,
  numMasterminds: 6,
  numSchemes: 8,
});
