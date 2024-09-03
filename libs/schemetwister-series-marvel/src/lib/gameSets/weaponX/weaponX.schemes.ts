import {
  DECK_TYPE,
  HeroClass,
  RequireCardInDeckScheme,
  RequireCardName,
  RequireHero,
  SchemeDefinition,
} from '@schemetwister/libtwister';

import { META } from './weaponX.meta';

export const SCHEME_0 = new SchemeDefinition({
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

export const SCHEME_1 = new SchemeDefinition({
  id: '02a22f5a-3a9e-4818-a084-57df6b84831b',
  name: 'Scheme 1',
  setup: '',
  twist: '',
  specialRules: '',
  evilWins: '',
  meta: { numTwists: 8 },
  gameSet: META,
});

export const SCHEME_2 = new SchemeDefinition({
  id: '2ede2db6-9033-43e8-862d-4f8f19226270',
  name: 'Scheme 2',
  setup: '',
  twist: '',
  specialRules: '',
  evilWins: '',
  meta: { numTwists: 8 },
  gameSet: META,
});

export const SCHEME_3 = new SchemeDefinition({
  id: '02d505cf-360f-49b0-be82-618a04c6f0f5',
  name: 'Scheme 3',
  setup: '',
  twist: '',
  specialRules: '',
  evilWins: '',
  meta: { numTwists: 8 },
  gameSet: META,
});
