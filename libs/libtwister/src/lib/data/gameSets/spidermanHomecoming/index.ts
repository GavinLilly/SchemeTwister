import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './bystanders';
import { META } from './meta';
import * as Schemes from './schemes';
import * as Heroes from './spidermanHomecoming.heroes';
import * as Masterminds from './spidermanHomecoming.masterminds';
import * as Villains from './spidermanHomecoming.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains, Bystanders };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains),
  undefined,
  Object.values(Bystanders)
);
