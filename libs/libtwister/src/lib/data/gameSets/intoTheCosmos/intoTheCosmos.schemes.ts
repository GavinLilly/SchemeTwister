import {
  DECK_TYPE,
  RequireHeroInDeckScheme,
  RequireHeroNameInHeroDeckScheme,
  SchemeDefinition,
} from '../../../model';

import { ADAM_WARLOCK } from './intoTheCosmos.heroes';
import { CONTEST_OF_CHAMPIONS, SHARDS } from './intoTheCosmos.keywords';
import { META } from './intoTheCosmos.meta';

export const THE_CONTEST_OF_CHAMPIONS = new SchemeDefinition({
  id: 'b437687c-df45-4608-8500-118817a6dc99',
  name: 'The Contest of Champions',
  setup:
    '11 Twists. Add an extra Hero. Put 11 random cards from the Hero Deck face up in a "Contest Row."',
  twist: `Twist 1-4: KO the leftmost card in the Contest Row, then Contest of Champions for that cards color(s). Each player that loses discards a card. If the Mastermind wins, put a Wound next to this Scheme as an "Evil Triumph."
Twist 5-8: Same effect, but in the Contest, Evil selects from 4 cards from the Hero Deck.
Twist 9-11: Same effect, but in the Contest, Evil selects from 6 cards from the Hero Deck.`,
  evilWins: 'When there are 6 Evil Triumphs.',
  keywords: [CONTEST_OF_CHAMPIONS],
  meta: {
    numTwists: 11,
    rules: (rule) => {
      rule.additionalDeck = {
        name: 'Contest Row',
        instruction: 'Put 11 random cards from the Hero Deck face up',
      };
      rule.heroDeck.numHeroes++;
      return rule;
    },
  },
  gameSet: META,
});

export const TURN_THE_SOUL_OF_ADAM_WARLOCK = new SchemeDefinition({
  id: 'f0b2149d-e84d-4c21-9418-2c05c60e7bfa',
  name: 'Turn the Soul of Adam Warlock',
  setup:
    '14 Twists (using 3 Wounds to represent extra Scheme Twists). Put 14 Adam Warlock Hero cards in a face up stack, ordered from lowest-cost on top, to highest-cost on the bottom.',
  twist: `Set aside the top card of the Adam Warlock stack. This turn you may "Purify" it by spending Attack equal to double its cost. If you do, choose a player to gain that card, then you rescue a Bystander, and you may KO one of your Heroes. If you don't do this by the end of your turn, put that Adam Warlock card into a "Soul's Corruption" stack next to the Scheme.`,
  evilWins: 'When there are 8 Souls Corruptions.',
  meta: {
    numTwists: 14,
    rules: (rule) => {
      rule.additionalDeck = {
        name: 'Adam Warlock stack',
        deck: {
          numHeroes: 1,
        },
      };
      return rule;
    },
    overrideScheme: {
      schemeType: RequireHeroInDeckScheme,
      params: [ADAM_WARLOCK, DECK_TYPE.ADDITIONAL],
    },
  },
  gameSet: META,
});

export const DESTROY_THE_NOVA_CORPS = new SchemeDefinition({
  id: '04575b4d-2d5e-4fee-99a1-80ba8835fe81',
  name: 'Destroy the Nova Corps',
  setup:
    "9 Twists. Exactly one Hero must be a Nova Hero. 1 player: 5 Heroes. Each player's starting deck adds 2 Wounds, 1 S.H.I.E.L.D. Officer, and a Nova card that costs 2.",
  twist: `Each player must reveal their hand and discard a Nova Centurion. Each player that discarded this way gains a Shard. Each player that didn't discard this way must KO a card from the S.H.I.E.L.D. Officer Stack.
Twist 6-9: Each player must KO a Nova Centurion from the S.H.I.E.L.D. Officer Stack or from their hand or discard pile.`,
  evilWins: "When there are 5 KO'd Nova Centurions per player.",
  specialRules:
    'All S.H.I.E.L.D. Officers and a Nova Heroes count as "Nova Centurions."',
  keywords: [SHARDS],
  meta: {
    numTwists: 9,
    rules: (rule, num) => {
      if (num === 1) {
        rule.heroDeck.numHeroes = 5;
      }
      return rule;
    },
    overrideScheme: {
      schemeType: RequireHeroNameInHeroDeckScheme,
      params: ['nova'],
    },
  },
  gameSet: META,
});

export const ANNIHILATION_CONQUEST = new SchemeDefinition({
  id: 'e40b97bb-1c46-4e0a-b7ba-d5dc7bb9af98',
  name: 'Annihilation: Conquest',
  setup: '11 Twists. Add an extra Hero.',
  twist: `Put this Twist next to the Scheme as a "Phalanx Conquest." The highest-cost Hero from the HQ enters the city as a "Phalanx-Infected" Villain.`,
  evilWins:
    'When there are 6 Phalanx-Infected in the city and/or Escape Pile, or the Villain Deck runs out.',
  specialRules:
    'Each "Phalanx-Infected" Villain has Attack equal to its cost, +1 Attack for each two Phalanx Conquests. If you fight one, choose a player to gain it as a Hero.',
  meta: {
    numTwists: 11,
    rules: (rule) => {
      rule.heroDeck.numHeroes++;
      return rule;
    },
  },
  gameSet: META,
});
