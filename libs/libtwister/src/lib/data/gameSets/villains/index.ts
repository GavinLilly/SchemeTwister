import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './villains.bystanders';
import * as Henchmen from './villains.henchmen';
import * as Heroes from './villains.heroes';
import * as Masterminds from './villains.masterminds';
import { META } from './villains.meta';
import * as Schemes from './villains.schemes';
import * as Villains from './villains.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains, Bystanders, Henchmen };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
