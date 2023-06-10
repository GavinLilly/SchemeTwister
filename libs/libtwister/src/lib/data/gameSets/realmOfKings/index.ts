import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Heroes from './realmOfKings.heroes';
import * as Masterminds from './realmOfKings.masterminds';
import { META } from './realmOfKings.meta';
import * as Schemes from './realmOfKings.schemes';
import * as Villains from './realmOfKings.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains)
);
