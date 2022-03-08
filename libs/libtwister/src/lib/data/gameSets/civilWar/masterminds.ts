import { AbstractMastermind } from '../../../model';
import { BRIBE } from '../darkCity/keywords';

import { FORTIFY, SHIELD_CLEARANCE } from './keywords';
import { META } from './meta';
import {
  HEROES_FOR_HIRE,
  REGISTRATION_ENFORCERS,
  SHIELD_ELITE,
  SUPERHUMAN_REGISTRATION_ACT,
  THUNDERBOLTS,
} from './villains';

class CivilWarMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const AUTHORITARIAN_IRON_MAN = new CivilWarMastermind(
  'e9052952-4b86-4718-b33f-2b926d32b833',
  'Authoritarian Iron Man',
  12,
  6,
  SUPERHUMAN_REGISTRATION_ACT,
  false,
  FORTIFY
);

export const BARON_HELMUT_ZEMO = new CivilWarMastermind(
  'ebd930e5-f065-414d-9862-01d335f30e3e',
  'Baron Helmut Zemo',
  16,
  6,
  THUNDERBOLTS
);

export const MARIA_HILL_DIRECTOR_OF_SHIELD = new CivilWarMastermind(
  '07e76e37-70ce-40d6-a98c-9df5d2314e6a',
  'Maria Hill, Director of S.H.I.E.L.D.',
  7,
  6,
  SHIELD_ELITE,
  false,
  SHIELD_CLEARANCE
);

export const MISTY_KNIGHT = new CivilWarMastermind(
  '28b6b19a-8d4f-490d-b834-dd03b3ab45aa',
  'Misty Knight',
  14,
  6,
  HEROES_FOR_HIRE,
  false,
  BRIBE,
  FORTIFY
);

export const RAGNAROK = new CivilWarMastermind(
  '9492f5bc-f54a-4304-b158-0a7df6fc2127',
  'Ragnarok',
  6,
  6,
  REGISTRATION_ENFORCERS
);
