import { SchemeDefinition } from '../../../model';
import { DARK_MEMORIES } from '../revelations/revelations.keywords';
import { UNDERCOVER } from '../shield/shield.keywords';
import { DODGE } from '../villains/villains.keywords';

import { UNLEASH } from './blackWidow.keywords';
import { META } from './blackWidow.meta';

export const CORRUPT_THE_SPY_AGENCIES = new SchemeDefinition({
  id: '92a8a127-c651-4e50-9bcd-8e75aeb031de',
  name: 'Corrupt the Spy Agencies',
  setup: '7 Twists',
  twist: `1-6: Each player sends one of their non-grey Heroes ${UNDERCOVER.name}. Then each player may ${UNLEASH.name} a Hero from ${UNDERCOVER.name} with a lower cost than the one that player just sent ${UNDERCOVER.name}.
7: Evil Wins!`,
  evilWins: 'On 7 twists',
  meta: { numTwists: 7 },
  keywords: [UNDERCOVER, UNLEASH],
  gameSet: META,
});

export const TRAIN_BLACK_WIDOWS_IN_THE_RED_ROOM = new SchemeDefinition({
  id: 'b1d67b24-45a6-4ede-a82b-e86aedfacea4',
  name: 'Train Black Widows in the Red Room',
  setup:
    '8 Twists, minus 1 Twist per player. Add 8 S.H.I.E.L.D. Officers to the Villain Deck',
  twist:
    'A Black Widow initiate enters the city from the Officer Stack. Player another card from the Villain Deck.',
  specialRules: `Officers in the Villain Deck and city are "Black Widow Initiate" Villains with 3+ attack and "${DARK_MEMORIES.name}. Fight: Gain this as an Officer (without ${DARK_MEMORIES.name}) or send it ${UNDERCOVER.name}"`,
  evilWins:
    'When there are 3 Villains per player in the Escape Pile or the Villain Deck runs out.',
  meta: {
    numTwists: {
      '1': 7,
      '2': 6,
      '3': 5,
      '4': 4,
      '5': 3,
    },
    rules: (rule) => {
      rule.villainDeck.numShieldOfficers = 8;
      return rule;
    },
  },
  keywords: [DARK_MEMORIES, UNDERCOVER],
  gameSet: META,
});

export const SNIPER_RIFLE_ASSASSINS = new SchemeDefinition({
  id: '18c8046e-e21e-4b37-ae14-43f20dd17aa8',
  name: 'Sniper Rifle Assassins',
  setup: '11 Twists, minus 1 Twist per player',
  twist: `Each player must ${DODGE.name} with a Hero from their hand, revealing the card they drew. KO each non-grey Hero drawn this way`,
  evilWins: 'When there are four non-grey Heroes per player in the KO pile.',
  meta: {
    numTwists: {
      '1': 10,
      '2': 9,
      '3': 8,
      '4': 7,
      '5': 6,
    },
  },
  keywords: [DODGE],
  gameSet: META,
});

export const FRAME_HEROES_FOR_MURDER = new SchemeDefinition({
  id: '98eb4b69-ba00-41b7-8812-755b2d88cbb3',
  name: 'Frame Heroes for Murder',
  setup: '7 Twists, 6 Heroes.',
  twist: `1-6: Stack a card from the HQ next to the Scheme as "Incriminating Evidence" that has a different cost than any card already in that stack.
7: Add any card from the HQ to the Incriminating Evidence`,
  evilWins: 'When there are 5 pieces of Incriminating Evidence.',
  meta: {
    numTwists: 7,
    rules: (rule) => {
      rule.heroDeck.numHeroes = 6;
      return rule;
    },
  },
  gameSet: META,
});
