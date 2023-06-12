import { GameSet } from '../../../model';

import * as Heroes from './fearItself.heroes';
import * as Masterminds from './fearItself.masterminds';
import { META } from './fearItself.meta';
import * as Schemes from './fearItself.schemes';
import * as Villains from './fearItself.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
