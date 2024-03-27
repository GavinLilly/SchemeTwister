import { GameSet } from '@schemetwister/libtwister';

import * as Heroes from './shadowsOfNightmare.heroes';
import * as Masterminds from './shadowsOfNightmare.masterminds';
import { META } from './shadowsOfNightmare.meta';
import * as Schemes from './shadowsOfNightmare.schemes';
import * as Villains from './shadowsOfNightmare.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
