import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './marvelStudios.gameset';

testGameSet({
  gameSet,
  numBystanders: 5,
  numHeroes: 7,
  numVillains: 5,
  numHenchmen: 4,
  numMasterminds: 3,
  numSchemes: 8,
});
