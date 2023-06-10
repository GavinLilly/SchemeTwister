import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './revelations.bystanders';
import * as Henchmen from './revelations.henchmen';
import * as Heroes from './revelations.heroes';
import * as Masterminds from './revelations.masterminds';
import { META } from './revelations.meta';
import * as Schemes from './revelations.schemes';
import * as Villains from './revelations.villains';

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
