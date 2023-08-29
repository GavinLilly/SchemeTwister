import {
  DECK_TYPE,
  RequireCard,
  RequireCardInDeckScheme,
  RequireVillainGroup,
  SchemeDefinition,
} from '../../../model';
import { HeroClass } from '../../enums';

import { HYDRA_LEVEL, UNDERCOVER } from './shield.keywords';
import { META } from './shield.meta';
import { AIM_HYDRA_OFFSHOOT, HYDRA_ELITE } from './shield.villains';

export const SHIELD_VS_HYDRA_WAR = new SchemeDefinition({
  id: '05c59c1a-fa4e-4b84-a8f8-282e3d882454',
  name: 'S.H.I.E.L.D. vs. HYDRA War',
  setup:
    '7 Twists. Include either the "Hydra Elite" or "A.I.M., Hydra Offshoot" Villain Group, but not both.',
  twist: `Each player puts a card from the S.H.I.E.L.D. Officer Stack face up next to the Scheme as a 3 Attack "Double Agent" Villain. If any Double Agents were already there, put one into the Escape Pile and put the rest on the bottom of the S.H.I.E.L.D. Officer Stack. You can fight any Double Agent next to the Scheme to gain it or send it Undercover.`,
  evilWins: 'When the Hydra Level is 11.',
  keywords: [UNDERCOVER, HYDRA_LEVEL],
  meta: {
    numTwists: 7,
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireCard(HYDRA_ELITE, 1, true, AIM_HYDRA_OFFSHOOT),
        new RequireVillainGroup(),
        DECK_TYPE.VILLAIN,
      ],
    },
  },
  gameSet: META,
});

export const HAIL_HYDRA = new SchemeDefinition({
  id: 'bf076369-d6e6-4b07-bb33-da2a7d476f14',
  name: 'Hail Hydra',
  setup: '11 twists.',
  twist: `Twist 1-9: Choose one:
  -Say "I'd never abandon S.H.I.E.L.D.", and you can't fight this turn.
  -Or whisper "Hail Hydra", you can't recruit this turn, and a Villain captures a Bystander.
Twist 10: Evil Wins!`,
  evilWins: 'On 10th twist',
  meta: { numTwists: 11 },
  gameSet: META,
});

export const HYDRA_HELICARRIERS_HUNT_HEROES = new SchemeDefinition({
  id: 'ac946f50-a8c6-4d30-9df0-168a2bf240c1',
  name: 'Hydra Helicarriers Hunt Heroes',
  setup: '8 Twists. Add an extra Hero.',
  twist: `Stack this Twist next to the Scheme. Then for each Twist stacked there, choose a different Hero Class (${HeroClass.STRENGTH}, ${HeroClass.INSTINCT}, ${HeroClass.COVERT}, ${HeroClass.TECH}, ${HeroClass.RANGED}), to a maximum of 5. KO each Hero from the HQ that has any of those Hero Classes.`,
  evilWins: 'When there are 18 non-grey Heroes in the KO pile.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.heroDeck.numHeroes++;
      return rule;
    },
  },
  gameSet: META,
});

export const SECRET_EMPIRE_OF_BETRAYAL = new SchemeDefinition({
  id: 'f14ce01a-5fc7-4866-8751-e70f6982dec9',
  name: 'Secret Empire of Betrayal',
  setup:
    '11 Twists. Randomly pick 5 cards that cost 5 or less from an additional Hero. Shuffle them to form a "Dark Loyalty" deck.',
  twist: `Shuffle this Twist into the Dark Loyalty deck as a "Vicious Betrayal." Then reveal the top card of that deck. If it's a Hero, gain it. If it's a Vicious Betrayal, put it next to the Scheme and each other player gains a Wound.`,
  evilWins: 'When there are 6 Vicious Betrayals next to the Scheme.',
  meta: {
    numTwists: 11,
    rules: (rule) => {
      rule.additionalDeck = {
        name: 'Dark Loyalty',
        deck: {
          numHeroes: 1,
        },
      };
      return rule;
    },
  },
  gameSet: META,
});
