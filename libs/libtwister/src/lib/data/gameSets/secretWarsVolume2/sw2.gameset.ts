import { GameSet } from '../../../model';

import * as Bystanders from './sw2.bystanders';
import * as Henchmen from './sw2.henchmen';
import * as Heroes from './sw2.heroes';
import * as Masterminds from './sw2.masterminds';
import { META } from './sw2.meta';
import * as Schemes from './sw2.schemes';
import * as Villains from './sw2.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
