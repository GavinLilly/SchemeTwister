import { Mastermind } from '../../../model';

import { REVENGE } from './keywords';
import { META } from './meta';
import { DEADPOOLS_FRIENDS, EVIL_DEADPOOL_CORPSE } from './villains';

export const EVIL_DEADPOOL = new Mastermind({
  id: 'e9427fd1-f815-4a04-8ca9-822ae4152a9b',
  name: 'Evil Deadpool',
  gameSet: META,
  attackPoints: 11,
  victoryPoints: 6,
  alwaysLeads: [EVIL_DEADPOOL_CORPSE],
  keywords: [REVENGE],
});

export const MACHO_GOMEZ = new Mastermind({
  id: 'ad9cbeab-e0f5-4c1a-b93d-160f9c4932d0',
  name: 'Macho Gomez',
  gameSet: META,
  attackPoints: 9,
  victoryPoints: 6,
  alwaysLeads: [DEADPOOLS_FRIENDS],
  keywords: [REVENGE],
});
