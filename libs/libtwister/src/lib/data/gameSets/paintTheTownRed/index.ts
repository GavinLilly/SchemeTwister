import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Heroes from './paintTheTownRed.heroes';
import * as Masterminds from './paintTheTownRed.masterminds';
import { META } from './paintTheTownRed.meta';
import * as Schemes from './paintTheTownRed.schemes';
import * as Villains from './paintTheTownRed.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains)
);
