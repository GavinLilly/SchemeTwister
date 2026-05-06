import { MastermindWithEpic } from '@schemetwister/libtwister';
import {
  CROSS_DIMENSIONAL_RAMPAGE,
  RISE_OF_THE_LIVING_DEAD,
} from '@schemetwister/series-marvel-common';

import { ULTRON_SENTRIES, VIBRANIUM_LIBERATOR_DRONES } from './whatIf.henchmen';
import { KILLMONGER_SPEC_OPS } from './whatIf.heroes';
import { SOULBIND } from './whatIf.keywords';
import { META } from './whatIf.meta';
import { ZOMBIE_AVENGERS } from './whatIf.villains';

export const HANK_PYM_YELLOWJACKET = new MastermindWithEpic(
  {
    id: '6d0b4733-586e-45f1-9451-7196b97848ca',
    attackPoints: '4*',
    masterStrike:
      'Each player puts three 0-cost cards from their discard pile on top of their deck.',
    specialRules:
      'Before each time you fight Hank Pym, you must "track him down" by discarding the top 6 cards of your deck, then paying 2 Attack for each card you discarded that costs 0. If you don\'t pay this total, gain a Wound and your turn ends.',
    name: 'Hank Pym, Yellowjacket',
    alwaysLeads: [],
    victoryPoints: 6,
    gameSet: META,
  },
  {
    id: 'fd155d6b-057a-4990-9bc6-b2938f63545b',
    attackPoints: '6*',
    masterStrike:
      'Each player puts six 0-cost cards from their discard pile on top of their deck.',
    specialRules:
      'Before each time you fight Hank Pym, you must "track him down" by discarding the top 6 cards of your deck, then paying 3 Attack for each card you discarded that costs 0. If you don\'t pay this total, gain a Wound and your turn ends.',
  }
);

export const KILLMONGER_THE_BETRAYER = new MastermindWithEpic(
  {
    id: 'cb6e4c02-930d-4dc5-b3ad-a14a5071cea0',
    attackPoints: 9,
    masterStrike:
      'If there are any Killmonger cards in the city or HQ, each player gains a Wound. Choose a Killmonger Hero from your hand, any player\'s discard pile, or the HQ to enter the city as a Villain with Attack equal to its cost +3 and "Fight: KO this or choose a player to gain it."',
    name: 'Killmonger, the Betrayer',
    alwaysLeads: [VIBRANIUM_LIBERATOR_DRONES],
    alwaysInclude: [KILLMONGER_SPEC_OPS],
    victoryPoints: 6,
    gameSet: META,
  },
  {
    id: '63f9e219-9aff-4d77-8b4a-6acf24ccce74',
    attackPoints: 12,
    masterStrike:
      'If there are any Killmonger cards in the city or HQ, each player gains a Wound. Each player chooses a Killmonger Hero from their hand, discard pile, or the HQ to enter the city as a Villain with Attack equal to its cost +4 and "Fight: KO this or choose a player to gain it."',
  }
);

export const ULTRON_INFINITY = new MastermindWithEpic(
  {
    id: 'c95ade29-ee10-4b45-ab79-73c2efad516a',
    attackPoints: '8+',
    masterStrike:
      'Cross-Dimensional Ultron Rampage. Then each player stacks an Ultron Sentry from their Victory Pile next to Ultron. Put this Strike next to Ultron as an "Infinity Stone." When Ultron has gained five Infinity Stones (plus this card as the Mind stone), he gets +∞ Attack. (Solo mode: Also stack a random unused Ultron Sentry next to Ultron.)',
    name: 'Ultron Infinity',
    alwaysLeads: [ULTRON_SENTRIES],
    victoryPoints: 6,
    gameSet: META,
    specialRules:
      'Ultron Infinity has all the Empowered abilities of all Ultron Sentries in the city, the Escape Pile, and stacked next to him.',
    keywords: [CROSS_DIMENSIONAL_RAMPAGE],
  },
  {
    id: 'e72ccedd-107a-4a93-b431-0001150f188a',
    attackPoints: '12+',
    masterStrike:
      'Cross-Dimensional Ultron Rampage. Then each player stacks two Ultron Sentries from their Victory Pile next to Ultron. Put this Strike next to Ultron as an "Infinity Stone." (Solo mode: Also stack a random unused Ultron Sentry next to Ultron.)',
    mastermindWins: 'Ultron Wins when he has gained five Infinity Stones.',
  }
);

export const ZOMBIE_SCARLET_WITCH = new MastermindWithEpic(
  {
    id: '1d7f1718-b8ee-4727-818f-b3888b481693',
    attackPoints: '9+',
    masterStrike:
      'Cross-Dimensional Zombie Rampage. Then Rise of the Living Dead.',
    name: 'Zombie Scarlet Witch',
    alwaysLeads: [ZOMBIE_AVENGERS],
    victoryPoints: 6,
    gameSet: META,
    specialRules:
      'Zombie Scarlet Witch gets +1 Attack for each Hero with an odd-numbered cost you played this turn.',
    keywords: [CROSS_DIMENSIONAL_RAMPAGE, RISE_OF_THE_LIVING_DEAD],
  },
  {
    id: 'e07c1c53-6163-4842-8e2b-bfcc0bbf40a4',
    attackPoints: '13+',
    masterStrike: `Cross-Dimensional Zombie Rampage. Then each player must Soulbind the topmost card of their Victory Pile that isn't a Villain with "Rise of the Living Dead." Then Rise of the Living Dead.`,
    keywords: [CROSS_DIMENSIONAL_RAMPAGE, RISE_OF_THE_LIVING_DEAD, SOULBIND],
  }
);
