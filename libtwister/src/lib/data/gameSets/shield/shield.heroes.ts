import { Hero } from '../../../model';
import { SHIELD } from '../../teams';

import { SHIELD_LEVEL, UNDERCOVER } from './keywords';
import { META } from './meta';

export const AGENT_PHIL_COULSON = new Hero({
  id: 'fa1006d5-ed2b-45a4-9e26-03f9787d3096',
  name: 'Agent Phil Coulson',
  team: SHIELD,

  gameSet: META,
  keywords: [UNDERCOVER, SHIELD_LEVEL],
});

export const DEATHLOK = new Hero({
  id: 'f4381002-198b-420f-b60a-d74b969e87ea',
  name: 'Deathlok',
  team: SHIELD,

  gameSet: META,
  keywords: [UNDERCOVER, SHIELD_LEVEL],
});

export const MOCKINGBIRD = new Hero({
  id: 'f5331dfe-cf69-4885-b2f6-70c03e5582dc',
  name: 'Mockingbird',
  team: SHIELD,

  gameSet: META,
  keywords: [UNDERCOVER, SHIELD_LEVEL],
});

export const QUAKE = new Hero({
  id: 'c3cb5ea9-35e6-40d4-bdcd-5baa3c268aeb',
  name: 'Quake',
  team: SHIELD,

  gameSet: META,
  keywords: [UNDERCOVER, SHIELD_LEVEL],
});
