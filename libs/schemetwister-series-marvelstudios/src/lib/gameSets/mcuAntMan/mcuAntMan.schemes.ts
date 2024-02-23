import {
  SchemeDefinition,
  RequireCardInDeckScheme,
  RequireKeyword,
  RequireHero,
  DECK_TYPE,
  RequireCard,
  RequireVillainGroup,
} from '@schemetwister/libtwister';
import { SIZE_CHANGING } from '@schemetwister/schemetwister-series-marvel-common';

import { HEIST } from './mcuAntMan.keywords';
import { META } from './mcuAntMan.meta';
import { QUANTUM_REALM } from './mcuAntMan.villains';

export const AUCTION_SHRINK_TECH_TO_HIGHEST_BIDDER = new SchemeDefinition({
  id: 'a7241a65-9219-4e96-a563-bd28f3e70da2',
  name: 'Auction Shrink Tech to Highest Bidder',
  setup:
    "11 Twists. Set aside all 14 cards of a random extra Hero that has any Size-Changing cards as 'Shrink Tech'",
  twist:
    "Stack this Twist next to the Scheme as a 'Hostile Bid'. Reveal a random Hero from the Shrink Tech. This turn you may recruit that Hero, but it costs 1 buy more for each Hostile Bid. If you recruit it, either KO that Hero or choose any player to gain it. If you don't recruit it by the end of this turn, stack it next to the Scheme as 'Controlled by Arms Dealers'",
  evilWins: 'When 8 Shrink Tech cards are Controlled by Arms Dealers',
  meta: {
    numTwists: 11,
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireKeyword(SIZE_CHANGING),
        new RequireHero(),
        DECK_TYPE.additional,
      ],
    },
    rules: (rule) => {
      rule.additionalDeck.push({
        name: 'Shrink Tech',
        deck: { numHeroes: 1 },
      });

      return rule;
    },
  },
  gameSet: META,
});

export const SAFEGUARD_DARK_SECRETS = new SchemeDefinition({
  id: '324fdbef-ba54-4c99-b6ff-6a7368c52ea9',
  name: 'Safeguard Dark Secrets',
  setup: '5 Twists',
  twist:
    'Stack this Twist next to the Mastermind as a "Secret", then play another card from the Villain Deck',
  specialRules: `You have the ability "${HEIST.name}: You get +1 buy. Shuffle a Secret from next to the Mastermind into the Villain Deck`,
  evilWins: 'When the Mastermind has 5 Secrets',
  meta: { numTwists: 5 },
  gameSet: META,
});

export const ESCAPE_AN_IMPRISONING_DIMENSION = new SchemeDefinition({
  id: '4c0ca77b-9db0-494c-ade8-44ae7a5c8f5b',
  name: 'Escape an Imprisoning Dimension',
  setup: '5 Twists',
  specialRules:
    'During your turn, any number of times, you may spend 1 attack to "Seal" an unsealed city space or unsealed Mastermind space by putting a card above it from the Wound Stack',
  twist:
    'If any city space with a Villain in it or the Mastermind space is not "sealed", stack this Twist next to the Mastermind as a "Discovered Escape Route". Otherwise, return 3 Seals from above spaces to the Wound Deck, shuffle this Twist into the Villain Deck and play another card from the Villain Deck',
  evilWins: 'When 3 Escape Routers have been discovered',
  meta: { numTwists: 5 },
  gameSet: META,
});

export const SIPHON_ENERGY_FROM_THE_QUANTUM_REALM = new SchemeDefinition({
  id: '16bab040-12a0-4c7b-8cae-126d6e4ff019',
  name: 'Siphon Energy from the Quantum Realm',
  setup:
    '9 Twists. Set aside the "Quantum Realm" Villain Group as an extra group. Shuffle its Ambush Scheme in the Villain Deck',
  twist:
    'Stack this Twist next to the Mastermind as a "Quantum Siphon". Put a random set aside Quantum Realm Villain on the Siphons. Do its Amsbush effect. If there was already a Quantum Realm Villain on the Siphons, KO it.',
  specialRules:
    'You may fight Villains on the Quantum Siphons. They get +1 attack for each two Siphons',
  evilWins:
    "When 4 Quantum Realm Villains have been KO'd or there are 9 Quantum Siphons",
  meta: {
    numTwists: 9,
    rules: (rule) => {
      rule.additionalDeck.push({
        name: 'Quantum Realm Villains',
        deck: { numVillainGroups: 1 },
      });
      return rule;
    },
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireCard(QUANTUM_REALM),
        new RequireVillainGroup(),
        DECK_TYPE.villain,
      ],
    },
  },
  gameSet: META,
});
