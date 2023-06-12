import { GameSet } from '../../../model';

import * as Bystanders from './dimensions.bystanders';
import * as Henchmen from './dimensions.henchmen';
import * as Heroes from './dimensions.heroes';
import * as Masterminds from './dimensions.masterminds';
import { META } from './dimensions.meta';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  undefined,
  undefined,
  Object.values(Henchmen),
  Object.values(Bystanders)
);
