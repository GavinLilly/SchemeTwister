import { HeroClass, MastermindWithEpic } from '@schemetwister/libtwister';

import { META } from './weaponX.meta';

export const OMEGA_RED = new MastermindWithEpic(
  {
    id: 'c646b9c8-6629-4f47-8ca6-e0b58acafd8c',
    name: 'Omega Red',
    attackPoints: 10,
    victoryPoints: 6,
    masterStrike: `Each player discards one of their ${HeroClass.COVERT} Heroes or gains a Wound`,
    gameSet: META,
    alwaysLeads: [], // Any villain group
    specialRules:
      'Omega Red gets +2 attack while you have any Wounds and +2 attack while there are any Wounds in your discard pile. When you KO any Wounds for the first time in a turn, put them on the bottom of the Wound Deck and gain a Wound to the bottom of your deck',
  },
  {
    id: '3caf8216-0f75-4933-a45d-1b299721a8db',
  }
);

export const ROMULUS = new MastermindWithEpic(
  {
    id: '6176fb9c-43c8-4414-9169-a5be2fe9b63a',
    name: 'Romulus',
    attackPoints: 1,
    victoryPoints: 1,
    alwaysLeads: [],
    masterStrike: '',
    gameSet: META,
  },
  {
    id: '66b1dbfa-f01e-44c2-b3db-3e049a65953e',
  }
);

export const SABRETOOTH = new MastermindWithEpic(
  {
    id: '13177bef-cc8a-4f5b-a8b0-ec371dd57d71',
    name: 'Sabretooth',
    attackPoints: 1,
    victoryPoints: 1,
    alwaysLeads: [],
    masterStrike: '',
    gameSet: META,
  },
  {
    id: '01191ea2-6948-423e-afb1-0572cf85ef0a',
  }
);
