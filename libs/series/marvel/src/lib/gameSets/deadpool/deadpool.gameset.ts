import { GameSet } from '@schemetwister/libtwister';

import * as Heroes from './deadpool.heroes';
import * as Masterminds from './deadpool.masterminds';
import { META } from './deadpool.meta';
import * as Schemes from './deadpool.schemes';
import * as Villains from './deadpool.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
