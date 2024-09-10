import { GameSet } from '@schemetwister/libtwister';

import * as Bystanders from './noir.bystanders';
import * as Heroes from './noir.heroes';
import * as Masterminds from './noir.masterminds';
import { META } from './noir.meta';
import * as Schemes from './noir.schemes';
import * as Villains from './noir.villains';

export const GAME_SET = new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains),
  undefined,
  Object.values(Bystanders)
);
