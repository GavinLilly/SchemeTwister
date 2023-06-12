import { GameSet } from '../../../model';

import * as Bystanders from './civilWar.bystanders';
import * as Henchmen from './civilWar.henchmen';
import * as Heroes from './civilWar.heroes';
import * as Masterminds from './civilWar.masterminds';
import { META } from './civilWar.meta';
import * as Schemes from './civilWar.schemes';
import * as Villains from './civilWar.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
