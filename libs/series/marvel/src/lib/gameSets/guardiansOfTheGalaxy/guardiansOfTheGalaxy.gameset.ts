import { GameSet } from '@schemetwister/libtwister';

import * as Heroes from './guardiansOfTheGalaxy.heroes';
import * as Masterminds from './guardiansOfTheGalaxy.masterminds';
import { META } from './guardiansOfTheGalaxy.meta';
import * as Schemes from './guardiansOfTheGalaxy.schemes';
import * as Villains from './guardiansOfTheGalaxy.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
