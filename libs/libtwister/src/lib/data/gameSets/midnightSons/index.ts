import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Heroes from './midnightSons.heroes';
import * as Masterminds from './midnightSons.masterminds';
import { META } from './midnightSons.meta';
import * as Schemes from './midnightSons.schemes';
import * as Villains from './midnightSons.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains)
);
