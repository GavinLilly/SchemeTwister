import { GameSet } from '../../../model';

import * as Bystanders from './bystanders';
import * as Heroes from './dimensions.heroes';
import * as Masterminds from './dimensions.masterminds';
import * as Henchmen from './henchmen';
import { META } from './meta';

export { Heroes, Masterminds, Henchmen, Bystanders };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  undefined,
  undefined,
  Object.values(Henchmen),
  Object.values(Bystanders)
);
