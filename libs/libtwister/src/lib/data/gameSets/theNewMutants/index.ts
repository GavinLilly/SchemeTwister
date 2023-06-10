import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Heroes from './theNewMutants.heroes';
import * as Masterminds from './theNewMutants.masterminds';
import { META } from './theNewMutants.meta';
import * as Schemes from './theNewMutants.schemes';
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
