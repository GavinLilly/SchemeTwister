import { HeroClass, MastermindWithEpic } from '@schemetwister/libtwister';

import { FAIL, WEAPON_X_SEQUENCE } from './weaponX.keywords';
import { META } from './weaponX.meta';
import { BERSERKERS, WEAPON_PLUS } from './weaponX.villains';

export const OMEGA_RED = new MastermindWithEpic(
  {
    id: 'c646b9c8-6629-4f47-8ca6-e0b58acafd8c',
    name: 'Omega Red',
    attackPoints: '10+',
    victoryPoints: 6,
    masterStrike: `Each player discards one of their ${HeroClass.COVERT} Heroes or gains a Wound`,
    gameSet: META,
    alwaysLeads: [], // Any villain group
    specialRules:
      'Omega Red gets +2 attack while you have any Wounds and +2 attack while there are any Wounds in your discard pile. When you KO any Wounds for the first time in a turn, put them on the bottom of the Wound Deck and gain a Wound to the bottom of your deck',
  },
  {
    id: '3caf8216-0f75-4933-a45d-1b299721a8db',
    attackPoints: '12+',
    masterStrike: `Each player KOs one of their ${HeroClass.COVERT} Heroes or gains a Wound`,
    specialRules:
      'Omega Red gets +3 Attack while you have any Wounds and +3 Attack while there are any Wounds in your discard pile. Whenever you KO any Wounds, put them on the bottom of the Wound Deck and gain a Wound to the bottom of your deck.',
  }
);

export const ROMULUS = new MastermindWithEpic(
  {
    id: '6176fb9c-43c8-4414-9169-a5be2fe9b63a',
    name: 'Romulus',
    attackPoints: '9+',
    victoryPoints: 6,
    alwaysLeads: [WEAPON_PLUS],
    masterStrike:
      'Each player reveals that they have a greater Weapon X Sequence than Romulus or gains a Wound. Then if this is the fifth Strike this game, this Strike becomes a Scheme Twist that takes effect immediately. (Once per game)',
    keywords: [WEAPON_X_SEQUENCE],
    gameSet: META,
  },
  {
    id: '66b1dbfa-f01e-44c2-b3db-3e049a65953e',
    attackPoints: '10+',
    masterStrike:
      "Each player reveals that they have a greater Weapon X Sequence than Romulus (don't double his Sequence for this) or gains a Wound to the top of their deck. Then if this is the third Strike this game, this Strike becomes a Scheme Twist that takes effect immediately. (Once per game)",
  }
);

export const SABRETOOTH = new MastermindWithEpic(
  {
    id: '13177bef-cc8a-4f5b-a8b0-ec371dd57d71',
    name: 'Sabretooth',
    attackPoints: '8+',
    victoryPoints: 6,
    alwaysLeads: [BERSERKERS],
    masterStrike:
      'Stack this Strike next to Sabretooth as a "Savagery." Each player KOs one of their Heroes that costs more than the number of Savageries. Any player that cannot do so gains a Wound instead.',
    keywords: [FAIL],
    specialRules: 'Sabretooth Berserks once for each Savagery stacked here.',
    gameSet: META,
  },
  {
    id: '01191ea2-6948-423e-afb1-0572cf85ef0a',
    attackPoints: '9+',
    masterStrike:
      'Stack this Strike next to Sabretooth as a "Savagery." Each player KOs one of their Heroes that costs at least 2 more than the number of Savageries. Any player that cannot do so gains a Wound instead.',
    specialRules:
      'Sabretooth Berserks once for each Savagery stacked here, plus two more times.',
  }
);
