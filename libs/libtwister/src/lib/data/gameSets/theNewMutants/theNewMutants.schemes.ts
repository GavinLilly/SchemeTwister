import {
  ShortScheme,
  RequireVillainsInVillainDeckScheme,
} from '../../../model';

import { MOONLIGHT_AND_SUNLIGHT } from './theNewMutants.keywords';
import { DEMONS_OF_LIMBO } from './theNewMutants.villains';

export const THE_DEMON_BEAR_SAGA: ShortScheme = {
  id: '38763bc5-1569-4752-a6dd-3829030e8b96',
  name: 'The Demon Bear Saga',
  setup:
    '8 Twists. Include Demons of Limbo as one of the Villain Groups. Put the Demon Bear Villain from that group next to the Scheme.',
  twist: `If the Demon Bear is in the city, it escapes. Otherwise, the Demon Bear enters the city from wherever it is. If it was in a player's Victory Pile, that player rescues 4 Bystanders.`,
  evilWins: 'When there are 3 Dream Horrors.',
  specialRules:
    'Whenever the Demon Bear escapes, stack a Twist next to the Scheme as a "Dream Horror."',
  keywords: [MOONLIGHT_AND_SUNLIGHT],
  meta: {
    numTwists: 8,
    overrideScheme: {
      schemeType: RequireVillainsInVillainDeckScheme,
      params: [DEMONS_OF_LIMBO],
    },
  },
};

export const CRASH_THE_MOON_INTO_THE_SUN: ShortScheme = {
  id: '69ec1136-50ce-4acf-96e5-312d9cec240b',
  name: 'Crash the Moon into the Sun',
  setup: '11 Twists.',
  twist: `Twist 1,3,5,7: Moonlight: Stack this Twist next to the Scheme as an "Altered Orbit."
Twist 2,4,6,8: Sunlight: Same effect.
Twist 9,10,11: Same effect.`,
  evilWins: 'When there are 4 Altered Orbits.',
  meta: { numTwists: 8 },
};

export const TRAPPED_IN_THE_INSANE_ASYLUM: ShortScheme = {
  id: 'c18eeab3-13e1-452c-a15e-29f92c5c567d',
  name: 'Trapped in the Insane Asylum',
  setup: '1 Twist, plus 2 Twists per player.',
  twist: `You face a "Sanity Test" Either keep this Twist in front of you as a "Psychotic Break", or discard a card and pass this Twist to the player on your left and that player faces a Sanity Test.`,
  evilWins: 'When a player has 3 Psychotic Breaks.',
  specialRules:
    'On each of your turns, before you play other cards from your hand, you must play two randomly-selected cards from your hand for each Psychotic Break you have.',
  meta: {
    numTwists: {
      '1': 3,
      '2': 5,
      '3': 7,
      '4': 9,
      '5': 11,
    },
  },
};

export const SUPERHUMAN_BASEBALL_GAME: ShortScheme = {
  id: 'e292f8a2-58c0-466b-97c8-5ca44e25ae61',
  name: 'Superhuman Baseball Game',
  setup: '9 Twists. Add an extra Villain Group.',
  twist: `Play the top card of the Villain Deck. If it's a Bystander, rescue that "Cheering Fan." If it's a Master Strike, then after it resolves, any Villain on Third Base "Steals Home" and Escapes. If it's a Villain, it "Hits a Double," pushes to Second Base (the Rooftops) and you play the top card from the Villain Deck.`,
  evilWins: 'When Evil has 4 "runs" (Villains in the Escape Pile) per player',
  specialRules:
    'The Bank nd the Streets do not exist. Put the Villain Deck under the HQ as "Home Plate." The Sewers, Rooftops, and Bridge are First, Second, and Third Base.',
  meta: {
    numTwists: 9,
    rules: (rule) => {
      rule.villainDeck.numVillainGroups++;
      return rule;
    },
  },
};
