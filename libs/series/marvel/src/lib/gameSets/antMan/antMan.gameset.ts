import { GameSet } from '@schemetwister/libtwister';

import * as Heroes from './antMan.heroes';
import * as Masterminds from './antMan.masterminds';
import { META } from './antMan.meta';
import * as Schemes from './antMan.schemes';
import * as Villains from './antMan.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
