import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import { META } from './meta';
import * as Schemes from './schemes';
import * as Heroes from './shield.heroes';
import * as Masterminds from './shield.masterminds';
import * as Villains from './villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains)
);
