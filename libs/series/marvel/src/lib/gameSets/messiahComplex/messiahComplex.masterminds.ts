import {
  MastermindWithEpic,
  HeroClass,
  Random,
} from '@schemetwister/libtwister';

import { SENTINELS } from '../legendary/legendary.henchmen';

import { SENTINEL_SQUAD_ONE } from './messiahComplex.henchmen';
import { PREY, SHATTER } from './messiahComplex.keywords';
import { META } from './messiahComplex.meta';
import { ACOLYTES, PURIFIERS, REAVERS } from './messiahComplex.villains';

export const LADY_DEATHSTRIKE = new MastermindWithEpic(
  {
    id: '901cc1e3-9adf-4d81-94c0-57ff75feaee5',
    attackPoints: 8,
    masterStrike: `If she is Preying on a player, Finish the Prey. Otherwise, Prey on the fewest ${HeroClass.INSTINCT}.`,
    finishThePrey:
      'That player gains two Wounds. Each other player discards two cards. (1-player game: Instead, gain a Wound and discard a card.)',
    name: 'Lady Deathstrike',
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [REAVERS],
    keywords: [PREY],
  },
  {
    id: '9b26e13e-e7aa-4f05-87a1-e4e4cb2e5c28',
    attackPoints: 11,
    masterStrike: `If she is Preying on a player, Finish the Prey. Then, whether she is preying or not, Prey on the fewest ${HeroClass.INSTINCT}.`,
    finishThePrey:
      'That player gains Wounds to the top and bottom of thir deck. Each other player discards down to three cards. (1-player game: Instead, gain a Wound and discard two cards.)',
  }
);

/**
 * @todo we should get the henchmen store in here in order to know which game
 * sets are enabled
 */
export const BASTION = new MastermindWithEpic(
  {
    id: '767c7f38-fc44-4e89-afea-4ffa272127ee',
    attackPoints: '4+',
    masterStrike:
      'A card from the Bystander Stack ascends to become a 3 Attack "Prime Sentinel" Mastermind with "Fight: Rescue this. Master Strike: Each player reveals the top card of their deck and discards it if it costs 1 or more."',
    name: 'Bastion',
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [PURIFIERS, Random.choice([SENTINELS, SENTINEL_SQUAD_ONE])],
    specialRules:
      'All Sentinel Masterminds get +1 Attack for each Master Strike in the KO pile, even after Bastion is defeated.',
  },
  {
    id: '9a57529c-2530-4341-8938-0b1eebece406',
    attackPoints: '6+',
    masterStrike:
      'A card from the Bystander Stack ascends to become a 4 Attack "Prime Sentinel" Mastermind with "Fight: Rescue this. Master Strike: Each player reveals the top card of their deck and KOs it if it costs 1 or more."',
  }
);

export const EXODUS = new MastermindWithEpic(
  {
    id: 'c015a218-c854-4a04-a9c8-5e595b79b831',
    attackPoints: '32*',
    specialRules:
      'You may pay 3 Recruit any number of times to Shatter Exodus.',
    masterStrike:
      'Choose X-Men, X-Force, X-Factor, or Brotherhood. Each player discards one of those Heroes or gains a Wound.',
    name: 'Exodus',
    gameSet: META,
    victoryPoints: 7,
    alwaysLeads: [ACOLYTES],
    keywords: [SHATTER],
  },
  {
    id: '59ac6b60-6365-4eb1-85cb-5ef8693b324f',
    attackPoints: '36*',
    specialRules:
      'Any number of times, you may Shatter Exodus by spending 2 Recruit pules 1 Recruit for each Immortlity stacked here.',
    masterStrike:
      'Stack this Strike next to Exodus as an "Immortality." Choose X-Men, X-Force, X-Factor, or Brotherhood. Each player KOs one of those Heroes or gains a Wound to the top of their deck.',
  }
);
