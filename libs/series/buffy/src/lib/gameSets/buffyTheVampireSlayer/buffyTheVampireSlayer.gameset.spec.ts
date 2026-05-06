import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './buffyTheVampireSlayer.gameset';

testGameSet({
  gameSet,
  numBystanders: 6,
  numHeroes: 15,
  numVillains: 7,
  numHenchmen: 5,
  numMasterminds: 5,
  numSchemes: 8,
});
