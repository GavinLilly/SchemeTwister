import { GameSet } from '@schemetwister/libtwister';

import * as Heroes from './mcuGuardiansOfTheGalaxy.heroes';
import * as Masterminds from './mcuGuardiansOfTheGalaxy.masterminds';
import { META } from './mcuGuardiansOfTheGalaxy.meta';
import * as Schemes from './mcuGuardiansOfTheGalaxy.schemes';
import * as Villains from './mcuGuardiansOfTheGalaxy.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
