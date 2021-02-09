import { GameSets } from '../gamesets';
import { IScheme, Scheme } from './scheme';

type SchemeNames =
  | 'BRAINWASH_THE_MILITARY'
  | 'CHANGE_THE_OUTCOME_OF_WWII'
  | 'GO_BACK_IN_TIME_TO_SLAY_HEROES_ANCESTORS'
  | 'THE_UNBREAKABLE_ENIGMA_CODE';

export const CaptainAmerica: Record<SchemeNames, IScheme> = {
  BRAINWASH_THE_MILITARY: new Scheme(
    {
      id: '82049898-13fb-4792-a8fc-b1b8a92b7ac2',
      name: 'Brainwash the Military',
      setup: '7 Twists. Add 12 S.H.I.E.L.D. Officers to the Villain Deck.',
      twist: `Twist 1-6: Stack this Twists next to the Scheme as a "Traitor Battalion." Play another card from the Villain Deck.
Twist 7: All S.H.I.E.L.D. Officers in the city escape.`,
      evilWins: 'When 5 S.H.I.E.L.D. Officers escape.',
      specialRules:
        'S.H.I.E.L.D. Officers in the Villain Deck are Villains. Their Attack is 3 plus the number of Twists stacked next to this Scheme. When you defeat a S.H.I.E.L.D. Officer, gain it as a Hero.',
      gameSet: GameSets.CAPTAIN_AMERICA,
    },
    {
      villainDeck: {
        numTwists: 7,
        numShieldOfficers: 12,
      },
    }
  ),
  CHANGE_THE_OUTCOME_OF_WWII: new Scheme(
    {
      id: '31519ae5-782b-4d87-b65b-2b4836f9d31c',
      name: 'Change the Outcome of WWII',
      setup: '7 Twists. Add an extra Villain Group.',
      twist: `The Axis invades a new country. Put all Villains and Bystanders from the city on the bottom of the Villain Deck. The number of city spaces changes. Play 2 cards from the Villain Deck. If any Villains escape this country, stack a Twist next to the scheme as a "conquered capital."
Twist 1: Poland 4 spaces.
Twist 2: France 3 spaces.
Twist 3: USSR 6 spaces.
Twist 4: England 3 spaces.
Twist 5: USA 5 spaces.
Twist 6: Australia 2 spaces.
Twist 7: Switzerland 1 space.`,
      evilWins: 'When 3 capitals are conquered.',
      gameSet: GameSets.CAPTAIN_AMERICA,
    },
    {
      villainDeck: {
        numTwists: 7,
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
  GO_BACK_IN_TIME_TO_SLAY_HEROES_ANCESTORS: new Scheme(
    {
      id: 'aa87c7f7-9472-4f1b-835a-ddf15bcc0235',
      name: "Go Back in Time to Slay Heroes' Ancestors",
      setup: '9 Twists. 8 Heroes in Hero deck.',
      twist: `Put a Hero form the HQ next to the Scheme, "Purged from the Timestream."`,
      evilWins: 'When the Hero Deck runs out.',
      specialRules:
        'Whenever a Hero is in the HQ whose Hero Name has been Purged from the Timestream, KO that Hero.',
      gameSet: GameSets.CAPTAIN_AMERICA,
    },
    {
      villainDeck: {
        numTwists: 9,
      },
      heroDeck: {
        numHeroes: 8,
      },
    }
  ),
  THE_UNBREAKABLE_ENIGMA_CODE: new Scheme(
    {
      id: 'bc968e25-dcf3-490d-8587-b2cd3924ccc0',
      name: 'The Unbreakable Enigma Code',
      setup: '6 Twists.',
      twist: `Twists 1-5: Put a card from the Hero Deck face down next to the scheme as part of the "Enigma Code." Mix up those cards face-down.
Twist 6: Evil Wins!`,
      evilWins: 'When 6 twists are revealed',
      specialRules:
        'Whenever you fight a Villain, you may pay 1 Recruit to look at one of the face-down Enigma Cards. When you fight the Mastermind, first guess the color of each Enigma card, and then reveal them. If you guessed them right, fight the Mastermind as normal. If not, your turn ends, and mix up the Enigma cards face-down.',
      gameSet: GameSets.CAPTAIN_AMERICA,
    },
    {
      villainDeck: {
        numTwists: 6,
      },
    }
  ),
};
