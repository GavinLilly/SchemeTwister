import { testGameSet } from '@schemetwister/libtwister/testing';

import { GAME_SET as gameSet } from './noir.gameset';

testGameSet({
  gameSet,
  numBystanders: 1,
  numHeroes: 5,
  numVillains: 2,
  numMasterminds: 2,
  numSchemes: 4,
});
