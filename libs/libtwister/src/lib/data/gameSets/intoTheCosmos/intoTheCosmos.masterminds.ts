import { EpicMastermindBuilder, IMastermind, Mastermind } from '../../../model';

import { UNIVERSAL_CHURCH_OF_TRUTH } from './intoTheCosmos.henchmen';
import {
  CONTEST_OF_CHAMPIONS,
  COSMIC_THREAT,
  SHARDS,
} from './intoTheCosmos.keywords';
import { META } from './intoTheCosmos.meta';
import { ELDERS_OF_THE_UNIVERSE, FROM_BEYOND } from './intoTheCosmos.villains';

type Specs = Pick<
  IMastermind,
  'victoryPoints' | 'alwaysLeads' | 'keywords' | 'gameSet'
>;

const beyonderSpecs: Specs = {
  gameSet: META,
  victoryPoints: 7,
  alwaysLeads: [FROM_BEYOND],
  keywords: [CONTEST_OF_CHAMPIONS, COSMIC_THREAT],
};

export const THE_BEYONDER = new Mastermind({
  id: '8a48003e-f4f1-4bc6-bf1c-0199b878ad68',
  name: 'The Beyonder',
  attackPoints: 21,
  ...beyonderSpecs,
  specialRules: 'Cosmic Threat for cards that cost 5 or more.',
  masterStrike:
    "Each player reveals a card that costs 5 or more or gains a Wound. Then put this Strike under an HQ space (that doesn't already have a Strike) pulling that space into a Pocket Dimension. To recruit a card from a Pocket Dimension, you must pay 1 Attack for each Pocket Dimension in play.",
});

export const EPIC_BEYONDER = new Mastermind({
  id: '8ebd6355-3568-4142-95e5-34069f077c63',
  name: 'Epic Beyonder',
  attackPoints: 24,
  ...beyonderSpecs,
  specialRules: 'Cosmic Threat for cards that cost 6 or more.',
  masterStrike:
    "Each player reveals a card that costs 6 or more or gains a Wound. Then put this Strike under an HQ space (that doesn't already have a Strike) pulling that space into a Pocket Dimension. To recruit a card from a Pocket Dimension, you must pay 1 Attack for each Pocket Dimension in play.",
});

const grandmasterSpecs: Specs = {
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [ELDERS_OF_THE_UNIVERSE],
  keywords: [CONTEST_OF_CHAMPIONS, SHARDS],
};

export const THE_GRANDMASTER = new Mastermind({
  id: 'a94bd803-fe80-4545-9d84-8df02a870f8b',
  name: 'The Grandmaster',
  attackPoints: 10,
  ...grandmasterSpecs,
  masterStrike:
    "Reveal the top card of the Hero Deck then put it back. Contest of Champions for that card's color(s). Each player that loses gains a Wound. If the Grandmaster wins, he gains a Shard.",
});

export const EPIC_GRANDMASTER = new Mastermind({
  id: '42324863-9864-4b9a-bf20-7ba0396618f8',
  name: 'Epic Grandmaster',
  attackPoints: 11,
  ...grandmasterSpecs,
  specialRules:
    'Evil adds +2 to its final total in every Contest of Champions caused by any card.',
  masterStrike:
    "Reveal the top card of the Hero Deck then put it back. Contest of Champions for that card's color(s). Each player that loses gains a Wound. If the Grandmaster wins, he gains 2 Shards.",
});

const magus = new EpicMastermindBuilder({
  gameSet: META,
  name: 'Magus',
  victoryPoints: 6,
  alwaysLeads: [UNIVERSAL_CHURCH_OF_TRUTH],
  keywords: [SHARDS],
});

export const MAGUS = magus.buildNormal({
  id: '286d73ed-cd99-4991-bee0-6cdf252e8061',
  attackPoints: 9,
  specialRules:
    'Magus gets +1 Attack for each Villain in the city that has any Shards.',
  masterStrike:
    'If there are already any Villains with Shards in the city, each player gains a Wound. Then this Strike enters the city as a "Cosmic Wraith" Villain with 4 Attack worth 4 VP. Then put a Shard on each Villain in the city.',
});

export const EPIC_MAGUS = magus.buildEpic({
  id: 'a61bdc52-85c1-494d-bd3e-a84920b6289c',
  attackPoints: '11+',
  specialRules:
    'Magus gets +2 Attack for each Villain in the city that has any Shards.',
  masterStrike:
    'If there are already any Villains with Shards in the city, each player gains a Wound to the top of their deck. Then this Strike enters the city as a "Cosmic Wraith" Villain with 6 Attack worth 6 VP. Then put a Shard on each Villain in the city.',
});
