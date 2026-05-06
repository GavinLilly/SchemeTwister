import { MastermindWithEpic } from '@schemetwister/libtwister';

import { SYMBIOTE_BONDS } from './venom.keywords';
import { META } from './venom.meta';
import { LIFE_FOUNDATION, POISONS } from './venom.villains';

export const HYBRID = new MastermindWithEpic(
  {
    id: 'a2fcb3d5-4ae2-44e7-bc7f-63193faf5446',
    attackPoints: 6,
    masterStrike:
      'A Villain from the city Symbiote Bonds with Hybrid, If Hybrid was already bonded, then each player gains a Wound instead.',
    name: 'Hybrid',
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [LIFE_FOUNDATION],
    keywords: [SYMBIOTE_BONDS],
    specialRules:
      "If you fight Hybrid while he's bonded to a Villain, defeat that Villain and rescue three Bystanders instead of taking a Tactic.",
  },
  {
    id: '2fbed495-883d-4962-928e-d78677add612',
    attackPoints: 8,
    masterStrike:
      'The highest Attack unbonded Villain from the city and/or Escape Pile Symbiote Bonds with Hybrid. If no new bond could occur, then each player gains a Wound instead.',
  }
);

export const POISON_THANOS = new MastermindWithEpic(
  {
    id: 'be91be31-f5d5-40cf-aa46-21f393bf1659',
    attackPoints: 12,
    specialRules:
      'Poison Thanos gets +1 Attack for each different cost among cards in his "Poisoned Souls" pile.',
    masterStrike:
      'Each player reveals their hand and puts one of their non-grey Heroes next to Thanos in a "Poisoned Souls: pile.',
    name: 'Poison Thanos',
    gameSet: META,
    victoryPoints: 7,
    alwaysLeads: [POISONS],
  },
  {
    id: 'e591b841-9663-4f31-bd59-c79b23688b3f',
    attackPoints: 13,
    specialRules:
      'Poison Thanos gets +2 Attack for each different cost among cards in his "Poisoned Souls" pile.',
    masterStrike:
      'Each player reveals their hand and puts half (round up) of their non-grey Heroes net to Thanos in a "Poisoned Souls" pile. Each player that lost no Heroes this way gains a Wound.',
  }
);
