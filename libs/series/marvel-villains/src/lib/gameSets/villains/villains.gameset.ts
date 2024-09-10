import { GameSet } from '@schemetwister/libtwister';

import * as Bystanders from './villains.bystanders';
import * as Henchmen from './villains.henchmen';
import * as Heroes from './villains.heroes';
import * as Masterminds from './villains.masterminds';
import { META } from './villains.meta';
import * as Schemes from './villains.schemes';
import * as Villains from './villains.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
