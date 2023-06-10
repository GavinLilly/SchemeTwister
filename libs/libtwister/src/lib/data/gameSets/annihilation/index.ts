import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Heroes from './annihilation.heroes';
import * as Masterminds from './annihilation.masterminds';
import { META } from './annihilation.meta';
import * as Schemes from './annihilation.schemes';
import * as Villains from './annihilation.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains)
);
