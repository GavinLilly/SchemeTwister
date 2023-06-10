import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Heroes from './fearItself.heroes';
import * as Masterminds from './fearItself.masterminds';
import { META } from './fearItself.meta';
import * as Schemes from './fearItself.schemes';
import * as Villains from './fearItself.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains)
);
