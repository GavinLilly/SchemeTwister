import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import { META } from './meta';
import * as Schemes from './schemes';
import * as Heroes from './theNewMutants.heroes';
import * as Masterminds from './theNewMutants.masterminds';
import * as Villains from './theNewMutants.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains)
);
