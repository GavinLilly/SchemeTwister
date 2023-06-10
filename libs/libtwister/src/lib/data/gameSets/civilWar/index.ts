import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './bystanders';
import * as Henchmen from './civilWar.henchmen';
import * as Heroes from './civilWar.heroes';
import * as Masterminds from './civilWar.masterminds';
import { META } from './civilWar.meta';
import * as Schemes from './civilWar.schemes';
import * as Villains from './civilWar.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, Henchmen, schemes, Masterminds, Villains, Bystanders };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
