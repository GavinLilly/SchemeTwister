import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './bystanders';
import * as Henchmen from './henchmen';
import * as Heroes from './heroes';
import * as Masterminds from './marvelStudios.masterminds';
import { META } from './meta';
import * as Schemes from './schemes';
import * as Villains from './villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, Henchmen, schemes, Masterminds, Bystanders, Villains };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains),
  Object.values(Henchmen),
  Object.values(Bystanders)
);
