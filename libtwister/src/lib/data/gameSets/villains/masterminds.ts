import { AbstractMastermind } from '../../../model';

import { ASGARDIAN_WARRIORS } from './henchmen';
import { DEMOLISH, X_TREME_ATTACK } from './keywords';
import { META } from './meta';
import { AVENGERS, DEFENDERS, XMEN_FIRST_CLASS } from './villains';

class VillainsMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const DR_STRANGE = new VillainsMastermind(
  '18f47d4e-6af2-4732-a34c-3a0c6a9bfb4f',
  'Dr. Strange',
  8,
  6,
  DEFENDERS
);

export const NICK_FURY = new VillainsMastermind(
  'cd333220-d49a-4307-a48e-8511ccb597f6',
  'Nick Fury',
  9,
  6,
  AVENGERS,
  false,
  DEMOLISH
);

export const ODIN = new VillainsMastermind(
  '5fc8c65b-a616-4424-9145-58fbbdcf31c0',
  'Odin',
  10,
  6,
  ASGARDIAN_WARRIORS
);

export const PROFESSOR_X = new VillainsMastermind(
  'bb9fcd0b-6391-4971-9099-634c661f36e2',
  'Professor X',
  8,
  6,
  XMEN_FIRST_CLASS,
  false,
  X_TREME_ATTACK
);
