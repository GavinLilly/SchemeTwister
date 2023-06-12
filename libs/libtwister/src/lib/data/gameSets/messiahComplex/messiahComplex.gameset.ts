import { GameSet } from '../../../model';

import * as Bystanders from './messiahComplex.bystanders';
import * as Henchmen from './messiahComplex.henchmen';
import * as Heroes from './messiahComplex.heroes';
import * as Masterminds from './messiahComplex.masterminds';
import { META } from './messiahComplex.meta';
import * as Schemes from './messiahComplex.schemes';
import * as Villains from './messiahComplex.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
