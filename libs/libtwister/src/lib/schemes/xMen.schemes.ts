import { GameSets } from '../gamesets';
import { Henchmen } from '../henchmen';
import { Heroes } from '../heroes';
import { X_Men as X_MenKeywords } from '../keywords';
import { VillainGroups } from '../villains';

import { IScheme, Scheme } from './scheme';

type SchemeNames =
  | 'ALIEN_BROOD_ENCOUNTERS'
  | 'ANTI_MUTANT_HATRED'
  | 'THE_DARK_PHOENIX_SAGA'
  | 'HORROR_OF_HORRORS'
  | 'MUTANT_HUNTING_SUPER_SENTINELS'
  | 'NUCLEAR_ARMAGEDDON'
  | 'TELEVISED_DEATHTRAPS_OF_MOJOWORLD'
  | 'X_MEN_DANGER_ROOM_GOES_BERSERK';

export const X_Men: Record<SchemeNames, IScheme> = {
  ALIEN_BROOD_ENCOUNTERS: new Scheme(
    {
      id: 'af32abef-e791-484a-9014-8e3195095adb',
      name: 'Alien Brood Encounters',
      setup:
        '8 Twists. Add 10 Brood as extra Henchmen. No Bystanders in Villain Deck.',
      twist:
        'The player on your right gains this Twist as a "Brood Infection." When drawn, they KO it and gain 2 Wounds.',
      specialRules:
        'The Villain with the baby gets +4 Attack. If you defeat that Villain, rescue the baby to your Victory Pile (until the next Twist). The baby is worth 6 VP at the end of the game. If a Villain escapes with the baby, stack a Twist next to the Mastermind and return the baby to this Scheme card.',
      evilWins: 'When 3 Villains per player have escaped.',
      requiredCards: {
        inVillainDeck: [Henchmen.X_MEN.THE_BROOD],
      },
      gameSet: GameSets.X_MEN,
      keywords: [X_MenKeywords.Traps],
    },
    {
      villainDeck: {
        numBystanders: 0,
      },
    },
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
  ANTI_MUTANT_HATRED: new Scheme(
    {
      id: '8521af46-2544-4d35-88bd-62233d7bf3b8',
      name: 'Anti-Mutant Hatred',
      setup: '11 Twists. 30 Wounds.',
      specialRules:
        'At the start of your turn, for each Angry Mob in your hand, the player on your right gains a Wound and gains that Angry Mob.',
      twist: 'Put this Twist into your discard pile as an "Angry Mob."',
      evilWins: 'When the Wound Stack or Villain Deck runs out.',
      gameSet: GameSets.X_MEN,
    },
    {
      villainDeck: {
        numTwists: 11,
      },
      numWounds: 30,
    }
  ),
  THE_DARK_PHOENIX_SAGA: new Scheme(
    {
      id: 'a00a7d14-7a67-46e4-ae7a-2045e17262c6',
      name: 'The Dark Phoenix Saga',
      setup:
        '10 Twists. Include Hellfire Club as one of the Villain Groups. Add 14 Jean Grey Hero cards to the Villain Deck.',
      specialRules:
        'Jean Grey cards in the Villain Deck are Villains with attack equal to their cost, "Ambush: Play another Villain card" and "Fight: Gain this as a Hero."',
      twist: `Shuffle all Jean Grey cards from the KO pile and from all players' hands and discard piles into the Villain Deck.`,
      evilWins: 'When 5 Jean Grey cards have escaped.',
      requiredCards: {
        inVillainDeck: [
          VillainGroups.X_MEN.HELLFIRE_CLUB,
          Heroes.DARK_CITY.JEAN_GREY,
        ],
      },
      gameSet: GameSets.X_MEN,
    },
    {
      villainDeck: {
        numTwists: 10,
      },
    }
  ),
  HORROR_OF_HORRORS: new Scheme(
    {
      id: 'a75aed34-2428-45d0-88c9-b3a39862c148',
      name: 'Horror of Horrors',
      setup: '6 twists',
      twist: 'Twist 1-5: Play a random Horror.',
      evilWins: 'On twist 6',
      gameSet: GameSets.X_MEN,
    },
    {
      villainDeck: {
        numTwists: 6,
      },
    }
  ),
  MUTANT_HUNTING_SUPER_SENTINELS: new Scheme(
    {
      id: 'b1763754-65ad-4898-8a01-07e842052245',
      name: 'Mutant-Hunting Super Sentinels',
      setup:
        '9 Twists. Include 10 Sentinels as extra Henchmen (or substitute another Henchman group.)',
      specialRules:
        'All Sentinels get +1 Attack for each Sentinel Upgrade next to the Scheme.',
      twist: `Stack this Twist next to the Scheme as a "Sentinel Upgrade." Shuffle all Sentinels from players' Victory Piles into the Villain Deck. Play another card from the Villain Deck.`,
      evilWins: 'When 3 Sentinels have Escaped.',
      requiredCards: {
        inVillainDeck: [Henchmen.LEGENDARY.SENTINELS],
      },
      gameSet: GameSets.X_MEN,
    },
    {
      villainDeck: {
        numTwists: 9,
      },
    },
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
  NUCLEAR_ARMAGEDDON: new Scheme(
    {
      id: '44950273-9893-41ca-b262-e506ec5059b6',
      name: 'Nuclear Armageddon',
      setup: '5 Twists.',
      twist:
        'Destroy the city space closest to the Mastermind. Any Villain There escapes. Put this Twist there.',
      evilWins: 'When the city is destroyed.',
      gameSet: GameSets.X_MEN,
    },
    {
      villainDeck: {
        numTwists: 5,
      },
    }
  ),
  TELEVISED_DEATHTRAPS_OF_MOJOWORLD: new Scheme(
    {
      id: 'dbd34724-305b-4e40-8983-3478c34f443a',
      name: 'Televised Deathtraps of Mojoworld',
      setup: '11 Twists. 6 Wounds per player in Wound Stack.',
      twist: `Stack this Twist next to the Scheme as a "Deathtrap." This turn, you may pay 1 Attack for each Deathtrap stacked there. If you don't, each player gains a Wound.`,
      evilWins: 'When the Wound Stack or Villain Deck runs out.',
      gameSet: GameSets.X_MEN,
    },
    {
      villainDeck: {
        numTwists: 11,
      },
    },
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
  X_MEN_DANGER_ROOM_GOES_BERSERK: new Scheme({
    id: 'a5038882-127b-4399-b3af-5b9c5eca1bc1',
    name: 'X-Men Danger Room Goes Berserk',
    setup: '8 Twists',
    twist:
      'Trap! By End of Turn: You may pay 2 Recruit. If you do, shuffle this Twist back into the Villain Deck, then play a card from the Villain Deck. Or Suffer: Stack this Twist next to the scheme as an "Airborne Neurotoxin."',
    evilWins: 'When there are 5 Airborne Neurotoxins.',
    gameSet: GameSets.X_MEN,
    keywords: [X_MenKeywords.Traps],
  }),
};
