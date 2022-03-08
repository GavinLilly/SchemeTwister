import { GameSet } from '../../../model';

import * as Heroes from './heroes';
import * as Masterminds from './masterminds';
import { META } from './meta';
import * as Schemes from './schemes';
import * as Villains from './villains';

export { Heroes, Schemes, Masterminds, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(Schemes),
  Object.values(Villains)
);
