import { GameSets } from '../gamesets';
import { HeroClass } from '../heroes';
import { VillainGroups } from '../villains';
import { IScheme, Scheme } from './scheme';

type SchemeNames =
  | 'SHIELD_VS_HYDRA_WAR'
  | 'HAIL_HYDRA'
  | 'HYDRA_HELICARRIERS_HUNT_HEROES'
  | 'SECRET_EMPIRE_OF_BETRAYAL';

export const Shield: Record<SchemeNames, IScheme> = {
  SHIELD_VS_HYDRA_WAR: new Scheme(
    {
      id: '05c59c1a-fa4e-4b84-a8f8-282e3d882454',
      name: 'S.H.I.E.L.D. vs. HYDRA War',
      setup:
        '7 Twists. Include either the "Hydra Elite" or "A.I.M., Hydra Offshoot" Villain Group, but not both.',
      twist: `Each player puts a card from the S.H.I.E.L.D. Officer Stack face up next to the Scheme as a 3 Attack "Double Agent" Villain. If any Double Agents were already there, put one into the Escape Pile and put the rest on the bottom of the S.H.I.E.L.D. Officer Stack. You can fight any Double Agent next to the Scheme to gain it or send it Undercover.`,
      evilWins: 'When the Hydra Level is 11.',
      requiredCards: {
        inVillainDeck: [
          VillainGroups.SHIELD.AIM_HYDRA_OFFSHOOT,
          VillainGroups.SHIELD.HYDRA_ELITE,
        ],
      },
      gameSet: GameSets.SHIELD,
    },
    {
      villainDeck: {
        numTwists: 7,
      },
    }
  ),
  HAIL_HYDRA: new Scheme(
    {
      id: 'bf076369-d6e6-4b07-bb33-da2a7d476f14',
      name: 'Hail Hydra',
      setup: '11 twists.',
      twist: `Twist 1-9: Choose one:
  -Say "I'd never abandon S.H.I.E.L.D.", and you can't fight this turn.
  -Or whisper "Hail Hydra", you can't recruit this turn, and a Villain captures a Bystander.
Twist 10: Evil Wins!`,
      evilWins: 'On 10th twist',
      gameSet: GameSets.SHIELD,
    },
    {
      villainDeck: {
        numTwists: 11,
      },
    }
  ),
  HYDRA_HELICARRIERS_HUNT_HEROES: new Scheme(
    {
      id: 'ac946f50-a8c6-4d30-9df0-168a2bf240c1',
      name: 'Hydra Helicarriers Hunt Heroes',
      setup: '8 Twists. Add an extra Hero.',
      twist: `Stack this Twist next to the Scheme. Then for each Twist stacked there, choose a different Hero Class (${HeroClass.STRENGTH}, ${HeroClass.INSTINCT}, ${HeroClass.COVERT}, ${HeroClass.TECH}, ${HeroClass.RANGED}), to a maximum of 5. KO each Hero from the HQ that has any of those Hero Classes.`,
      evilWins: 'When there are 18 non-grey Heroes in the KO pile.',
      gameSet: GameSets.SHIELD,
    },
    undefined,
    {
      2: {
        heroDeck: {
          numHeroes: 6,
        },
      },
      3: {
        heroDeck: {
          numHeroes: 6,
        },
      },
      4: {
        heroDeck: {
          numHeroes: 6,
        },
      },
      5: {
        heroDeck: {
          numHeroes: 7,
        },
      },
    }
  ),
  SECRET_EMPIRE_OF_BETRAYAL: new Scheme(
    {
      id: 'f14ce01a-5fc7-4866-8751-e70f6982dec9',
      name: 'Secret Empire of Betrayal',
      setup:
        '11 Twists. Randomly pick 5 cards that cost 5 or less from an additional Hero. Shuffle them to form a "Dark Loyalty" deck.',
      twist: `Shuffle this Twist into the Dark Loyalty deck as a "Vicious Betrayal." Then reveal the top card of that deck. If it's a Hero, gain it. If it's a Vicious Betrayal, put it next to the Scheme and each other player gains a Wound.`,
      evilWins: 'When there are 6 Vicious Betrayals next to the Scheme.',
      gameSet: GameSets.SHIELD,
    },
    {
      villainDeck: {
        numTwists: 11,
      },
      additionalDeck: {
        name: 'Dark Loyalty',
        deck: {
          numHeroes: 1,
        },
      },
    }
  ),
};
