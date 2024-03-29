import { SchemeDefinition } from '@schemetwister/libtwister';

import { ABOMINATION, THRONES_FAVOR } from './realmOfKings.keywords';
import { META } from './realmOfKings.meta';

export const RUIN_THE_PERFECT_WEDDING = new SchemeDefinition({
  id: 'f5067ce4-63ef-4ae2-bded-02844e913c01',
  name: 'Ruin the Perfect Wedding',
  setup:
    '11 Twists. Set aside two extra Heroes to get married. Prepare each Wedding Hero into a seperate 14-card stack, ordered by cost with the lowest cost on top.',
  twist: `Twist 1: Put one Wedding Hero Stack above the rightmost city space "at the altar." Gain its top card.
Twist 2: Put the other Wedding Hero Stack above the Mastermind space "at the door." Gain its top card.
Twist 3-7: Gain the top card of either Wedding Hero Stack. Then KO two cards from the top of each Wedding Hero Stack that has a Villain or Mastermind in the space immediately below it. Then the leftmost Hero Stack "walks down the aisle," moving one space to the right.
Twist 8-11: KO two cards from the top of each Wedding Hero Stack.`,
  evilWins: "When either Wedding Hero Stack is KO'd.",
  meta: {
    numTwists: 11,
    rules: (rule) => {
      rule.additionalDeck.push({
        name: 'Wedding Decks',
        deck: {
          numHeroes: 2,
        },
        instruction:
          'Set aside two extra Heroes to get married. Prepare each Wedding Hero into a seperate 14-card stack, ordered by cost with the lowest cost on top.',
      });
      return rule;
    },
  },
  gameSet: META,
});

export const WAR_OF_KINGS = new SchemeDefinition({
  id: '6dcf3c43-2baf-4990-84e7-8b1d4fc34280',
  name: 'War of Kings',
  setup: '11 Twists.',
  twist: `Twist 1-8: Stack this Twist next to the Scheme as a "Battlefront." This turn, you may pay 1 Recruit per Battlefront to supply the war.
    - If you pay: You gain the Throne's Favor. You may KO one of your cards.
    - If you don't pay by the end of turn: Right after you draw a new hand, stack a card from the S.H.I.E.L.D. Officer
Twist 9-11: Same effect, but with two Victorious Generals.`,
  evilWins: 'When there are 6 Victorious Generals.',
  keywords: [THRONES_FAVOR],
  meta: { numTwists: 11 },
  gameSet: META,
});

export const TORNADO_OF_TERRIGEN_MISTS = new SchemeDefinition({
  id: '9f29f2c3-e539-48ae-a160-3df30018ac0c',
  name: 'Tornado of Terrigen Mists',
  setup:
    '10 Twists. Each player puts a small object above the sewers to represent themself.',
  twist: `Twist 1: Put this Tornado Scheme card above the Sewers.
Twist 2-5: Each player in the Tornado space gains a Wound. Then move this Tornado card and each Villain simultaneously one space to the left. (A Villain on the Bridge escapes.)
Twist 6-9: Same effect, but move them all to the right, if possible. (A Villain in the Sewers doesn't move.)
Twist 10: Evil Wins!`,
  evilWins: 'When 10 twists revealed',
  specialRules:
    "You can't fight Villains outside the city space where you are. (You can still recruit from all HQ spaces and fight the Mastermind.) During your turn, you can spend 1 Attack any number of times to move yourself one space left or right.",
  meta: { numTwists: 10 },
  gameSet: META,
});

export const DEVOLVE_WITH_XEROGEN_CRYSTALS = new SchemeDefinition({
  id: 'bf9b7c30-493d-47a1-bff0-f785ee599fa0',
  name: 'Devolve with Xerogen Crystals',
  setup:
    'Add Twists equal to the number of players plus 3. Add an extra Henchman Group of 10 cards as "Xerogen Experiments."',
  twist: `Choose a Hero in the HQ that doesn't have a printed Attack of 2 or more. Put it on the bottom of the Hero Deck. Then play two cards from the Villain Deck.`,
  evilWins:
    'When there are 3 Villains per player in the Escape Pile or the Villain Deck runs out.',
  specialRules: 'All Xerogen Experiments also have Abomination.',
  keywords: [ABOMINATION],
  meta: {
    numTwists: {
      /* eslint-disable @typescript-eslint/naming-convention */
      '1': 4,
      '2': 5,
      '3': 6,
      '4': 7,
      '5': 8,
      /* eslint-enable @typescript-eslint/naming-convention */
    },
    rules: (rule) => {
      rule.villainDeck.numHenchmenGroups++;
      return rule;
    },
  },
  gameSet: META,
});
