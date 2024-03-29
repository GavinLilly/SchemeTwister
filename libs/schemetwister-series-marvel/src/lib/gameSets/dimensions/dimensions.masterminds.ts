import { MastermindWithEpic } from '@schemetwister/libtwister';

import { SPIDER_SLAYER } from './dimensions.henchmen';
import { INVESTIGATE } from './dimensions.keywords';
import { META } from './dimensions.meta';

export const J_JONAH_JAMESON = new MastermindWithEpic(
  {
    id: '40c8699c-f848-4228-b9e2-b5fb5f69e3ef',
    name: 'J. Jonah Jameson',
    attackPoints: '4*',
    startOfGame:
      'Put 2 S.H.I.E.L.D. Officers per player into a face down "Angry Mobs" stack.',
    specialRules:
      "You can spend 4 Attack to reveal a random Angry Mob and put it into any player's discard pile. You can't fight J. Jonah Jameson while he has Angry Mobs.",
    masterStrike:
      'Each player Investigates their deck for a card and puts it into the Angry Mobs stack.',
    gameSet: META,
    victoryPoints: 5,
    alwaysLeads: [SPIDER_SLAYER],
    keywords: [INVESTIGATE],
  },
  {
    id: '1a464f77-8e35-4ff0-8c32-c38eb5bf88ac',
    attackPoints: '5*',
    startOfGame:
      'Put 3 S.H.I.E.L.D. Officers per player into a face down "Angry Mobs" stack.',
    specialRules:
      "You can spend 5 Attack to reveal a random Angry Mob and put it into any player's discard pile. You can't fight J. Jonah Jameson while he has Angry Mobs.",
    masterStrike:
      'Each player Investigates their deck for a card and puts it into the Angry Mobs stack. If that card cost 0, that player gains a Wound.',
  }
);
