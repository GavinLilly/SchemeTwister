import { GameSet } from '../../../model';
import { injectGameSetToMany } from '../../../utils/schemeInjector';

import * as Bystanders from './noir.bystanders';
import * as Heroes from './noir.heroes';
import * as Masterminds from './noir.masterminds';
import { META } from './noir.meta';
import * as Schemes from './noir.schemes';
import * as Villains from './noir.villains';

const schemes = injectGameSetToMany(META, Object.values(Schemes));

export { Heroes, schemes, Masterminds, Villains, Bystanders };

export default new GameSet(
  META,
  Object.values(Heroes),
  Object.values(Masterminds),
  Object.values(schemes),
  Object.values(Villains),
  undefined,
  Object.values(Bystanders)
);
