import { GameSet } from '@schemetwister/libtwister';

import * as Heroes from './blackPanther.heroes';
import * as Masterminds from './blackPanther.masterminds';
import { META } from './blackPanther.meta';
import * as Schemes from './blackPanther.schemes';
import * as Villains from './blackPanther.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
