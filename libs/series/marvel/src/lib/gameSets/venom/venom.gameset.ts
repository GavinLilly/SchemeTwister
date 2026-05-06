import { GameSet } from '@schemetwister/libtwister';

import * as Heroes from './venom.heroes';
import * as Masterminds from './venom.masterminds';
import { META } from './venom.meta';
import * as Schemes from './venom.schemes';
import * as Villains from './venom.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
