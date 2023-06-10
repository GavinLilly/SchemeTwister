import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Heroes from './blackWidow.heroes';
import * as Masterminds from './blackWidow.masterminds';
import { META } from './blackWidow.meta';
import * as Schemes from './blackWidow.schemes';
import * as Villains from './blackWidow.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains)
);
