import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './marvelStudios.bystanders';
import * as Henchmen from './marvelStudios.henchmen';
import * as Heroes from './marvelStudios.heroes';
import * as Masterminds from './marvelStudios.masterminds';
import { META } from './marvelStudios.meta';
import * as Schemes from './marvelStudios.schemes';
import * as Villains from './marvelStudios.villains';

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
