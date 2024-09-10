import { GameSet } from '@schemetwister/libtwister';

import * as Heroes from './champions.heroes';
import * as Masterminds from './champions.masterminds';
import { META } from './champions.meta';
import * as Schemes from './champions.schemes';
import * as Villains from './champions.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
