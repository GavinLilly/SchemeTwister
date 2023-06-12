import { GameSet } from '../../../model';

import * as Bystanders from './spidermanHomecoming.bystanders';
import * as Heroes from './spidermanHomecoming.heroes';
import * as Masterminds from './spidermanHomecoming.masterminds';
import { META } from './spidermanHomecoming.meta';
import * as Schemes from './spidermanHomecoming.schemes';
import * as Villains from './spidermanHomecoming.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains),
  undefined,
  Object.values(Bystanders)
);
