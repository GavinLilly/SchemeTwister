import { GameSets } from '../gamesets';
import { HeroClass } from '../heroes';
import { VillainGroups } from '../villains';
import { IScheme, Scheme } from './scheme';

type SchemeNames =
  | 'ASGARD_UNDER_SIEGE'
  | 'DESTROY_THE_CITIES_OF_EARTH'
  | 'ENSLAVE_MINDS_WITH_THE_CHITAURI_SCEPTER'
  | 'INVADE_ASGARD'
  | 'RADIOACTIVE_PALLADIUM_POISONING'
  | 'REPLACE_EARTHS_LEADERS_WITH_HYDRA'
  | 'SUPER_HERO_CIVIL_WAR'
  | 'UNLEASH_THE_POWER_OF_THE_COSMIC_CUBE';

export const MarvelStudios: Record<SchemeNames, IScheme> = {
  ASGARD_UNDER_SIEGE: new Scheme(
    {
      id: '8d4bc6fd-0fb5-448e-9799-1608a2e8dbc2',
      name: 'Asgard Under Siege',
      setup: '8 Twists. Add an extra Henchman group to the Villain Deck.',
      twist: `Play the top 2 cards of the Villain Deck.`,
      evilWins: 'If 12 Villains escape.',
      gameSet: GameSets.MARVEL_STUDIOS,
    },
    undefined,
    {
      2: {
        villainDeck: {
          numHenchmenGroups: 2,
        },
      },
      3: {
        villainDeck: {
          numHenchmenGroups: 2,
        },
      },
      4: {
        villainDeck: {
          numHenchmenGroups: 3,
        },
      },
      5: {
        villainDeck: {
          numHenchmenGroups: 3,
        },
      },
    }
  ),
  DESTROY_THE_CITIES_OF_EARTH: new Scheme(
    {
      id: 'c61d6a77-7720-4eb0-803d-973ac9ce7edc',
      name: 'Destroy the Cities of Earth!',
      setup: '8 Twists. 12 Bystanders in the Villain Deck.',
      twist: `Any Villain in the Bank captures 2 Bystanders. Then play the top card of the Villain Deck.`,
      evilWins: 'When 8 Bystanders are carried away by escaping Villains.',
      specialRules: 'Each Villain gets +1 Attack for each Bystander it has.',
      gameSet: GameSets.MARVEL_STUDIOS,
    },
    {
      villainDeck: {
        numBystanders: 12,
      },
    }
  ),
  ENSLAVE_MINDS_WITH_THE_CHITAURI_SCEPTER: new Scheme(
    {
      id: 'd8a770ea-8fe0-4cc4-a5c6-912b1b4b2501',
      name: 'Enslave Minds with the Chitauri Scepter',
      setup:
        '8 Twists. 6 Heroes. Chitauri Villain Group required. Shuffle 12 random Heroes from the Hero Deck into the Villain Deck.',
      twist: `The highest-cost Hero from the HQ moves into the Sewers as an "Enslaved" Villain as above.`,
      evilWins: 'If 6 Heroes get into the Escaped Villains pile.',
      specialRules:
        'Heroes in the Villain Deck count as "Enslaved" Villains with Attack equal to the Hero\'s Cost +2. If you defeat that Hero, you gain it.',
      requiredCards: {
        inVillainDeck: [VillainGroups.MARVEL_STUDIOS.CHITAURI],
      },
      gameSet: GameSets.MARVEL_STUDIOS,
    },
    {
      heroDeck: {
        numHeroes: 6,
      },
    }
  ),
  INVADE_ASGARD: new Scheme(
    {
      id: '7c057e6d-9838-4bf3-ba50-78ce6f05e8fa',
      name: 'Invade Asgard',
      setup: '7 Twists. Each Twist is a Dark Portal.',
      twist: `Put the Dark Portal above the Mastermind. The Mastermind gets +1 Attack.
Twists 2-6: Put the Dark Portal in the leftmost city space that doesn\'t yet have a Dark Portal. Villains in that city space get ,[object Object],[object Object],.
Twist 7: Evil Wins!`,
      evilWins: 'When 7 twists revealed',
      gameSet: GameSets.MARVEL_STUDIOS,
    },
    {
      villainDeck: {
        numTwists: 7,
      },
    }
  ),
  RADIOACTIVE_PALLADIUM_POISONING: new Scheme(
    {
      id: 'c9e29df3-9cc0-4c1b-a9be-4e9abc5ee0da',
      name: 'Radioactive Palladium Poisoning',
      setup: '8 Twists. Wound stack holds 6 Wounds per player.',
      twist: `Each player reveals a ${HeroClass.TECH} Hero or gains a Wound.`,
      evilWins: 'If the Wound stack runs out.',
      gameSet: GameSets.MARVEL_STUDIOS,
    },
    undefined,
    {
      2: {
        numWounds: 12,
      },
      3: {
        numWounds: 18,
      },
      4: {
        numWounds: 24,
      },
      5: {
        numWounds: 30,
      },
    }
  ),
  REPLACE_EARTHS_LEADERS_WITH_HYDRA: new Scheme(
    {
      id: 'ac8001c3-cd45-4d5e-a8e0-930e80874ec2',
      name: "Replace Earth's Leaders with HYDRA",
      setup:
        '5 Twists. 3 additional Twists next to this Scheme. 18 total Bystanders in the Villain Deck.',
      twist: `Put the Twist next to this Scheme.`,
      evilWins: 'If 5 "Infiltrators" escape.',
      specialRules:
        'Bystanders in the Villain Deck count as "Infiltrator" Villains, with Attack equal to the number of Twists next to this Scheme.',
      gameSet: GameSets.MARVEL_STUDIOS,
    },
    {
      villainDeck: {
        numTwists: 5,
        numBystanders: 18,
      },
      additionalDeck: {
        name: 'Infiltrator attack',
        deck: {
          numTwists: 3,
        },
      },
    }
  ),
  SUPER_HERO_CIVIL_WAR: new Scheme(
    {
      id: '443832df-675d-44bc-8d27-5d8c0ee290be',
      name: 'Super Hero Civil War',
      setup:
        'For 2-3 players, use 8 Twists. For 4-5 players, use 5 Twists. If only 2 players, use only 4 Heroes in the Hero Deck.',
      twist: 'KO all the Heroes in the HQ.',
      evilWins: 'If the Hero Deck runs out.',
      gameSet: GameSets.MARVEL_STUDIOS,
    },
    undefined,
    {
      2: {
        heroDeck: {
          numHeroes: 4,
        },
      },
      4: {
        villainDeck: {
          numTwists: 5,
        },
      },
      5: {
        villainDeck: {
          numTwists: 5,
        },
      },
    }
  ),
  UNLEASH_THE_POWER_OF_THE_COSMIC_CUBE: new Scheme({
    id: '173ccd3c-09eb-4313-bc71-d650bc32d840',
    name: 'Unleash the Power of the Cosmic Cube',
    setup: '8 twists',
    twist: `1-4: Put the Twist next to the Scheme.
5-6: Each player gains a Wound.
7: Each player gains 3 Wounds.
8: Evil Wins!`,
    evilWins: 'If 8 twists are revealed',
    gameSet: GameSets.MARVEL_STUDIOS,
  }),
};
