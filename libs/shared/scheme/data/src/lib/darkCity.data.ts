import { IScheme } from '@legendizer/shared/scheme/types';
import { GameSets } from '@legendizer/shared/gameSet/data';
import { DarkCityHenchmen } from "@legendizer/shared/henchmen/data";
import { defaultRules } from './defaultRules.data';
import { CardType } from '@legendizer/shared/base/types';
import { HeroClass } from "@legendizer/shared/hero/types";
import { DarkCityHeroes } from "@legendizer/shared/hero/data";

type SchemeNames =
  | 'CAPTURE_BABY_HOPE'
  | 'DETONATE_THE_HELICARRIER'
  | 'MASSIVE_EARTHQUAKE_GENERATOR'
  | 'ORGANIZED_CRIME_WAVE'
  | 'SAVE_HUMANITY'
  | 'STEAL_THE_WEAPONIZED_PLUTONIUM'
  | 'TRANSFORM_CITIZENS_INTO_DEMONS'
  | 'XCUTIONERS_SONG'

export const DarkCitySchemes: Record<SchemeNames, IScheme> = {
  CAPTURE_BABY_HOPE: {
    id: 'd4d841c0-5e46-4307-9436-39482fa5627b',
    name: 'Capture Baby Hope',
    setup: '8 Twists. Put a token on this Scheme to represent the baby, Hope Summers.',
    twist: 'If a Villain has the baby, that Villain escapes. Otherwise, the baby is captured by the closest Villain to the Villain Deck. (If there are no Villains, do nothing.)',
    specialRules: 'The Villain with the baby gets +4 Attack. If you defeat that Villain, rescue the baby to your Victory Pile (until the next Twist). The baby is worth 6 VP at the end of the game. If a Villain escapes with the baby, stack a Twist next to the Mastermind and return the baby to this Scheme card.',
    evilWins: 'When there are 3 Twists stacked next to the Mastermind.',
    rules: defaultRules,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.SCHEME
  },
  DETONATE_THE_HELICARRIER: {
    id: 'afe0c1bf-e25e-4321-9e60-6a864099ab32',
    name: 'Detonate the Helicarrier',
    setup: '8 Twists. 6 Heroes in the Hero Deck.',
    specialRules: 'Whenever a Hero is KO\'d from the HQ, turn that Hero face down on that HQ space, representing an Explosion on the Helicarrier. When an HQ space has 6 Explosions, that space is Destroyed and can\'t hold Heroes anymore.',
    twist: 'Stack this Twist next to the Scheme. Then for each Twist in that stack, KO the leftmost Hero in the HQ and immediately refill that space.',
    evilWins: 'When all HQ spaces are Destroyed or the Hero Deck runs out.',
    rules: {
      ...defaultRules,
      heroDeck: {
        numHeroes: {
          2: 6,
          3: 6,
          4: 6,
          5: 6
        }
      }
    },
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.SCHEME
  },
  MASSIVE_EARTHQUAKE_GENERATOR: {
    id: 'b5e7e6b9-d71e-4b97-9709-f34d4fb2a462',
    name: 'Massive Earthquake Generator',
    setup: '8 Twists.',
    twist: `Each player reveals a ${HeroClass.STRENGTH} Hero or KOs the top card of their deck.`,
    evilWins: 'When the number of non grey Heroes in the KO pile is 3 times the number of players.',
    rules: defaultRules,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.SCHEME
  },
  ORGANIZED_CRIME_WAVE: {
    id: 'c2a36b60-4a97-4e3d-9f7b-4a14750c1d24',
    name: 'Organized Crime Wave',
    setup: '8 Twists. Include 10 Maggia Goons as one of the Henchman Groups.',
    specialRules: 'Goons also have the ability "Ambush: Play another card from the Villain Deck."',
    twist: 'Each Goon in the city escapes. Shuffle all Goons from each players\' Victory Piles into the Villain Deck.',
    evilWins: 'When 5 Goons escape.',
    rules: defaultRules,
    requiredCards: {
      inVillainDeck: DarkCityHenchmen.MAGGIA_GOONS
    },
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.SCHEME
  },
  SAVE_HUMANITY: {
    id: '48b8e045-c061-4e3a-877b-36e72f6b71ef',
    name: 'Save Humanity',
    setup: '8 Twists. 24 Bystanders in the Hero Deck. (1 player: 12 Bystanders in the Hero Deck)',
    specialRules: 'You may spend 2 Recruit to rescue a Bystander from the HQ.',
    twist: `KO all Bystanders in the HQ. Then each player reveals an ${HeroClass.INSTINCT} Hero or KOs a Bystander from their Victory Pile.`,
    evilWins: 'When the number of Bystanders KO\'d and/or carried off is 4 times the number of players.',
    rules: {
      ...defaultRules,
      heroDeck: {
        ...defaultRules.heroDeck,
        numBystanders: {
          2: 24,
          3: 24,
          4: 24,
          5: 24
        }
      }
    },
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.SCHEME,
  },
  STEAL_THE_WEAPONIZED_PLUTONIUM: {
    id: '5c53d6e4-2b84-4fc1-81bc-750da3f899c7',
    name: 'Steal the Weaponized Plutonium',
    setup: '8 Twists representing Plutonium. Add an extra Villain Group.',
    twist: 'This Plutonium is captured by the closest Villain to the Villain Deck. If there are no Villains in the city, KO this Plutonium. Either way, play another card from the Villain Deck.',
    specialRules: 'Each Villain gets +1 Attack for each Plutonium it has. When a Villain with any Plutonium is defeated, shuffle that Plutonium back into the Villain Deck.',
    evilWins: 'When 4 Plutonium have been carried off by Villains.',
    rules: {
      ...defaultRules,
      villainDeck: {
        ...defaultRules.villainDeck,
        numVillainGroups: {
          2: 3,
          3: 4,
          4: 4,
          5: 5,
        }
      }
    },
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.SCHEME
  },
  TRANSFORM_CITIZENS_INTO_DEMONS: {
    id: '2b991381-f7fe-44a4-adb5-99d10f936bb6',
    name: 'Transform Citizens Into Demons',
    setup: ' 8 Twists. Villain Deck includes 14 extra Jean Grey cards and no Bystanders.',
    twist: 'Stack 5 Bystanders face down next to the Scheme. Bystanders stacked here are "Demon Goblin" Villains. They have 2 Attack. Players can fight these Demon Goblins to rescue them as Bystanders.',
    specialRules: 'Each Jean Grey card counts as a "Goblin Queen" Villain. It\'s worth 4 VP. It has Attack equal to its Cost plus the number of Demon Goblins stacked next to the Scheme.',
    evilWins: 'When 4 Goblin Queen cards escape.',
    rules: {
      ...defaultRules,
      villainDeck: {
        ...defaultRules.villainDeck,
        numBystanders: {
          2: 0,
          3: 0,
          4: 0,
          5: 0
        },
        numHeroes: {
          2: 1,
          3: 1,
          4: 1,
          5: 1
        }
      }
    },
    requiredCards: {
      inVillainDeck: DarkCityHeroes.JEAN_GREY
    },
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.SCHEME
  },
  XCUTIONERS_SONG: {
    id: '05f48d7a-aa59-46af-b0e4-6e8b54395c70',
    name: 'X-Cutioner\'s Song',
    setup: '8 Twists. Villain Deck includes 14 cards for an extra Hero and no Bystanders.',
    specialRules: 'Whenever you play a Hero from the Villain Deck, that Hero is captured by the closest enemy to the Villain Deck. Each Villain gets +2 Attack for each Hero it has. When you fight an enemy, gain all the Heroes captured by that enemy.',
    twist: 'KO all Heroes captured by enemies. Then play another card from the Villain Deck.',
    evilWins: '9 non grey Heroes are KO\'d or carried off.',
    rules: {
      ...defaultRules,
      villainDeck: {
        ...defaultRules.villainDeck,
        numBystanders: {
          2: 0,
          3: 0,
          4: 0,
          5: 0
        },
        numHeroes: {
          2: 1,
          3: 1,
          4: 1,
          5: 1
        }
      }
    },
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.SCHEME
  }
}
