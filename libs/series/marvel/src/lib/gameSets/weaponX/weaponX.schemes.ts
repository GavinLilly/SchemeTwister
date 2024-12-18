import {
  DECK_TYPE,
  HeroClass,
  RequireCardInDeckScheme,
  RequireCardName,
  RequireHero,
  RequireUniqueHeroesScheme,
  SchemeDefinition,
} from '@schemetwister/libtwister';

import { BERSERK } from '../xMen/xMen.keywords';

import { META } from './weaponX.meta';

export const CONDITION_LOGAN_INTO_WEAPON_X = new SchemeDefinition({
  id: '91af9931-4f2d-4fb0-a9ca-233794cdc570',
  name: 'Condiion Logan into Weapon X',
  setup:
    "8 Twists. Include exactly 1 Hero with Wolverine or Logan in it's name",
  twist: `Twist 1, 3, 5: "Induce Violent Rage": If you don't defeat an Enemy worth 2 Attack or more this turn, then after you draw a new hand at the end of this turn, each player discards down to four cards.
Twist 2, 4, 6: "Test the Subject's Healing Factor": Each player discards a ${HeroClass.STRENGTH} or ${HeroClass.INSTINCT} Hero or gains a Wound.
Twist 7: "Unleash Weapon X": For each Wolverine and/or Logan Hero in the HQ, each player gains a Wound.
Twist 8: Evil Wins!`,
  evilWins: 'After 8 twists',
  meta: {
    numTwists: 8,
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireCardName(['Wolverine', 'Logan']),
        new RequireHero(),
        DECK_TYPE.hero,
      ],
    },
  },
  gameSet: META,
});

export const GO_AFTER_HEROES_LOVED_ONES = new SchemeDefinition({
  id: '02a22f5a-3a9e-4818-a084-57df6b84831b',
  name: "Go After Heroes' Loved Ones",
  setup:
    'Add an extra Hero. Don\'t use multiple Heroes that have the same Hero Name. 1 player: 8 Twists. 2-4 players: 10 Twists. 5 players: 11 Twists. Set aside a lowest-cost card for each Hero Name, face up, with 2 face up Bystanders under it as "Loved Ones." ',
  twist: `Twister 1-6: KO the Hero in the rightmost HQ space. KO one of that Hero Name's Loved Ones. Each player discards a card of that Hero Name. If you discard a card this way during your turn, you Berserk. If that Hero Name has no more Loved Ones, that Hero is "Lost in Grief": KO all of that Hero Name from the HQ and Hero Deck, then shuffle it.
Twist 7-11: Do that Twist effect twice.`,
  evilWins: 'When the Hero Deck runs out.',
  meta: {
    numTwists: {
      /* eslint-disable @typescript-eslint/naming-convention */
      '1': 8,
      '2': 10,
      '3': 10,
      '4': 10,
      '5': 11,
      /* eslint-enable @typescript-eslint/naming-convention */
    },
    overrideScheme: {
      schemeType: RequireUniqueHeroesScheme,
    },
    rules: (rule) => {
      rule.heroDeck.numHeroes += 1;
      return rule;
    },
  },
  keywords: [BERSERK],
  gameSet: META,
});

export const WIPE_HEROES_MEMORIES = new SchemeDefinition({
  id: '2ede2db6-9033-43e8-862d-4f8f19226270',
  name: "Wipe Heroes' Memories",
  setup: 'Twists equal to the number of players plus 4.',
  twist:
    'You "forget your past": If you have any face up Villains or Tactics in your Victory Pile, put one of them on the bottom of your Victory Pile face down, then shuffle this Twist back into the Villain Deck, then play a card from the Villain Deck. If you didn\'t have any face up Villains or Tactics, then instead stack this Twist next to the Scheme as a "Total Memory Wipe."',
  specialRules:
    'Face down cards in your Victory Pile count as not being there at all until you count their VP at game end.',
  evilWins: 'When there are 4 Total Memory Wipes.',
  meta: {
    numTwists: {
      /* eslint-disable @typescript-eslint/naming-convention */
      '1': 5,
      '2': 6,
      '3': 7,
      '4': 8,
      '5': 9,
      /* eslint-enable @typescript-eslint/naming-convention */
    },
  },
  gameSet: META,
});
