import { GameSet } from '@schemetwister/libtwister';

import * as Heroes from './realmOfKings.heroes';
import * as Masterminds from './realmOfKings.masterminds';
import { META } from './realmOfKings.meta';
import * as Schemes from './realmOfKings.schemes';
import * as Villains from './realmOfKings.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
