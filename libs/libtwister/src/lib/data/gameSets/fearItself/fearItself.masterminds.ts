import { Mastermind } from '../../../model';
import { DEMOLISH } from '../villains/keywords';

import { META } from './meta';
import { THE_MIGHTY } from './villains';

export const URUENCHANTED_IRON_MAN = new Mastermind({
  id: 'ae06a222-8894-458e-9ef3-f75b823d4d2b',
  name: 'Uru-Enchanted Iron Man',
  gameSet: META,
  attackPoints: 7,
  victoryPoints: 6,
  alwaysLeads: [THE_MIGHTY],
  keywords: [DEMOLISH],
});
