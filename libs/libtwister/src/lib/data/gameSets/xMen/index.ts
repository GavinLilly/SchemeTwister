import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './xMen.bystanders';
import * as Henchmen from './xMen.henchmen';
import * as Heroes from './xMen.heroes';
import * as Masterminds from './xMen.masterminds';
import { META } from './xMen.meta';
import * as Schemes from './xMen.schemes';
import * as Villains from './xMen.villains';

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
