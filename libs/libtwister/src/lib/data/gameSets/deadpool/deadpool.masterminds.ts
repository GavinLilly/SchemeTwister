import { Mastermind } from '../../../model';

import { REVENGE } from './deadpool.keywords';
import { META } from './deadpool.meta';
import { DEADPOOLS_FRIENDS, EVIL_DEADPOOL_CORPSE } from './deadpool.villains';

export const EVIL_DEADPOOL = new Mastermind({
  id: 'e9427fd1-f815-4a04-8ca9-822ae4152a9b',
  name: 'Evil Deadpool',
  gameSet: META,
  attackPoints: 11,
  victoryPoints: 6,
  alwaysLeads: [EVIL_DEADPOOL_CORPSE],
  keywords: [REVENGE],
  specialRules: 'Revenge for Mastermind Tactics',
  masterStrike:
    'Without talking, each player simultaneously discards a card. Whoever discards the lowest-costing card (or tied for lowest) gains a Wound.',
});

export const MACHO_GOMEZ = new Mastermind({
  id: 'ad9cbeab-e0f5-4c1a-b93d-160f9c4932d0',
  name: 'Macho Gomez',
  gameSet: META,
  attackPoints: 9,
  victoryPoints: 6,
  alwaysLeads: [DEADPOOLS_FRIENDS],
  keywords: [REVENGE],
  specialRules: 'Revenge for Deadpool\'s "Friends"',
  masterStrike:
    'Put this Strike in front of you as a "Bounty on Your Head." Then, each player gains a Wound for each Bounty on them. Any number of times during your turn, you may pay 1 Recruit to move a Bounty from you to the player on your left.',
});
