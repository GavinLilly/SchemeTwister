import { GameSet } from '@schemetwister/libtwister';

import * as Heroes from './heroesOfAsgard.heroes';
import * as Masterminds from './heroesOfAsgard.masterminds';
import { META } from './heroesOfAsgard.meta';
import * as Schemes from './heroesOfAsgard.schemes';
import * as Villains from './heroesOfAsgard.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
