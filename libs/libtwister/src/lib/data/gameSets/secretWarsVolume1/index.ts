import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './sw1.bystanders';
import * as Henchmen from './sw1.henchmen';
import * as Heroes from './sw1.heroes';
import * as Masterminds from './sw1.masterminds';
import { META } from './sw1.meta';
import * as Schemes from './sw1.schemes';
import * as Villains from './sw1.villains';

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
