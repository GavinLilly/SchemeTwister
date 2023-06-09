import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './bystanders';
import * as Heroes from './champions.heroes';
import * as Masterminds from './civilWar.masterminds';
import * as Villains from './civilWar.villains';
import * as Henchmen from './henchmen';
import { META } from './meta';
import * as Schemes from './schemes';

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
