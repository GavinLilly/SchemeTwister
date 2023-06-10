import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './bystanders';
import * as Henchmen from './darkCity.henchmen';
import * as Heroes from './darkCity.heroes';
import * as Masterminds from './darkCity.masterminds';
import { META } from './darkCity.meta';
import * as Schemes from './darkCity.schemes';
import * as Villains from './darkCity.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, Henchmen, schemes, Masterminds, Bystanders, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
