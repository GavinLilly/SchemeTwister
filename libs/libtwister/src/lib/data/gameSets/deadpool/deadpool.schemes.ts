import {
  IOverrideScheme,
  RequireHeroNameInHeroDeckScheme,
  RequireTeamInHeroDeckScheme,
  SchemeDefinition,
} from '../../../model';
import { MERCS_FOR_MONEY } from '../../teams';

import { REVENGE } from './deadpool.keywords';
import { META } from './deadpool.meta';

const includeDeadpool: IOverrideScheme = {
  schemeType: RequireHeroNameInHeroDeckScheme,
  params: ['deadpool'],
};

export const DEADPOOL_KILLS_THE_MARVEL_UNIVERSE = new SchemeDefinition({
  id: '30ae9e44-e03e-41b8-b67e-6e368a2f271c',
  name: 'Deadpool Kills the Marvel Universe',
  setup:
    'Use Deadpool as one of the Heroes. 2 players Use 4 Heroes total. 1-3 players 6 Twists. 4-5 Players 5 Twists.',
  twist: `Reveal cards from the Hero Deck until you reveal a Deadpool card. KO all the cards you revealed.`,
  evilWins: 'When the Hero Deck runs out.',
  meta: {
    numTwists: {
      '1': 6,
      '2': 6,
      '3': 6,
      '4': 5,
      '5': 5,
    },
    rules: (rule, num) => {
      if (num === 2) {
        rule.heroDeck.numHeroes = 4;
      }
      return rule;
    },
    overrideScheme: includeDeadpool,
  },
  gameSet: META,
});

export const DEADPOOL_WANTS_ACHIMICHANGA = new SchemeDefinition({
  id: 'de2d8afe-5342-48e8-95de-f0e42390f898',
  name: 'Deadpool Wants a Chimichanga',
  setup: `6 Twists. 12 total Bystanders in the Villain Deck. All Bystanders represent "Chimichangas." (They're Bystanders too). 3-5 players Add a Villain Group.`,
  twist: `Put each Chimichanga from the city into the Escape Pile. Then, each player shuffles a Chimichanga from their Victory Pile back into the Villain Deck. Any player who cannot do so gains a Wound.`,
  evilWins: 'When 6 Chimichangas are in the Escape Pile.',
  meta: {
    numTwists: 6,
    rules: (rule, num) => {
      rule.villainDeck.numBystanders = 12;
      if ([3, 4, 5].includes(num)) {
        rule.villainDeck.numVillainGroups++;
      }
      return rule;
    },
  },
  gameSet: META,
});

export const DEADPOOL_WRITES_ASCHEME = new SchemeDefinition({
  id: '77f7a81e-e83b-4587-b3b3-6733a27cb965',
  name: 'Deadpool Writes a Scheme',
  setup:
    "Hey, writing these doesn't seem so tough. Use the best Hero in the game Deadpool! Add 6 Twists of Lemon, shake vigorously, and I'll make it up as I go.",
  twist: `Twist 1: Everybody draw 1 card. Wait, are these supposed to be bad?
Twist 2: Anyone without a Deadpool in hand is doing it wrong -- discard 2 cards.
Twist 3: Play 3 cards from the Villain Deck. That sounds pretty bad, right?
Twist 4: Each Villain captures 4 Bystanders. Hey, I'm not a balance expert.
Twist 5: Each player gains 5 Wounds. Is that a good number?
Twist 6: Deadpool wins 6 times! Wow, I'm way better at this game than you.`,
  evilWins: 'When 6 twists revealed',
  meta: {
    numTwists: 6,
    overrideScheme: includeDeadpool,
  },
  gameSet: META,
});

export const EVERYBODY_HATES_DEADPOOL = new SchemeDefinition({
  id: '7b2e6a16-23d0-4a66-ba88-bbe0c7b6906d',
  name: 'Everybody Hates Deadpool',
  setup: '6 Twists. Use at least 1 Mercs for Money Hero.',
  twist: `Everyone reveals their hand. Whoever reveals the fewest Mercs for Money cards (or tied for fewest), gains a Wound.`,
  evilWins: 'When 3 Villains per player have escaped.',
  specialRules:
    'All Villains have Revenge for their own Villain Groups. (If they already have Revenge, double it.)',
  keywords: [REVENGE],
  meta: {
    numTwists: 6,
    overrideScheme: {
      schemeType: RequireTeamInHeroDeckScheme,
      params: [MERCS_FOR_MONEY],
    },
  },
  gameSet: META,
});
