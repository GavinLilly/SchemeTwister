import { GameSet } from '../../../model';

import * as Heroes from './theNewMutants.heroes';
import * as Masterminds from './theNewMutants.masterminds';
import { META } from './theNewMutants.meta';
import * as Schemes from './theNewMutants.schemes';
import * as Villains from './theNewMutants.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
