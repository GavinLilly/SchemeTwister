import { GameSet } from '../../../model';

import * as Heroes from './midnightSons.heroes';
import * as Masterminds from './midnightSons.masterminds';
import { META } from './midnightSons.meta';
import * as Schemes from './midnightSons.schemes';
import * as Villains from './midnightSons.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
