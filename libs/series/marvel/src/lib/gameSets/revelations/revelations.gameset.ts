import { GameSet } from '@schemetwister/libtwister';

import * as Bystanders from './revelations.bystanders';
import * as Henchmen from './revelations.henchmen';
import * as Heroes from './revelations.heroes';
import * as Masterminds from './revelations.masterminds';
import { META } from './revelations.meta';
import * as Schemes from './revelations.schemes';
import * as Villains from './revelations.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
