import { GameSet } from '@schemetwister/libtwister';

import * as heroes from './weaponX.heroes';
import * as masterminds from './weaponX.masterminds';
import { META } from './weaponX.meta';
import * as schemes from './weaponX.schemes';
import * as villains from './weaponX.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(heroes),
  Object.values(masterminds),
  Object.values(schemes),
  Object.values(villains),
  undefined
);
