import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Heroes from './shadowsOfNightmare.heroes';
import * as Masterminds from './shadowsOfNightmare.masterminds';
import { META } from './shadowsOfNightmare.meta';
import * as Schemes from './shadowsOfNightmare.schemes';
import * as Villains from './shadowsOfNightmare.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains)
);
