import { AbstractMastermind } from '../../../model';

import { SPIDERINFECTED } from './henchmen';
import { CHARGE, CIRCLE_OF_KUNG_FU, FATEFUL_RESURRECTION } from './keywords';
import { META } from './meta';
import { KUNLUN, MONSTER_METROPOLIS, UTOPOLIS } from './villains';

class SW2Mastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const IMMORTAL_EMPEROR_ZHENGZHU = new SW2Mastermind(
  '03b4ca44-6b71-4a36-abe3-902f79b90d5b',
  'Immortal Emperor Zheng-Zhu',
  '7+',
  5,
  KUNLUN,
  false,
  CIRCLE_OF_KUNG_FU
);

export const KING_HYPERION = new SW2Mastermind(
  'b2b84119-88c6-44f2-8721-95190dc38f5f',
  'King Hyperion',
  12,
  6,
  UTOPOLIS,
  false,
  CHARGE
);

export const SHIKLAH_THE_DEMON_BRIDE = new SW2Mastermind(
  '471fd01c-3ba3-4f03-9db0-2931abcd3bc8',
  'Shiklah, the Demon Bride',
  9,
  6,
  MONSTER_METROPOLIS,
  false,
  FATEFUL_RESURRECTION
);

export const SPIDERQUEEN = new SW2Mastermind(
  '566eadce-240d-45c0-b7ff-6a956a7cf462',
  'Spider-Queen',
  '8+',
  6,
  SPIDERINFECTED
);
