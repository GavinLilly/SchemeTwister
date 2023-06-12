import { GameSet } from '../../../model';

import * as Heroes from './annihilation.heroes';
import * as Masterminds from './annihilation.masterminds';
import { META } from './annihilation.meta';
import * as Schemes from './annihilation.schemes';
import * as Villains from './annihilation.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
