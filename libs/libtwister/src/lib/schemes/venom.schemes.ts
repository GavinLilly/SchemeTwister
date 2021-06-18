import { GameSets } from '../gamesets';
import { IScheme, Scheme } from './scheme';

type SchemeNames =
  | 'INVASION_OF_THE_VENOM_SYMBIOTES'
  | 'MAXIMUM_CARNAGE'
  | 'PARALYZING_VENOM'
  | 'SYMBIOTIC_ABSORPTION';

export const Venom: Record<SchemeNames, IScheme> = {
  INVASION_OF_THE_VENOM_SYMBIOTES: new Scheme(
    {
      id: 'b2a14295-fbc7-468a-a484-5a530fc92be5',
      name: 'Invasion of the Venom Symbiotes',
      setup: '8 Twists. Add an extra Henchman Group.',
      twist: `This Twist enters the city as a 3 Attack "Symbiote" Villain worth 3VP with "Ambush: This Symbiote Bonds with another Villain in the city. Play another card from the Villain Deck."`,
      evilWins:
        'When the Escape Pile has 3 cards per player, or the Villain Deck runs out.',
      gameSet: GameSets.VENOM,
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
  MAXIMUM_CARNAGE: new Scheme(
    {
      id: 'fee94c93-1db0-4daf-8008-3a9d57df1682',
      name: 'Maximum Carnage',
      setup: '10 Twists. Wound Stack has 6 Wounds per player.',
      twist: `Stack this Twist next to the Scheme. If the Streets are empty, put a Bystander there as a "Possessed Psychotic" Villain. If the Streets weren't empty, each player gains a Wound.`,
      evilWins:
        'When there are 6 Bystanders in the Escape Pile or the Wound Stack runs out.',
      specialRules:
        '"Possessed Psychotics" have Attack equal to the number of Twists next to the Scheme. When you fight one, rescue it as a Bystander.',
      gameSet: GameSets.VENOM,
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
  PARALYZING_VENOM: new Scheme(
    {
      id: 'f402699b-31f4-458f-98c6-5bc51484eef7',
      name: 'Paralyzing Venom',
      setup: '6 Twists. All Bystanders are also "Biochemists."',
      twist: `Each player KOs a Biochemist from their Victory Pile or discards down to 4 cards in hand.
Twist 6: Evil Wins!`,
      evilWins: 'When 6 twists revealed',
      gameSet: GameSets.VENOM,
    },
    {
      villainDeck: {
        numTwists: 6,
      },
    }
  ),
  SYMBIOTIC_ABSORPTION: new Scheme(
    {
      id: 'bcc9bcc7-d4d2-4eac-895c-f29a0af70b99',
      name: 'Symbiotic Absorption',
      setup:
        '11 Twists. Set aside a second "Drained" Mastermind and its 4 Tactics, out of play. Add its "Always Leads" Villains as an extra Villain Group.',
      twist: `
Twist 1-4: Shuffle one of the Drained Mastermind\'s Tactics into the main Mastermind\'s Tactics.
Twist 6, 8, 10: The Mastermind uses this Twist to copy the Master Strike ability of the Drained Mastermind.
Twist 11: Evil Wins!`,
      evilWins: 'When 11 twists revealed',
      specialRules:
        'If Tactics or Master Strikes mention the Drained Mastermind, use the main Mastermind instead.',
      gameSet: GameSets.VENOM,
    },
    {
      villainDeck: {
        numTwists: 11,
      },
      additionalDeck: {
        name: 'Drained Mastermind',
        deck: {
          numMasterminds: 1,
        },
      },
    }
  ),
};
