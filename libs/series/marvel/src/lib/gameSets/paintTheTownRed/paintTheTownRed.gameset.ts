import { GameSet } from '@schemetwister/libtwister';

import * as Heroes from './paintTheTownRed.heroes';
import * as Masterminds from './paintTheTownRed.masterminds';
import { META } from './paintTheTownRed.meta';
import * as Schemes from './paintTheTownRed.schemes';
import * as Villains from './paintTheTownRed.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
