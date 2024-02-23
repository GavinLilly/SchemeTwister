import { SchemeDefinition } from '@schemetwister/libtwister';

import { META } from './blackPanther.meta';

export const SEIZE_THE_WAKANDAN_THRONE = new SchemeDefinition({
  id: '3c3f5d0c-cb08-4cee-9a97-c62df7a8c526',
  name: 'Seize the Wakandan Throne',
  setup: '6 twists',
  twist:
    'If the Mastermind has the Throne\'s Favor, they spend it to stack this Twist next to the Scheme as a "Tribe of Wkanda Defeated." Otherwise: The Mastermind gains the Throne\'s Favor, shuffle this Twist back into the Villain Deck, and then play a card from the Villain Deck.',
  specialRules:
    "Whenever you fight the Mastermind, you gain the Throne's Favor.",
  evilWins: 'When the 5 Trides of Wakanda have been defeated.',
  meta: { numTwists: 6 },
  gameSet: META,
});

export const POISON_LAKES_WITH_NANITE_MICROBOTS = new SchemeDefinition({
  id: 'eaabff3c-a087-4327-93db-e44565b10c27',
  name: 'Poison Lakes with Nanite Microbots',
  setup:
    'Twists equal to 5 plus the number of players. 30 Wounds in the Wound Stack.',
  twist:
    'Stack this Twist next to the Scheme as an "Infected Nanite." Wound the Mastermind. Then for each Infected Nanite, Wound a Hero in the HQ, dividing these new Wounds as evenly as possible.',
  specialRules:
    "Whenever you recruit a Hero [or it leaves the HQ], pay 1 Recruit less for each Wound on it and choose players to gain those Wounds, dividing them as evenly as possible. Whenever a Wound is KO'd from anywhere, return it to the bottom of the Wound Stack.",
  evilWins: 'When the Wound Stack or Villain Deck runs out.',
  meta: {
    numTwists: {
      '1': 6,
      '2': 7,
      '3': 8,
      '4': 9,
      '5': 10,
    },
    rules: (rule) => {
      rule.numWounds = 30;
      return rule;
    },
  },
  gameSet: META,
});

export const PLUNDER_WAKANDAS_VIBRANIUM = new SchemeDefinition({
  id: '9ad0e347-46d0-4cd6-b759-05a07c4709fa',
  name: "Plunder Wakanda's Vibranium",
  setup: '10 Twists, representing "Vibranium."',
  twist:
    'Put any Vibranium from the city into the Escape Pile. A Bystander enters the city as a 3 Attack "Smuggler" Villain with "Fight: Rescue this as a Bystander." Then the highest Attack Villain captures this Twist. Put the top card of the Hero Deck next to the Scheme as a "Vibranium Attunement," putting any previous Attunement on the bottom of the Hero Deck.',
  specialRules:
    'A Villain holding Vibranium is Empowered by the colors of the Vibranium Attunement. When you defeat them, put the Vibranium in your Victory Pile, worth 3VP.',
  evilWins:
    'When 4 Vibranium are in the Escape Pile or the Villain Deck runs out.',
  meta: { numTwists: 10 },
  gameSet: META,
});

export const PROVOKE_CLASH_OF_NATIONS = new SchemeDefinition({
  id: '6af54094-b89a-4adf-abdc-a7354884c57e',
  name: 'Provoke Clash of Nations',
  setup: '11 Twists.',
  twist: `1-8: Wihtout talking, all players simultaneously vote with a Fist, Palm, or 2 Fingers. Break ties at random. Then only you discard your hand and draw six cards. You must do the voted task below by the end of this turn or stack this twist next to the Mastermind as an "International Crisis"/
<ul>
<li>Fist: "War" - Defeat a non-Henchman Villain or Mastermind Tactic.</li>
<li>Palm: "Diplomacy" - Play three Heroes that share a Hero Class.</li>
<li>Two Fingers: "Commerce" - Recruit two Heroes from the HQ.</li>
</ul>
9-11: Do all three tasks this turn or add an International Crisis.`,
  evilWins: 'At 6 International Crises.',
  meta: { numTwists: 11 },
  gameSet: META,
});
