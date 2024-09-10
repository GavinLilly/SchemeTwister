import { GameSet } from '@schemetwister/libtwister';

import * as heroes from './2099.heroes';
import * as masterminds from './2099.masterminds';
import { META } from './2099.meta';
import * as schemes from './2099.schemes';
import * as villains from './2099.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(heroes),
  Object.values(masterminds),
  Object.values(schemes),
  Object.values(villains)
);
