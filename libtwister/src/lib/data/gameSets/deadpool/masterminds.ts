import { AbstractMastermind } from '../../../model';

import { REVENGE } from './keywords';
import { META } from './meta';
import { DEADPOOLS_FRIENDS, EVIL_DEADPOOL_CORPSE } from './villains';

class DeadpoolMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const EVIL_DEADPOOL = new DeadpoolMastermind(
  'e9427fd1-f815-4a04-8ca9-822ae4152a9b',
  'Evil Deadpool',
  11,
  6,
  EVIL_DEADPOOL_CORPSE,
  false,
  REVENGE
);

export const MACHO_GOMEZ = new DeadpoolMastermind(
  'ad9cbeab-e0f5-4c1a-b93d-160f9c4932d0',
  'Macho Gomez',
  9,
  6,
  DEADPOOLS_FRIENDS,
  false,
  REVENGE
);
