import { GameSet } from '@schemetwister/libtwister';

import * as Heroes from './mcuInfinitySaga.heroes';
import * as Masterminds from './mcuInfinitySaga.masterminds';
import { META } from './mcuInfinitySaga.meta';
import * as Schemes from './mcuInfinitySaga.schemes';
import * as Villains from './mcuInfinitySaga.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
