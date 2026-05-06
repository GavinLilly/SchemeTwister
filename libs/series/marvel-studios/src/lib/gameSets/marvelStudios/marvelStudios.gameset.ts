import { GameSet } from '@schemetwister/libtwister';

import * as Bystanders from './marvelStudios.bystanders';
import * as Henchmen from './marvelStudios.henchmen';
import * as Heroes from './marvelStudios.heroes';
import * as Masterminds from './marvelStudios.masterminds';
import { META } from './marvelStudios.meta';
import * as Schemes from './marvelStudios.schemes';
import * as Villains from './marvelStudios.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
