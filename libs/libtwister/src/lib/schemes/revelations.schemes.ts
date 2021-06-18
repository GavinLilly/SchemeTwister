import { GameSets } from '../gamesets';
import { Heroes } from '../heroes';
import { Teams } from '../teams';
import { IScheme, Scheme } from './scheme';

type SchemeNames =
  | 'EARTHQUAKE_DRAINS_THE_OCEAN'
  | 'HOUSE_OF_M'
  | 'SECRET_HYDRA_CORRUPTION'
  | 'THE_KORVAC_SAGA';

export const Revelations: Record<SchemeNames, IScheme> = {
  EARTHQUAKE_DRAINS_THE_OCEAN: new Scheme(
    {
      id: '16800076-996c-4cea-89f9-4d5bb6969557',
      name: 'Earthquake Drains the Ocean',
      setup: '11 Twists. Add an extra Villain Group.',
      twist: `The tide rushes in. This Scheme Transforms.`,
      evilWins:
        'When 3 Villains per player have escaped or the Villain Deck runs out.',
      specialRules:
        'The Low Tide, Bridge, and Streets city spaces no longer exist. The city has 3 spaces total. Put this Scheme on the Streets to mark the edge of the city. Villains in destroyed city spaces escape, starting from the left.',
      gameSet: GameSets.REVELATIONS,
    },
    {
      villainDeck: {
        numTwists: 11,
      },
    },
    {
      2: {
        villainDeck: {
          numVillainGroups: 3,
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
  HOUSE_OF_M: new Scheme(
    {
      id: '392eb5bd-261f-4bcd-a9bc-77137c3ae0e1',
      name: 'House of M',
      setup:
        '8 Twists. Hero Deck is 4 X-Men Heroes and 2 non-X-Men Heroes. (Or substitute another team for all X-Men icons on both sides.) Add 14 Scarlet Witch Hero cards to the Villain Deck.',
      twist: `KO all non-X-Men Heroes from the HQ. If there are at least 2 Scarlet Witch cards in the city, this Scheme `,
      evilWins:
        'When the number of non-grey Heroes in the KO pile is ten plus double the number of players.',
      specialRules:
        'Each Scarlet Witch in the city is a Villain with Attack equal to its cost +3. If you fight one, gain it as a Hero.',
      requiredCards: {
        inHeroDeck: {
          team: Teams.X_MEN,
          numHeroes: 4,
        },
        inVillainDeck: [Heroes.REVELATIONS.SCARLET_WITCH],
      },
      gameSet: GameSets.REVELATIONS,
    },
    {
      heroDeck: {
        numHeroes: 6,
      },
    }
  ),
  SECRET_HYDRA_CORRUPTION: new Scheme(
    {
      id: 'ba1c8117-bb39-48d6-ad47-09ead82f402c',
      name: 'Secret HYDRA Corruption',
      setup:
        '30 Officers in the S.H.I.E.L.D. Officer stack. 1 player 7 Twists. 2-3 players 9 Twists. 4-5 players 11 Twists.',
      twist: `For each Twist in the KO pile (including this one), put a card from the S.H.I.E.L.D. Officer stack next to this Scheme. Then this Scheme Transforms.`,
      evilWins:
        'When there are 15 Officers next to this Scheme or the S.H.I.E.L.D. Officer Stack runs out.',
      specialRules:
        'Officers stacked next to this Scheme are "Hydra Sympathizers." You may pay 3 Recruit to have the player of your choice gain one as a Hero.',
      gameSet: GameSets.REVELATIONS,
    },
    {
      numShieldOfficers: 30,
    },
    {
      2: {
        villainDeck: {
          numTwists: 9,
        },
      },
      3: {
        villainDeck: {
          numTwists: 9,
        },
      },
      4: {
        villainDeck: {
          numTwists: 11,
        },
      },
      5: {
        villainDeck: {
          numTwists: 11,
        },
      },
    }
  ),
  THE_KORVAC_SAGA: new Scheme({
    id: '2f845b77-435f-472e-9ed9-c501e08ff62d',
    name: 'The Korvac Saga',
    setup: '8 Twists.',
    twist: `Each player must discard down to four cards or KO a Bystander from their Victory Pile to "search for the Korvac Entity." This Scheme Transforms.
Twist: 2,4,6: Each player discards an Avengers Hero or gains a Wound. This Scheme Transforms.
Twist 8: Evil Wins!`,
    evilWins: 'When 8 twists revealed',
    specialRules:
      'This Scheme counts as a 19 Attack "Korvac" Villain worth 9VP. If you defeat Korvac, KO the Mastermind and all its Tactics.',
    gameSet: GameSets.REVELATIONS,
  }),
};
