import { GameSet } from '../../../model';

import * as Bystanders from './mcuAntMan.bystanders';
import * as Henchmen from './mcuAntMan.henchmen';
import * as Heroes from './mcuAntMan.heroes';
import * as Masterminds from './mcuAntMan.masterminds';
import { META } from './mcuAntMan.meta';
import * as Schemes from './mcuAntMan.schemes';
import * as Villains from './mcuAntMan.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
