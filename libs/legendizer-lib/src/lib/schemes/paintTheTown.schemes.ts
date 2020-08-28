import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { VillainGroups } from '../villains';
import { defaultRules } from "./defaultRules.data";
import { IScheme } from "./scheme.interface";

type SchemeNames =
  | 'THE_CLONE_SAGA'
  | 'INVADE_THE_DAILY_BUGLE_NEWS_HQ'
  | 'SPLICE_HUMANS_WITH_SPIDER_DNA'
  | 'WEAVE_A_WEB_OF_LIES';

export const PaintTheTownRed: Record<SchemeNames, IScheme> = {
  THE_CLONE_SAGA: {
    id: '650a925c-d835-4a42-ac59-9a54e2ee3e08',
    name: 'The Clone Saga',
    setup: '8 Twists.',
    twist: `Each player reveals two non-grey Heroes with the same card name or discards down to 3 cards.`,
    evilWins: 'When 2 Villains with the same card name have escaped or the Villain Deck runs out',
    rules: defaultRules,
    gameSet: GameSets.PAINT_THE_TOWN_RED,
    cardType: CardType.SCHEME
  },
  INVADE_THE_DAILY_BUGLE_NEWS_HQ: {
    id: 'bb4f86d6-8002-4bb4-abde-6b0e90ad132a',
    name: 'Invade the Daily Bugle News HQ',
    setup: '8 Twists. Add 6 extra Henchmen from a single Henchman Group to the Hero Deck.',
    specialRules: 'You can fight Villains in the HQ.',
    twist: `KO a Hero from the HQ. Put the highest-Attack Villain from the city into that HQ space.`,
    evilWins: 'When there are 5 Villains in the HQ.',
    rules: {
      ...defaultRules,
      heroDeck: {
        ...defaultRules.heroDeck,
        numHenchmen: {
          2: 1,
          3: 1,
          4: 1,
          5: 1
        }
      }
    },
    gameSet: GameSets.PAINT_THE_TOWN_RED,
    cardType: CardType.SCHEME
  },
  SPLICE_HUMANS_WITH_SPIDER_DNA: {
    id: '89a783c0-006e-49b2-91fd-8c7cf4d314d3',
    name: 'Splice Humans with Spider DNA',
    setup: '8 Twists. Include Sinister Six as one of the Villain Groups.',
    specialRules: 'Sinister Six Villains get +3 Attack. All Hero cards have Wall-Crawl.',
    twist: `Each player puts a Sinister Six Villain from their Victory Pile on top of the Villain Deck. No matter how many players did so, play a single card from the Villain Deck.`,
    evilWins: 'When 6 Sinister Six Villains have escaped or the Villain Deck runs out.',
    rules: defaultRules,
    requiredCards: {
      inVillainDeck: {
        villains: [VillainGroups.PAINT_THE_TOWN_RED.SINISTER_SIX]
      }
    },
    gameSet: GameSets.PAINT_THE_TOWN_RED,
    cardType: CardType.SCHEME
  },
  WEAVE_A_WEB_OF_LIES: {
    id: '395e0e98-ad58-48e9-aa4a-5d20024ab848',
    name: 'Weave a Web of Lies',
    setup: '7 twists',
    twist: `Stack this Twist next to the Mastermind.`,
    specialRules: 'Whenever you defeat a Villain, you may pay 1 Recruit. If you do, rescue a Bystander. You can\'t fight the Mastermind unless you have a Bystander in your Victory Pile for each Twist next to the Mastermind.',
    evilWins: 'When there are 7 twists next to the Mastermind',
    rules: {
      ...defaultRules,
      villainDeck: {
        ...defaultRules.villainDeck,
        numTwists: {
          2: 7,
          3: 7,
          4: 7,
          5: 7
        }
      }
    },
    gameSet: GameSets.PAINT_THE_TOWN_RED,
    cardType: CardType.SCHEME
  }
}
