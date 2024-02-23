import { GameSet } from '@schemetwister/libtwister';

import * as Bystanders from './whatIf.bystanders';
import * as Henchmen from './whatIf.henchmen';
import * as Heroes from './whatIf.heroes';
import * as Masterminds from './whatIf.masterminds';
import { META } from './whatIf.meta';
import * as Schemes from './whatIf.schemes';
import * as Villains from './whatIf.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
