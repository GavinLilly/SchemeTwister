import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { defaultRules } from "./defaultRules.data";
import { IScheme } from "./scheme.interface";

type SchemeNames =
  | 'AGE_OF_ULTRON'
  | 'PULL_EARTH_INTO_MEDIEVAL_TIMES'
  | 'TRANSFORM_COMMUTERS_INTO_GIANT_ANTS'
  | 'TRAP_HEROES_IN_THE_MICROVERSE';

export const AntMan: Record<SchemeNames, IScheme> = {
  AGE_OF_ULTRON: {
    id: 'bf5b5f7b-f7e8-4326-97a9-1f45267226b9',
    name: 'Age of Ultron',
    setup: '11 Twists. 4-5 Players: Add another Hero.',
    twist: `Put the top card of the Hero Deck next to the Scheme in an "Evolution" Pile. Then this Twist enters the city as an "Evolved Ultron" Villain.`,
    specialRules: `Evolved Ultrons have 4 Attack and are Empowered by each color in the Evolution pile. They're worth 6VP.`,
    evilWins: 'When 7 Evolved Ultrons are in the city and/or Escape Pile.',
    rules: {
      ...defaultRules,
      villainDeck: {
        ...defaultRules.villainDeck,
        numTwists: {
          2: 11,
          3: 11,
          4: 11,
          5: 11
        }
      },
      heroDeck: {
        ...defaultRules.heroDeck,
        numHeroes: {
          ...defaultRules.heroDeck.numHeroes,
          4: 6,
          5: 7
        }
      }
    },
    gameSet: GameSets.ANT_MAN,
    cardType: CardType.SCHEME
  },
  PULL_EARTH_INTO_MEDIEVAL_TIMES: {
    id: '34091fed-f614-48b0-bcac-5206f25d837e',
    name: 'Pull Earth into Medieval Times',
    setup: '9 twists.',
    twist: `1-6: Until the start of your next turn, all Villains and Mastermind everywhere have Chivalrous Duel.
7-9: Each player puts a Villains from the Victory Pile into the Escape Pile.`,
    evilWins: 'When 3 Villains per player have escaped.',
    rules: {
      ...defaultRules,
      villainDeck: {
        ...defaultRules.villainDeck,
        numTwists: {
          2: 9,
          3: 9,
          4: 9,
          5: 9
        }
      }
    },
    gameSet: GameSets.ANT_MAN,
    cardType: CardType.SCHEME
  },
  TRANSFORM_COMMUTERS_INTO_GIANT_ANTS: {
    id: '178c6dd1-1181-4e74-ad3e-0d368e7ad842',
    name: 'Transform Commuters into Giant Ants',
    setup: 'Twists equal to the number of players plus 6.',
    twist: `Stack this Twist next to the Scheme. Then for each Twist in that stack, put a Bystander face down next to the Mastermind as a 2A "Giant Ant" Villain. When you fight one, rescue it as a Bystander.`,
    evilWins: 'When there are 10 Giant Ants next to the Mastermind.',
    rules: {
      ...defaultRules,
      villainDeck: {
        ...defaultRules.villainDeck,
        numTwists: {
          2: 8,
          3: 9,
          4: 10,
          5: 11
        }
      }
    },
    gameSet: GameSets.ANT_MAN,
    cardType: CardType.SCHEME
  },
  TRAP_HEROES_IN_THE_MICROVERSE: {
    id: 'cd5baad9-5ec9-4b40-b8a7-a3b20ec560d0',
    name: 'Trap Heroes in the Microverse',
    setup: '11 Twists. Add all 14 cards for an extra Hero to the Villain Deck.',
    twist: `Play two cards from the Villain Deck.`,
    specialRules: 'Heroes in the Villain Deck are "Micro-Sized Villains with Attack equal to their printed cost. They have Size-Changing for their card color and no outher abilites while in the city. When you fight one, choose any player to gain it as a Hero.',
    evilWins: 'When 3 Villains per player have escaped or the Villain Deck runs out.',
    rules: {
      ...defaultRules,
      villainDeck: {
        ...defaultRules.villainDeck,
        numTwists: {
          2: 11,
          3: 11,
          4: 11,
          5: 11
        },
        numHeroes: {
          2: 1,
          3: 1,
          4: 1,
          5: 1
        }
      }
    },
    gameSet: GameSets.ANT_MAN,
    cardType: CardType.SCHEME
  }
}
