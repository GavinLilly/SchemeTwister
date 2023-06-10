import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Heroes from './mcuGuardiansOfTheGalaxy.heroes';
import * as Masterminds from './mcuGuardiansOfTheGalaxy.masterminds';
import { META } from './mcuGuardiansOfTheGalaxy.meta';
import * as Schemes from './mcuGuardiansOfTheGalaxy.schemes';
import * as Villains from './mcuGuardiansOfTheGalaxy.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains)
);
