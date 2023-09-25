import { EpicMastermindBuilder } from '../../../model';

import { SPIDER_SLAYER } from './dimensions.henchmen';
import { INVESTIGATE } from './dimensions.keywords';
import { META } from './dimensions.meta';

const jJonahJameson = new EpicMastermindBuilder({
  gameSet: META,
  name: 'J. Jonah Jameson',
  victoryPoints: 5,
  alwaysLeads: [SPIDER_SLAYER],
  keywords: [INVESTIGATE],
});

export const J_JONAH_JAMESON = jJonahJameson.buildNormal({
  id: '40c8699c-f848-4228-b9e2-b5fb5f69e3ef',
  attackPoints: '4*',
  startOfGame:
    'Put 2 S.H.I.E.L.D. Officers per player into a face down "Angry Mobs" stack.',
  specialRules:
    "You can spend 4 Attack to reveal a random Angry Mob and put it into any player's discard pile. You can't fight J. Jonah Jameson while he has Angry Mobs.",
  masterStrike:
    'Each player Investigates their deck for a card and puts it into the Angry Mobs stack.',
});

export const EPIC_J_JONAH_JAMESON = jJonahJameson.buildEpic({
  id: '1a464f77-8e35-4ff0-8c32-c38eb5bf88ac',
  attackPoints: '5*',
  startOfGame:
    'Put 3 S.H.I.E.L.D. Officers per player into a face down "Angry Mobs" stack.',
  specialRules:
    "You can spend 5 Attack to reveal a random Angry Mob and put it into any player's discard pile. You can't fight J. Jonah Jameson while he has Angry Mobs.",
  masterStrike:
    'Each player Investigates their deck for a card and puts it into the Angry Mobs stack. If that card cost 0, that player gains a Wound.',
});
