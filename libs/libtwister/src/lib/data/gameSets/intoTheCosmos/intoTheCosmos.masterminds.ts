import { MastermindWithEpic } from '../../../model';

import { UNIVERSAL_CHURCH_OF_TRUTH } from './intoTheCosmos.henchmen';
import {
  CONTEST_OF_CHAMPIONS,
  COSMIC_THREAT,
  SHARDS,
} from './intoTheCosmos.keywords';
import { META } from './intoTheCosmos.meta';
import { ELDERS_OF_THE_UNIVERSE, FROM_BEYOND } from './intoTheCosmos.villains';

export const THE_BEYONDER = new MastermindWithEpic(
  {
    name: 'The Beyonder',
    id: '8a48003e-f4f1-4bc6-bf1c-0199b878ad68',
    attackPoints: 21,
    specialRules: 'Cosmic Threat for cards that cost 5 or more.',
    masterStrike:
      "Each player reveals a card that costs 5 or more or gains a Wound. Then put this Strike under an HQ space (that doesn't already have a Strike) pulling that space into a Pocket Dimension. To recruit a card from a Pocket Dimension, you must pay 1 Attack for each Pocket Dimension in play.",
    gameSet: META,
    victoryPoints: 7,
    alwaysLeads: [FROM_BEYOND],
    keywords: [CONTEST_OF_CHAMPIONS, COSMIC_THREAT],
  },
  {
    name: 'Epic Beyonder',
    id: '8ebd6355-3568-4142-95e5-34069f077c63',
    attackPoints: 24,
    specialRules: 'Cosmic Threat for cards that cost 6 or more.',
    masterStrike:
      "Each player reveals a card that costs 6 or more or gains a Wound. Then put this Strike under an HQ space (that doesn't already have a Strike) pulling that space into a Pocket Dimension. To recruit a card from a Pocket Dimension, you must pay 1 Attack for each Pocket Dimension in play.",
  }
);

export const THE_GRANDMASTER = new MastermindWithEpic(
  {
    name: 'The Grandmaster',
    id: 'a94bd803-fe80-4545-9d84-8df02a870f8b',
    attackPoints: 10,
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [ELDERS_OF_THE_UNIVERSE],
    keywords: [CONTEST_OF_CHAMPIONS, SHARDS],
    masterStrike:
      "Reveal the top card of the Hero Deck then put it back. Contest of Champions for that card's color(s). Each player that loses gains a Wound. If the Grandmaster wins, he gains a Shard.",
  },
  {
    name: 'Epic Grandmaster',
    id: '42324863-9864-4b9a-bf20-7ba0396618f8',
    attackPoints: 11,
    specialRules:
      'Evil adds +2 to its final total in every Contest of Champions caused by any card.',
    masterStrike:
      "Reveal the top card of the Hero Deck then put it back. Contest of Champions for that card's color(s). Each player that loses gains a Wound. If the Grandmaster wins, he gains 2 Shards.",
  }
);

export const MAGUS = new MastermindWithEpic(
  {
    name: 'Magus',
    id: '286d73ed-cd99-4991-bee0-6cdf252e8061',
    attackPoints: 9,
    specialRules:
      'Magus gets +1 Attack for each Villain in the city that has any Shards.',
    masterStrike:
      'If there are already any Villains with Shards in the city, each player gains a Wound. Then this Strike enters the city as a "Cosmic Wraith" Villain with 4 Attack worth 4 VP. Then put a Shard on each Villain in the city.',
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [UNIVERSAL_CHURCH_OF_TRUTH],
    keywords: [SHARDS],
  },
  {
    id: 'a61bdc52-85c1-494d-bd3e-a84920b6289c',
    attackPoints: '11+',
    specialRules:
      'Magus gets +2 Attack for each Villain in the city that has any Shards.',
    masterStrike:
      'If there are already any Villains with Shards in the city, each player gains a Wound to the top of their deck. Then this Strike enters the city as a "Cosmic Wraith" Villain with 6 Attack worth 6 VP. Then put a Shard on each Villain in the city.',
  }
);
