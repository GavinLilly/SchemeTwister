import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './bystanders';
import * as Henchmen from './henchmen';
import { META } from './meta';
import * as Schemes from './schemes';
import * as Villains from './villains';
import * as Heroes from './worldWarHulk.heroes';
import * as Masterminds from './worldWarHulk.masterminds';

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
