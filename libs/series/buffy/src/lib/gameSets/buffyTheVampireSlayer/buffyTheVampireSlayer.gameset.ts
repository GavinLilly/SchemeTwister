import { GameSet } from '@schemetwister/libtwister';

import * as bystanders from './buffyTheVampireSlayer.bystanders';
import * as henchmen from './buffyTheVampireSlayer.henchmen';
import * as heroes from './buffyTheVampireSlayer.heroes';
import * as masterminds from './buffyTheVampireSlayer.masterminds';
import { META } from './buffyTheVampireSlayer.meta';
import * as schemes from './buffyTheVampireSlayer.schemes';
import * as villains from './buffyTheVampireSlayer.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(heroes),
  Object.values(masterminds),
  Object.values(schemes),
  Object.values(villains),
  Object.values(henchmen),
  Object.values(bystanders)
);
