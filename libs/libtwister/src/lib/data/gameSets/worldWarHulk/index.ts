import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './worldWarHulk.bystanders';
import * as Henchmen from './worldWarHulk.henchmen';
import * as Heroes from './worldWarHulk.heroes';
import * as Masterminds from './worldWarHulk.masterminds';
import { META } from './worldWarHulk.meta';
import * as Schemes from './worldWarHulk.schemes';
import * as Villains from './worldWarHulk.villains';

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
