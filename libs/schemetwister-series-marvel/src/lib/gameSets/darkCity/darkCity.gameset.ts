import { GameSet } from '@schemetwister/libtwister';

import * as Bystanders from './darkCity.bystanders';
import * as Henchmen from './darkCity.henchmen';
import * as Heroes from './darkCity.heroes';
import * as Masterminds from './darkCity.masterminds';
import { META } from './darkCity.meta';
import * as Schemes from './darkCity.schemes';
import * as Villains from './darkCity.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
