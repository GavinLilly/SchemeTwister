import { GameSets } from '../gamesets';
import { Henchmen } from '../henchmen';
import { IScheme, Scheme } from './scheme';

type SchemeNames =
  | 'BREAK_THE_PLANET_ASUNDER'
  | 'CYTOPLASM_SPIKE_INVASION'
  | 'FALL_OF_THE_HULKS'
  | 'GLADIATOR_PITS_OF_SAKAAR'
  | 'MUTATING_GAMMA_RAYS'
  | 'SHOOT_HULK_INTO_SPACE'
  | 'SUBJUGATE_WITH_OBEDIENCE_DISKS'
  | 'WORLD_WAR_HULK';

export const WorldWarHulk: Record<SchemeNames, IScheme> = {
  BREAK_THE_PLANET_ASUNDER: new Scheme(
    {
      id: '92fa1f10-1bee-468e-8a7c-6c008531e491',
      name: 'Break the Planet Asunder',
      setup: '9 Twists. 7 Heroes.',
      twist: `Stack this Twist next to the Scheme as a "Tectonic Break." Then KO each Hero from the HQ whose printed Attack is less than the number of Tectonic Breaks (no printed Attack counts as 0)`,
      evilWins: "When 25 non-grey Heroes are KO'd.",
      gameSet: GameSets.WORLD_WAR_HULK,
    },
    {
      villainDeck: {
        numTwists: 9,
      },
      heroDeck: {
        numHeroes: 7,
      },
    }
  ),
  CYTOPLASM_SPIKE_INVASION: new Scheme(
    {
      id: '19b6bae6-3122-4893-b066-afb5e189697f',
      name: 'Cytoplasm Spike Invasion',
      setup:
        '10 Twists. Shuffle together 20 Bystanders and 10 Cytoplasm Spike Henchmen as an "Infected Deck."',
      twist: `Reveal the top three cards of the Infected Deck. KO all Bystanders you revealed. All Spikes you revealed enter the city.`,
      evilWins:
        'When the KO pile and Escape Pile combine to have 18 Bystanders and/or Spikes.',
      requiredCards: {
        inAdditionalDeck: [Henchmen.WORLD_WAR_HULK.CYTOPLASM_SPIKES],
      },
      gameSet: GameSets.WORLD_WAR_HULK,
    },
    {
      villainDeck: {
        numTwists: 10,
      },
      additionalDeck: {
        name: 'Infected Deck',
        deck: {
          numBystanders: 20,
          numHenchmenGroups: 1,
        },
      },
    }
  ),
  FALL_OF_THE_HULKS: new Scheme(
    {
      id: '106067b6-7589-4ac8-afd5-31ca59d607ab',
      name: 'Fall of the Hulks',
      setup:
        '10 Twists. 6 Wounds per player in Wound Stack. Use exactly two Heroes with "Hulk" in their Hero Names.',
      twist: `Twist 3-6: Cross-Dimension Hulk Rampage.
Twist 7-10: Each player gains a Wound.`,
      evilWins: 'When the Wound Stack runs out.',
      gameSet: GameSets.WORLD_WAR_HULK,
    },
    {
      villainDeck: {
        numTwists: 10,
      },
    },
    {
      2: {
        villainDeck: {
          numWounds: 12,
        },
      },
      3: {
        villainDeck: {
          numWounds: 18,
        },
      },
      4: {
        villainDeck: {
          numWounds: 24,
        },
      },
      5: {
        villainDeck: {
          numWounds: 30,
        },
      },
    }
  ),
  GLADIATOR_PITS_OF_SAKAAR: new Scheme(
    {
      id: 'bcd13b7e-d66e-4365-afb6-8163958871f9',
      name: 'Gladiator Pits of Sakaar',
      setup: '6 Twists.',
      twist: `Until the start of your next turn, each player can only play cards from a single Team of their choice during their turn. (e.g. S.H.I.E.L.D., Avengers, X-Men, Warbound, etc.)`,
      evilWins:
        'When 2 Villains per player have escaped or the Villain Deck runs out.',
      gameSet: GameSets.WORLD_WAR_HULK,
    },
    {
      villainDeck: {
        numTwists: 6,
      },
    }
  ),
  MUTATING_GAMMA_RAYS: new Scheme(
    {
      id: 'c39541a2-9ba3-4491-b410-7ac6c4e8d8f9',
      name: 'Mutating Gamma Rays',
      setup:
        '7 Twists. Take 14 cards from an extra Hero with "Hulk" in its Hero Name. Put them in a face-up "Mutation Pile."',
      twist: `Twist 1-6: Each player in turn does the following Put a non-grey Hero from your hand into the Mutation Pile. Then you may put a different card name with the same cost from the Mutation Pile into your discard pile.
Twist 7: Evil Wins!`,
      evilWins: 'When 7 twists revealed',
      gameSet: GameSets.WORLD_WAR_HULK,
    },
    {
      villainDeck: {
        numTwists: 7,
      },
      additionalDeck: {
        name: 'Mutation Pile',
        deck: {
          numHeroes: 1,
        },
      },
    }
  ),
  SHOOT_HULK_INTO_SPACE: new Scheme(
    {
      id: 'f39ee139-c92a-4c88-a68e-888414b3b00c',
      name: 'Shoot Hulk into Space',
      setup:
        '8 Twists. Take 14 cards from an extra Hero with "Hulk" in its Hero Name. Shuffle them into a "Hulk Deck."',
      twist: `Put 2 cards from the Hulk Deck into a face-up "Prison Ship" stack next to the S.H.I.E.L.D. Officer Stack.`,
      evilWins:
        'When there are 10 cards in the Prison Ship or the Hulk Deck runs out.',
      specialRules: 'You may recruit the top card of the Prison Ship stack.',
      gameSet: GameSets.WORLD_WAR_HULK,
    },
    {
      additionalDeck: {
        name: 'Hulk Deck',
        deck: {
          numHeroes: 1,
        },
      },
    }
  ),
  SUBJUGATE_WITH_OBEDIENCE_DISKS: new Scheme(
    {
      id: '0954bf80-d875-4e60-9c92-ee7bc10190be',
      name: 'Subjugate with Obedience Disks',
      setup: '11 Twists.',
      twist: `Put this Twist under an HQ space as an "Obedience Disk." No space can have two more Obedience Disks than any other space.`,
      evilWins: 'When each HQ space has 2 Obedience Disks.',
      specialRules:
        'To recruit a Hero in the HQ, you must also pay ,[object Object],[object Object], for each Obedience Disk under it.',
      gameSet: GameSets.WORLD_WAR_HULK,
    },
    {
      villainDeck: {
        numTwists: 11,
      },
    }
  ),
  WORLD_WAR_HULK: new Scheme(
    {
      id: 'f1b02846-eda3-422d-a5d5-3f42e9f66445',
      name: 'World War Hulk',
      setup:
        '9 Twists. Put three additional Masterminds out of play, "Lurking." Each of the four Masterminds has two random Tactics.',
      twist: `Twist 1-8: Swap the current Mastermind with a random Lurking Mastermind.
Twist 9: Evil Wins!`,
      evilWins: 'When 9 twists revealed',
      specialRules:
        "When you defeat all of a Mastermind's Tactics, KO its face card and a random Lurking Mastermind enters play.",
      gameSet: GameSets.WORLD_WAR_HULK,
    },
    {
      villainDeck: {
        numTwists: 9,
      },
      additionalDeck: {
        name: 'Lurking',
        deck: {
          numMasterminds: 3,
        },
      },
    }
  ),
};
