import { GameSet } from '../../../model';

import * as Bystanders from './threeD.bystanders';
import * as Henchmen from './threeD.henchmen';
import * as Heroes from './threeD.heroes';
import { META } from './threeD.meta';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  undefined,
  undefined,
  undefined,
  Object.values(Henchmen),
  Object.values(Bystanders)
);
