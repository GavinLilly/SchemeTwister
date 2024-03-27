import { GameSet } from '@schemetwister/libtwister';

import * as Heroes from './blackWidow.heroes';
import * as Masterminds from './blackWidow.masterminds';
import { META } from './blackWidow.meta';
import * as Schemes from './blackWidow.schemes';
import * as Villains from './blackWidow.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
