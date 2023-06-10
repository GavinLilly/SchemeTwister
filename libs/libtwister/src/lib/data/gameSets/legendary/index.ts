import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './legendary.bystanders';
import * as Henchmen from './legendary.henchmen';
import * as Heroes from './legendary.heroes';
import * as Masterminds from './legendary.masterminds';
import { META } from './legendary.meta';
import * as Schemes from './legendary.schemes';
import * as Villains from './legendary.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, Henchmen, Masterminds, Bystanders, Villains, schemes };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
