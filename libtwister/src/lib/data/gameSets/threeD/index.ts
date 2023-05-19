import { GameSet } from '../../../model';

import * as Bystanders from './bystanders';
import * as Henchmen from './henchmen';
import { META } from './meta';
import * as Heroes from './threeD.heroes';

export { Heroes, Henchmen, Bystanders };

export default new GameSet(
  META,
  Object.values(Heroes),
  undefined,
  undefined,
  undefined,
  Object.values(Henchmen),
  Object.values(Bystanders)
);
