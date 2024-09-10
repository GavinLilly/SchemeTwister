import { GameSet } from '@schemetwister/libtwister';

import * as Heroes from './captainAmerica.heroes';
import * as Masterminds from './captainAmerica.masterminds';
import { META } from './captainAmerica.meta';
import * as Schemes from './captainAmerica.schemes';
import * as Villains from './captainAmerica.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
