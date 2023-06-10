import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Heroes from './fantasticFour.heroes';
import * as Masterminds from './fantasticFour.masterminds';
import { META } from './fantasticFour.meta';
import * as Schemes from './fantasticFour.schemes';
import * as Villains from './fantasticFour.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains)
);
