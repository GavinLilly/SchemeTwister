import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './messiahComplex.bystanders';
import * as Henchmen from './messiahComplex.henchmen';
import * as Heroes from './messiahComplex.heroes';
import * as Masterminds from './messiahComplex.masterminds';
import { META } from './messiahComplex.meta';
import * as Schemes from './messiahComplex.schemes';
import * as Villains from './messiahComplex.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains, Henchmen, Bystanders };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
