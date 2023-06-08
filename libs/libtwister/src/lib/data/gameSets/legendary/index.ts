import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './bystanders';
import * as Henchmen from './henchmen';
import * as Heroes from './legendary.heroes';
import * as Masterminds from './legendary.masterminds';
import * as Villains from './legendary.villains';
import { META } from './meta';
import * as Schemes from './schemes';

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
