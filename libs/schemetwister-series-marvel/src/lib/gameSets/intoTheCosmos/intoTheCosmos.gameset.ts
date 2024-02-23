import { GameSet } from '@schemetwister/libtwister';

import * as Bystanders from './intoTheCosmos.bystanders';
import * as Henchmen from './intoTheCosmos.henchmen';
import * as Heroes from './intoTheCosmos.heroes';
import * as Masterminds from './intoTheCosmos.masterminds';
import { META } from './intoTheCosmos.meta';
import * as Schemes from './intoTheCosmos.schemes';
import * as Villains from './intoTheCosmos.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
