import { MastermindWithEpic } from '../../../model';
import { randomize } from '../../../utils/randomize';
import { HeroClass } from '../../enums/heroClass.enum';

import { SHIAR_DEATH_COMMANDOS, SHIAR_PATROL_CRAFT } from './xMen.henchmen';
import { DOMINATE, HUMAN_SHIELDS, TOKEN_CARDS, TRAPS } from './xMen.keywords';
import { META } from './xMen.meta';
import {
  DARK_DESCENDANTS,
  HELLFIRE_CLUB,
  MOJOVERSE,
  MURDERWORLD,
  SHADOW_X,
} from './xMen.villains';

export const ARCADE = new MastermindWithEpic(
  {
    id: '48b50c53-78b8-4e47-86f9-20be6ffcdc72',
    name: 'Arcade',
    attackPoints: '3*',
    victoryPoints: 5,
    startOfGame: 'Arcade captures 5 Human Shields.',
    masterStrike:
      "Arcade captures a random Bystander from each player's Victory Pile as a Human Shield. Each player who didn't have a Bystander gains a Wound instead.",
    gameSet: META,
    alwaysLeads: [MURDERWORLD],
    keywords: [HUMAN_SHIELDS],
  },
  {
    id: '23cc52ee-2d3f-448f-8d67-5b19b29b30da',
    name: 'Epic Arcade',
    attackPoints: '4*',
    victoryPoints: 6,
    startOfGame: 'Arcade captures 8 Human Shields. Play a random Horror.',
    masterStrike:
      "Arcade captures two random Bystanders from each player's Victory Pile as a Human Shield. Each player who didn't have two Bystanders gains a Wound instead.",
  }
);

export const DARK_PHOENIX = new MastermindWithEpic(
  {
    id: 'b0f4dc4e-45fa-4cb6-8067-b13ee207ac9b',
    masterStrike:
      'KO the top card of the Hero Deck and each card in the Hero Deck that shares a color with it. Shuffle the Hero Deck.',
    attackPoints: 13,
    name: 'Dark Phoenix',
    gameSet: META,
    victoryPoints: 7,
    alwaysLeads: [HELLFIRE_CLUB],
    mastermindWins: 'When the Hero Deck is empty.',
  },
  {
    id: '252a3acd-f736-40cd-ae33-eebc6e0b459f',
    masterStrike:
      'KO the top card of the Hero Deck and each card in the Hero Deck that shares a color with it. Shuffle the Hero Deck. Then, each player plays a Hellfire Club card from their victory Pile. Next, play a random Horror.',
    attackPoints: 15,
  }
);

export const DEATHBIRD = new MastermindWithEpic(
  {
    id: '24e6febf-7d5e-40eb-bdda-75956a53e66c',
    specialRules:
      "Deathbird gets +1 Attack for each Shi'ar Villain in the city and Escape Pile.",
    masterStrike:
      "If there are already any Shi'ar Villains in the city, each player gains a Wound. Then this strike enters the city as a Shi'ar Battle Cruiser Token Villain with 7 Attack worth 5 VP.",
    name: 'Deathbird',
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [randomize([SHIAR_DEATH_COMMANDOS, SHIAR_PATROL_CRAFT])],
    keywords: [TOKEN_CARDS],
    attackPoints: '8+',
  },
  {
    id: '56cd82c2-548a-48dd-a1d6-1437dbe5bda8',
    specialRules:
      "Deathbird gets +2 Attack for each Shi'ar Villain in the city and Escape Pile.",
    masterStrike:
      "If there are already any Shi'ar Villains in the city, play a random Horror. Then this strike enters the city as a Shi'ar Battle Ship Token Villain with 9 Attack worth 6 VP.",
  }
);

export const MOJO = new MastermindWithEpic(
  {
    id: '35177145-ec24-4858-98ed-0159e2e412ab',
    attackPoints: '6*',
    startOfGame:
      'Mojo captures 3 Human Shields. All Bystanders in Victory Piles are worth 3 VP.',
    masterStrike: `Mojo captures a Human Shield. Each player reveals a ${HeroClass.TECH} Hero or discards a card at random.`,
    name: 'Mojo',
    gameSet: META,
    victoryPoints: 5,
    alwaysLeads: [MOJOVERSE],
    keywords: [HUMAN_SHIELDS],
  },
  {
    id: '85112b60-5998-42c9-a212-1355a515f6ad',
    attackPoints: '7*',
    startOfGame:
      'Mojo captures 6 Human Shields. Play a random Horror. All Bystanders in Victory Piles are worth 4 VP.',
    masterStrike: `Mojo and each Mojoverse Villain capture a Human Shield. Each player reveals a ${HeroClass.TECH} Hero or discards down to 4 cards each.`,
  }
);

export const ONSLAUGHT = new MastermindWithEpic(
  {
    id: 'f6b04a2e-3673-49a3-8535-a2016b8853b7',
    masterStrike:
      'KO all Heroes Dominated by Onslaught. Then each player reveals their hand and chooses one of their non-grey Heroes. Onslaught Dominates those Heroes.',
    name: 'Onslaught',
    gameSet: META,
    victoryPoints: 7,
    alwaysLeads: [DARK_DESCENDANTS],
    keywords: [DOMINATE],
    specialRules: "Each player's hand size is 1 less.",
    attackPoints: '12+',
  },
  {
    id: 'fe2edc38-9c90-4711-bfc2-cfb762456558',
    masterStrike:
      'KO all Heroes Dominated by Onslaught. Then each player reveals their hand and chooses two of their non-grey Heroes. Onslaught Dominates those Heroes. Then play a random Horror.',
  }
);

export const SHADOW_KING = new MastermindWithEpic(
  {
    id: 'cc6e1ee5-a074-4e95-9488-8f455836085c',
    attackPoints: '7+',
    masterStrike:
      'KO all Heroes Dominated by Shadow King. Then each player chooses a non-grey Hero from their discard pile. Shadow King Dominates those Heroes.',
    name: 'ShadowKing',
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [SHADOW_X],
    keywords: [DOMINATE, TRAPS],
  },
  {
    id: '993c5dc0-e96e-4b04-a199-a73e5849e751',
    attackPoints: '9+',
    startOfGame: 'Play two random Horrors.',
    masterStrike:
      'KO all Heroes Dominated by Shadow King. Then each player chooses a non-grey Hero from their discard pile. Shadow King Dominates those Heroes.',
  }
);
