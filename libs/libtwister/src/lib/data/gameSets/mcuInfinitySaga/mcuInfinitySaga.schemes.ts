import { ShortScheme } from '../../../model';

export const SACRIFICE_FOR_THE_SOUL_STONE: ShortScheme = {
  id: '8cbf2b72-0102-4742-83dd-c58b1e2d8497',
  name: 'Sacrifice for the Soul Stone',
  setup: 'Twists equal to the number of players plus 4',
  twist:
    'You may KO one of your non-grey Heroes and one of your grey Heroes to "Sacrifice for the Soul Stone". If you do, draw three cards, shuffle this Twist back into the Villain Deck, then play another card from the Villain Deck. If you don\'t, stack a Hero from the HQ next to the Mastermind, "Sacrificed for the Soul Stone".',
  evilWins: 'When the Mastermind has sacrificed 5 Heroes for the Soul Stone.',
  meta: {
    numTwists: {
      /* eslint-disable @typescript-eslint/naming-convention */
      '1': 5,
      '2': 6,
      '3': 7,
      '4': 8,
      '5': 9,
      /* eslint-enable @typescript-eslint/naming-convention */
    },
  },
};

export const HALVE_ALL_LIFE_IN_THE_UNIVERSE: ShortScheme = {
  id: 'dfd69212-df32-4856-a446-5ae9419aa510',
  name: 'Halve All Life in the Universe',
  setup: '5 twists',
  twist: `1,3,5: Choose 3 Heroes from the HQ and KO them
  2,3: Deal the Hero Deck into two facedown piles (as equally as possible). KO one of them`,
  evilWins: 'When the Hero Deck or Villain Deck runs out.',
  meta: {
    numTwists: 5,
  },
};

export const WARP_REALITY_INTO_A_TV_SHOW: ShortScheme = {
  id: '9ab3090a-9c52-4d22-a747-755beee80a89',
  name: 'Warp Reality into a TV Show',
  setup:
    '11 Twists. The rightmost city space represents a TV show from "the 50s". The space on it\'s left is "the 60s", then "the 70s". The city is only those 3 spaces. The HQ is only the 3 space beneath those. Move the Mastermind & Officer Deck to mark the city\'s left edge.',
  twist: `1-4: Another TV show (city space) appears on the left side of the city, representing the 80s, 90s, 2000s and 2010s. Another HQ space appears beneath it.
    5-11: Destroy the rightmost TV show and the HQ space beneath it. KO any Her in that HQ space. Push forward any Villain there. Move the Villain Deck & Hero Deck to mark the city's right egde.`,
  evilWins: 'When all TV is destroyed.',
  meta: { numTwists: 11 },
};

export const THE_TIME_HEIST: ShortScheme = {
  id: 'a7a4b7a3-4077-41d2-85cf-c982882e5e0d',
  name: 'The Time Heist',
  setup:
    '11 Twists. Use 4 Heroes in the Hero Deck plus 4 other Heroes to make a "Past Hero Deck". Above the board, make room for an alternate city called "The Past". It has the normal 5 spaces from Sewers to Bridge. The Past has it\'s own "Past HQ" filled by the "Past Hero Deck". To start, play as if "The Past" city, HQ and Hero Deck don\'t exist',
  twist: `1,3,5,7,9: Until the next Twist, move the Villain Deck next to "The Past" and play as if "The Past" city, HQ and Hero Deck exist, while the normal city, HQ and Hero Deck don't exist (Use the normal decks and space for everything except the city, HQ and Hero Deck)`,
  evilWins: 'On the 10th twist',
  meta: {
    numTwists: 11,
    rules: (rule) => {
      rule.heroDeck.numHeroes = 4;
      rule.additionalDeck = {
        name: 'Past Hero Deck',
        deck: {
          numHeroes: 4,
        },
      };

      return rule;
    },
  },
};
