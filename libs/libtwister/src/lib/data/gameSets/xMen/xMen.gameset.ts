import { GameSet } from '../../../model';

import * as Bystanders from './xMen.bystanders';
import * as Henchmen from './xMen.henchmen';
import * as Heroes from './xMen.heroes';
import * as Masterminds from './xMen.masterminds';
import { META } from './xMen.meta';
import * as Schemes from './xMen.schemes';
import * as Villains from './xMen.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
