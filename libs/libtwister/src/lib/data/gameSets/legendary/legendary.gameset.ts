import { GameSet } from '../../../model';

import * as Bystanders from './legendary.bystanders';
import * as Henchmen from './legendary.henchmen';
import * as Heroes from './legendary.heroes';
import * as Masterminds from './legendary.masterminds';
import { META } from './legendary.meta';
import * as Schemes from './legendary.schemes';
import * as Villains from './legendary.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
