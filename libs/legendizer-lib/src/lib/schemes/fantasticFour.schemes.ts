import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { defaultRules } from "./defaultRules.data";
import { IScheme } from "./scheme.interface";

type SchemeNames =
  | 'BATHE_THE_EARTH_IN_COSMIC_RAYS'
  | 'FLOOD_THE_PLANET_WITH_MELTED_GLACIERS'
  | 'INVINCIBLE_FORCE_FIELD'
  | 'PULL_REALITY_INTO_THE_NEGATIVE_ZONE';

export const FantasticFour: Record<SchemeNames, IScheme> = {
  BATHE_THE_EARTH_IN_COSMIC_RAYS: {
    id: 'f1c60929-2ba6-4f35-b0fe-dc21a04fc32a',
    name: 'Bathe the Earth in Cosmic Rays',
    setup: '6 Twists.',
    twist: `Each player in turn does the following: Reveal your hand. KO one of your non-grey Heroes. Choose a Hero from the HQ with the same or lower cost and put it into your hand.`,
    evilWins: 'When the number of non-grey Heroes in the KO pile is six times the number of players.',
    rules: {
      ...defaultRules,
      villainDeck: {
        ...defaultRules.villainDeck,
        numTwists: {
          2: 6,
          3: 6,
          4: 6,
          5: 6
        }
      }
    },
    gameSet: GameSets.FANTASTIC_FOUR,
    cardType: CardType.SCHEME
  },
  FLOOD_THE_PLANET_WITH_MELTED_GLACIERS: {
    id: '069749f1-d285-45c9-b7db-c2b6ca6881d5',
    name: 'Flood the Planet with Melted Glaciers',
    setup: '8 twists.',
    twist: `Stack the Twist next to the Scheme as "Rising Waters." Then KO each Hero from the HQ whose cost is less than or equal to the number of Rising Waters in that stack.`,
    evilWins: 'When 20 non-grey Heroes are KO\'d.',
    rules: defaultRules,
    gameSet: GameSets.FANTASTIC_FOUR,
    cardType: CardType.SCHEME
  },
  INVINCIBLE_FORCE_FIELD: {
    id: '0d4dd374-ad11-49cf-a877-61fea85799f1',
    name: 'Invincible Force Field',
    setup: '7 twists',
    twist: `Stack this Twist next to the Mastermind as a "Force Field."`,
    specialRules: 'To fight the Mastermind, you must also spend 1 Recruit or 1 Attack for each Force Field next to them.',
    evilWins: 'On the 7th twist',
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
    gameSet: GameSets.FANTASTIC_FOUR,
    cardType: CardType.SCHEME
  },
  PULL_REALITY_INTO_THE_NEGATIVE_ZONE: {
    id: '3555b355-604b-48b4-9372-2063d476450a',
    name: 'Pull Reality Into the Negative Zone',
    setup: '8 Twists.',
    twist: `2, 4, and 6: Until the next Twist, Enemies cost Recruit to fight and Heroes cost Attack to recruit.`,
    evilWins: 'On the 7th twist',
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
    gameSet: GameSets.FANTASTIC_FOUR,
    cardType: CardType.SCHEME
  }
}
