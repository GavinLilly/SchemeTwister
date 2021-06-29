import { GameSets } from '../gamesets';
import { HeroClass } from '../enums';
import { VillainGroups } from '../villains';

import { IScheme, Scheme } from './scheme';

type SchemeNames =
  | 'THE_LEGACY_VIRUS'
  | 'MIDTOWN_BANK_ROBBERY'
  | 'NEGATIVE_ZONE_PRISON_BREAKOUT'
  | 'PORTALS_TO_THE_DARK_DIMENSION'
  | 'REPLACE_EARTHS_LEADERS_WITH_KILLBOTS'
  | 'SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS'
  | 'SUPER_HERO_CIVIL_WAR'
  | 'UNLEASH_THE_POWER_OF_THE_COSMIC_CUBE';

export const Legendary: Record<SchemeNames, IScheme> = {
  THE_LEGACY_VIRUS: new Scheme(
    {
      id: 'b9171c60-c3c3-4482-91e5-38ba1d2b3a6a',
      name: 'The Legacy Virus',
      setup: '8 Twists. Wound stack holds 6 Wounds per player.',
      twist: `Each player reveals a ${HeroClass.TECH} Hero or gains a Wound.`,
      evilWins: 'If the Wound stack runs out.',
      gameSet: GameSets.LEGENDARY,
    },
    undefined,
    {
      1: {
        numWounds: 6,
      },
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
  MIDTOWN_BANK_ROBBERY: new Scheme(
    {
      id: '7d06db7a-d3d0-48fe-be7a-dbe6a273ad03',
      name: 'Midtown Bank Robbery',
      setup: '8 Twists. 12 total Bystanders in the Villain Deck.',
      specialRules: 'Each Villain gets +1 Attack for each Bystander it has.',
      twist:
        'Any Villain in the Bank captures 2 Bystanders. Then play the top card of the Villain Deck.',
      evilWins: 'When 8 Bystanders are carried away by escaping Villains.',
      gameSet: GameSets.LEGENDARY,
    },
    {
      villainDeck: {
        numBystanders: 12,
      },
    }
  ),
  NEGATIVE_ZONE_PRISON_BREAKOUT: new Scheme(
    {
      id: '7ad1b3ed-efd8-4b2a-bd6a-ca500fc0f1af',
      name: 'Negative Zone Prison Breakout',
      setup: '8 Twists. Add an extra Henchman group to the Villain Deck.',
      twist: 'Play the top 2 cards of the Villain Deck.',
      evilWins: 'If 12 Villains escape.',
      gameSet: GameSets.LEGENDARY,
    },
    undefined,
    {
      1: {
        villainDeck: {
          numHenchmenGroups: 2,
        },
      },
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
  PORTALS_TO_THE_DARK_DIMENSION: new Scheme(
    {
      id: '9fd584fc-f6d5-4027-9a86-b1a2e11408de',
      name: 'Portals to the Dark Dimension',
      setup: '7 Twists. Each Twist is a Dark Portal.',
      twist: `1: Put the Dark Portal above the Mastermind. The Mastermind gets +1 Attack.
2-6: Put the Dark Portal in the leftmost city space that doesn"t yet have a Dark Portal. Villains in that city space get +1 Attack.
7: Evil Wins!`,
      evilWins: 'If 7 twists are revealed',
      specialRules: 'Each Twist is a Dark Portal.',
      gameSet: GameSets.LEGENDARY,
    },
    {
      villainDeck: {
        numTwists: 7,
      },
    }
  ),
  REPLACE_EARTHS_LEADERS_WITH_KILLBOTS: new Scheme(
    {
      id: '34543e98-d863-4395-a1ec-c6a190b2fb08',
      name: "Replace Earth's Leaders with Killbots",
      setup:
        '5 Twists. 3 additional Twists next to this Scheme. 18 total Bystanders in the Villain Deck.',
      specialRules:
        'Bystanders in the Villain Deck count as Killbot Villains, with Attack equal to the number of Twists next to this Scheme.',
      twist: 'Put the Twist next to this Scheme.',
      evilWins: 'If 5 "Killbots" escape.',
      gameSet: GameSets.LEGENDARY,
    },
    {
      villainDeck: {
        numTwists: 5,
        numBystanders: 18,
      },
      additionalDeck: {
        name: 'Killbot attack',
        deck: {
          numTwists: 3,
        },
      },
    }
  ),
  SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS: new Scheme(
    {
      id: '81a8b233-aa28-4258-833e-4cd9fe5d051a',
      name: 'Secret Invasion of the Skrull Shapeshifters',
      setup:
        '8 Twists. 6 Heroes. Skrull Villain Group required. Shuffle 12 random Heroes from the Hero Deck into the Villain Deck.',
      specialRules:
        "Heroes in the Villain Deck count as Skrull Villains with Attack equal to the Hero's Cost +2. If you defeat that Hero, you gain it.",
      twist:
        'The highest-cost Hero from the HQ moves into the Sewers as a Skrull Villain, as above.',
      evilWins: 'If 6 Heroes get into the Escaped Villains pile.',
      requiredCards: {
        inVillainDeck: [VillainGroups.LEGENDARY.SKRULLS],
      },
      gameSet: GameSets.LEGENDARY,
    },
    {
      heroDeck: {
        numHeroes: 6,
      },
    }
  ),
  SUPER_HERO_CIVIL_WAR: new Scheme(
    {
      id: '8d8eb57c-ec8a-402c-b0de-8afd8805f00f',
      name: 'Super Hero Civil War',
      setup:
        'For 2-3 players, use 8 Twists. For 4-5 players, use 5 Twists. If only 2 players, use only 4 Heroes in the Hero Deck.',
      twist: 'KO all the Heroes in the HQ.',
      evilWins: 'If the Hero Deck runs out.',
      gameSet: GameSets.LEGENDARY,
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
    id: '6fc89682-eb0f-45b4-88c7-5f0e3dc8fcc0',
    name: 'Unleash the Power of the Cosmic Cube',
    setup: '8 twists',
    twist: `1-4: Put the Twist next to the Scheme.
5-6: Each player gains a Wound.
7: Each player gains 3 Wounds.
8: Evil Wins!`,
    evilWins: 'If 8 twists are revealed',
    gameSet: GameSets.LEGENDARY,
  }),
};
