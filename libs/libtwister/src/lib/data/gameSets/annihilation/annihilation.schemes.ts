import { PlayerPicksAHeroScheme, SchemeDefinition } from '../../../model';
import { FOCUS } from '../fantasticFour/fantasticFour.keywords';

import { META } from './annihilation.meta';

export const PULSE_WAVES_FROM_THE_NEGATIVE_ZONE = new SchemeDefinition({
  id: 'f968b735-5575-407e-8dc9-091d1fef3b58',
  name: 'Pulse Waves from the Negative Zone',
  gameSet: META,
  setup: '9 twists',
  twist: `1,3,5,7: "Negative Pulse": This turn, Heroes in the HQ cost -1 and Villains and Masterminds get -1 attack.
2,4,6,8: This turn, Heroes in the HQ cost +1 and Villains and Masterminds get +1 attack.
9: Evil wins!`,
  evilWins: 'When 9 twists revealed',
  meta: { numTwists: 9 },
});

export const SNEAK_ATTACK_THE_HEROES_HOMES = new SchemeDefinition({
  id: '0ab10c4f-6d7c-4f47-a4a7-e1af2aa23d6c',
  name: "Sneak Attack the Heroes' Homes",
  setup:
    '6 twists. Each player chooses a Hero to be part of the Hero Deck. Randomly select other Heroes up to the normal number of Heroes. Each player adds to their starting deck three non-rare cards with different names from the Hero they chose and three Wounds.',
  twist: `1-5: Each player discards a non-grey Hero or gains a Wound.
6: Evil wins!`,
  evilWins: 'When 6 twists revealed',
  meta: {
    numTwists: 6,
    overrideScheme: {
      schemeType: PlayerPicksAHeroScheme,
    },
  },
  gameSet: META,
});

export const PUT_HUMANITY_ON_TRIAL = new SchemeDefinition({
  id: '2a438d6d-3ec5-4e75-a97c-549f7317683e',
  name: 'Put Humanity on Trial',
  setup:
    '11 Twists. Stack 11 Bystanders next to the Sceme face down as "Galactic Jurors"',
  twist: `1-2: "Opening Arguments": Discard three cards with different names.
3, 5, 7: "Question Witnesses": Recruit a Hero that costs 5 or more.
4, 6, 8: "Introduce Evidence": Defeat Villain(s) worth 3VP or more.
9-11: "Closing Arguments": Defeat the Mastermind`,
  evilWins: 'When 6 Jurors vote to condemn Humanity',
  specialRules:
    "Each Twist gives you a challenge to achieve this turn. If you do it, you have convinced a Juror and you rescue them. If you don't, put that Juror face up next to the Villain DH_CHECK_P_NOT_PRIME, voting to condemn Humanity.",
  meta: {
    numTwists: 11,
    rules: (rule) => {
      rule.additionalDeck = {
        name: 'Galactic Jurors',
        deck: {
          numBystanders: 11,
        },
      };
      return rule;
    },
  },
  gameSet: META,
});

export const BREACH_PARALLEL_DIMENSIONS = new SchemeDefinition({
  id: '554228f5-a706-4704-aebb-3ae09a593ddd',
  name: 'Breach Parallel Dimensions',
  setup: `6 Twists. Add 4 extra Bystanders to the Villain Deck. Deal the shuffled Deck into several "Dimension" decks where the first Dimension has 1 card, the next has 2 cards, then 3, 4 etc (The final Dimension might not have enough cards to reach it's full number)`,
  twist: `Choose a Dimension and play two cards from it. (It's ok if it only has 1)`,
  evilWins: 'When at least half of the original Dimensions are destroyed.',
  specialRules: `Each turn, you choose which Dimension you play a card from. All players have "Focus 1 => Reveral the top card of any Dimension and put it back on the top or bottom of that deck". If a Dimension ever has no cards left, even in the middle of a card ability, it is destroyed. Mark it with a face up Wound`,
  keywords: [FOCUS],
  meta: {
    numTwists: 6,
    rules: (rule) => {
      rule.villainDeck.numBystanders =
        (rule.villainDeck.numBystanders || 0) + 4;
      return rule;
    },
  },
  gameSet: META,
});
