import { ShortScheme } from '../../../model';

import { CHIVALROUS_DUEL, EMPOWERED, SIZE_CHANGING } from './antMan.keywords';

export const AGE_OF_ULTRON: ShortScheme = {
  id: 'bf5b5f7b-f7e8-4326-97a9-1f45267226b9',
  name: 'Age of Ultron',
  setup: '11 Twists. 4-5 Players: Add another Hero.',
  twist: `Put the top card of the Hero Deck next to the Scheme in an "Evolution" Pile. Then this Twist enters the city as an "Evolved Ultron" Villain.`,
  specialRules: `Evolved Ultrons have 4 Attack and are Empowered by each color in the Evolution pile. They're worth 6VP.`,
  evilWins: 'When 7 Evolved Ultrons are in the city and/or Escape Pile.',
  keywords: [EMPOWERED],
  meta: {
    numTwists: 11,
    rules: (rule, numPlayer) => {
      if (numPlayer === 4) {
        rule.heroDeck.numHeroes = 6;
      } else if (numPlayer === 5) {
        rule.heroDeck.numHeroes = 7;
      }

      return rule;
    },
  },
};

export const PULL_EARTH_INTO_MEDIEVAL_TIMES: ShortScheme = {
  id: '34091fed-f614-48b0-bcac-5206f25d837e',
  name: 'Pull Earth into Medieval Times',
  setup: '9 twists.',
  twist: `1-6: Until the start of your next turn, all Villains and Mastermind everywhere have Chivalrous Duel.
  7-9: Each player puts a Villains from the Victory Pile into the Escape Pile.`,
  evilWins: 'When 3 Villains per player have escaped.',
  keywords: [CHIVALROUS_DUEL],
  meta: { numTwists: 9 },
};

export const TRANSFORM_COMMUTERS_INTO_GIANT_ANTS: ShortScheme = {
  id: '178c6dd1-1181-4e74-ad3e-0d368e7ad842',
  name: 'Transform Commuters into Giant Ants',
  setup: 'Twists equal to the number of players plus 6.',
  twist: `Stack this Twist next to the Scheme. Then for each Twist in that stack, put a Bystander face down next to the Mastermind as a 2A "Giant Ant" Villain. When you fight one, rescue it as a Bystander.`,
  evilWins: 'When there are 10 Giant Ants next to the Mastermind.',
  meta: {
    numTwists: {
      '1': 7,
      '2': 8,
      '3': 9,
      '4': 10,
      '5': 11,
    },
  },
};

export const TRAP_HEROES_IN_THE_MULTIVERSE: ShortScheme = {
  id: 'cd5baad9-5ec9-4b40-b8a7-a3b20ec560d0',
  name: 'Trap Heroes in the Microverse',
  setup: '11 Twists. Add all 14 cards for an extra Hero to the Villain Deck.',
  twist: `Play two cards from the Villain Deck.`,
  specialRules:
    'Heroes in the Villain Deck are "Micro-Sized Villains with Attack equal to their printed cost. They have Size-Changing for their card color and no outher abilites while in the city. When you fight one, choose any player to gain it as a Hero.',
  evilWins:
    'When 3 Villains per player have escaped or the Villain Deck runs out.',
  keywords: [SIZE_CHANGING],
  meta: {
    numTwists: 11,
    rules: (rule) => {
      rule.villainDeck.numHeroes = 1;
      return rule;
    },
  },
};
