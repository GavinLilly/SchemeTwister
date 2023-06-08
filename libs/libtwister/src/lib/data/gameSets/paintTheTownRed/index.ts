import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import { META } from './meta';
import * as Heroes from './paintTheTownRed.heroes';
import * as Masterminds from './paintTheTownRed.masterminds';
import * as Villains from './paintTheTownRed.villains';
import * as Schemes from './schemes';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains)
);
