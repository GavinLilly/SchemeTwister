import { GameSet } from '@schemetwister/libtwister';

import * as Heroes from './fantasticFour.heroes';
import * as Masterminds from './fantasticFour.masterminds';
import { META } from './fantasticFour.meta';
import * as Schemes from './fantasticFour.schemes';
import * as Villains from './fantasticFour.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
