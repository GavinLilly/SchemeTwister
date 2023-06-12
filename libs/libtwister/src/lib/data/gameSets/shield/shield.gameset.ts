import { GameSet } from '../../../model';

import * as Heroes from './shield.heroes';
import * as Masterminds from './shield.masterminds';
import { META } from './shield.meta';
import * as Schemes from './shield.schemes';
import * as Villains from './shield.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
