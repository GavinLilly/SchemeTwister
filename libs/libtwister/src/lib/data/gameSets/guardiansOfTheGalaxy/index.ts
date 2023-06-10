import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Heroes from './guardiansOfTheGalaxy.heroes';
import * as Masterminds from './guardiansOfTheGalaxy.masterminds';
import { META } from './guardiansOfTheGalaxy.meta';
import * as Schemes from './guardiansOfTheGalaxy.schemes';
import * as Villains from './guardiansOfTheGalaxy.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains)
);
