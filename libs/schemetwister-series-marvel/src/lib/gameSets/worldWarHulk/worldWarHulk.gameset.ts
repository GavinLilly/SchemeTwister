import { GameSet } from '@schemetwister/libtwister';

import * as Bystanders from './worldWarHulk.bystanders';
import * as Henchmen from './worldWarHulk.henchmen';
import * as Heroes from './worldWarHulk.heroes';
import * as Masterminds from './worldWarHulk.masterminds';
import { META } from './worldWarHulk.meta';
import * as Schemes from './worldWarHulk.schemes';
import * as Villains from './worldWarHulk.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
