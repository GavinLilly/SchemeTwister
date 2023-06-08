import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Heroes from './mcuInfinitySaga.heroes';
import * as Masterminds from './mcuInfinitySaga.masterminds';
import { META } from './meta';
import * as Schemes from './schemes';
import * as Villains from './villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, Masterminds, schemes, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  schemes,
  Object.values(Villains)
);
