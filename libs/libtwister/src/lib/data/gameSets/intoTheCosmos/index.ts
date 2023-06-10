import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './intoTheCosmos.bystanders';
import * as Henchmen from './intoTheCosmos.henchmen';
import * as Heroes from './intoTheCosmos.heroes';
import * as Masterminds from './intoTheCosmos.masterminds';
import { META } from './intoTheCosmos.meta';
import * as Schemes from './intoTheCosmos.schemes';
import * as Villains from './intoTheCosmos.villains';

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
