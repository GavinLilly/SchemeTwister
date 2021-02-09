import { GameSets } from '../gamesets';
import { Heroes } from '../heroes';
import { Teams } from '../teams';
import { IScheme, Scheme } from './scheme';

type SchemeNames =
  | 'DEADPOOL_KILLS_THE_MARVEL_UNIVERSE'
  | 'DEADPOOL_WANTS_A_CHIMICHANGA'
  | 'DEADPOOL_WRITES_A_SCHEME'
  | 'EVERYBODY_HATES_DEADPOOL';

export const Deadpool: Record<SchemeNames, IScheme> = {
  DEADPOOL_KILLS_THE_MARVEL_UNIVERSE: new Scheme(
    {
      id: '30ae9e44-e03e-41b8-b67e-6e368a2f271c',
      name: 'Deadpool Kills the Marvel Universe',
      setup:
        'Use Deadpool as one of the Heroes. 2 players Use 4 Heroes total. 1-3 players 6 Twists. 4-5 Players 5 Twists.',
      twist: `Reveal cards from the Hero Deck until you reveal a Deadpool card. KO all the cards you revealed.`,
      evilWins: 'When the Hero Deck runs out.',
      requiredCards: {
        inHeroDeck: [Heroes.DEADPOOL.DEADPOOL],
      },
      gameSet: GameSets.DEADPOOL,
    },
    undefined,
    {
      2: {
        heroDeck: {
          numHeroes: 4,
        },
        villainDeck: {
          numTwists: 6,
        },
      },
      3: {
        heroDeck: {
          numHeroes: 5,
        },
        villainDeck: {
          numTwists: 6,
        },
      },
      4: {
        heroDeck: {
          numHeroes: 5,
        },
        villainDeck: {
          numTwists: 5,
        },
      },
      5: {
        heroDeck: {
          numHeroes: 6,
        },
        villainDeck: {
          numTwists: 5,
        },
      },
    }
  ),
  DEADPOOL_WANTS_A_CHIMICHANGA: new Scheme(
    {
      id: 'de2d8afe-5342-48e8-95de-f0e42390f898',
      name: 'Deadpool Wants a Chimichanga',
      setup:
        '6 Twists. 12 total Bystanders in the Villain Deck. All Bystanders represent "Chimichangas." (They\'re Bystanders too). 3-5 players Add a Villain Group.',
      twist: `Put each Chimichanga from the city into the Escape Pile. Then, each player shuffles a Chimichanga from their Victory Pile back into the Villain Deck. Any player who cannot do so gains a Wound.`,
      evilWins: 'When 6 Chimichangas are in the Escape Pile.',
      gameSet: GameSets.DEADPOOL,
    },
    {
      villainDeck: {
        numTwists: 6,
        numBystanders: 12,
      },
    },
    {
      2: {
        villainDeck: {
          numVillainGroups: 2,
        },
      },
      3: {
        villainDeck: {
          numVillainGroups: 4,
        },
      },
      4: {
        villainDeck: {
          numVillainGroups: 4,
        },
      },
      5: {
        villainDeck: {
          numVillainGroups: 5,
        },
      },
    }
  ),
  DEADPOOL_WRITES_A_SCHEME: new Scheme({
    id: '77f7a81e-e83b-4587-b3b3-6733a27cb965',
    name: 'Deadpool Writes a Scheme',
    setup:
      "Hey, writing these doesn't seem so tough. Use the best Hero in the game Deadpool! Add 6 Twists of Lemon, shake vigorously, and I'll make it up as I go.",
    twist: `Twist 1: Everybody draw 1 card. Wait, are these supposed to be bad?
Twist 2: Anyone without a Deadpool in hand is doing it wrong -- discard 2 cards.
Twist 3: Play 3 cards from the Villain Deck. That sounds pretty bad, right?
Twist 4: Each Villain captures 4 Bystanders. Hey, I\'m not a balance expert.
Twist 5: Each player gains 5 Wounds. Is that a good number?
Twist 6: Deadpool wins 6 times! Wow, I\'m way better at this game than you.`,
    evilWins: 'When 6 twists revealed',
    requiredCards: {
      inHeroDeck: [Heroes.DEADPOOL.DEADPOOL],
    },
    gameSet: GameSets.DEADPOOL,
  }),
  EVERYBODY_HATES_DEADPOOL: new Scheme(
    {
      id: '7b2e6a16-23d0-4a66-ba88-bbe0c7b6906d',
      name: 'Everybody Hates Deadpool',
      setup: '6 Twists. Use at least 1 Mercs for Money Hero.',
      twist: `Everyone reveals their hand. Whoever reveals the fewest Mercs for Money cards (or tied for fewest), gains a Wound.`,
      evilWins: 'When 3 Villains per player have escaped.',
      specialRules:
        'All Villains have Revenge for their own Villain Groups. (If they already have Revenge, double it.)',
      requiredCards: {
        inHeroDeck: {
          team: Teams.MERCS_FOR_MONEY,
          numHeroes: 1,
        },
      },
      gameSet: GameSets.DEADPOOL,
    },
    {
      villainDeck: {
        numTwists: 6,
      },
    }
  ),
};
