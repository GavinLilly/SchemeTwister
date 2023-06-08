import { Mastermind } from '../../../model';

import { ASGARDIAN_WARRIORS } from './henchmen';
import { DEMOLISH, X_TREME_ATTACK } from './keywords';
import { META } from './meta';
import { AVENGERS, DEFENDERS, XMEN_FIRST_CLASS } from './villains';

export const DR_STRANGE = new Mastermind({
  id: '18f47d4e-6af2-4732-a34c-3a0c6a9bfb4f',
  name: 'Dr. Strange',
  gameSet: META,
  attackPoints: 8,
  victoryPoints: 6,
  alwaysLeads: [DEFENDERS],
});

export const NICK_FURY = new Mastermind({
  id: 'cd333220-d49a-4307-a48e-8511ccb597f6',
  name: 'Nick Fury',
  gameSet: META,
  attackPoints: 9,
  victoryPoints: 6,
  alwaysLeads: [AVENGERS],
  keywords: [DEMOLISH],
});

export const ODIN = new Mastermind({
  id: '5fc8c65b-a616-4424-9145-58fbbdcf31c0',
  name: 'Odin',
  gameSet: META,
  attackPoints: 10,
  victoryPoints: 6,
  alwaysLeads: [ASGARDIAN_WARRIORS],
});

export const PROFESSOR_X = new Mastermind({
  id: 'bb9fcd0b-6391-4971-9099-634c661f36e2',
  name: 'Professor X',
  gameSet: META,
  attackPoints: 8,
  victoryPoints: 6,
  alwaysLeads: [XMEN_FIRST_CLASS],
  keywords: [X_TREME_ATTACK],
});
