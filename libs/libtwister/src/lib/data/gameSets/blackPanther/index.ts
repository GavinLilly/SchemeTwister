import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Heroes from './blackPanther.heroes';
import * as Masterminds from './blackPanther.masterminds';
import { META } from './blackPanther.meta';
import * as Schemes from './blackPanther.schemes';
import * as Villains from './blackPanther.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains)
);
