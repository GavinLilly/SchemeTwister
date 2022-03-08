import { AbstractMastermind } from '../../../model';

import { ABOMINATION, SAVIOR } from './keywords';
import { META } from './meta';
import { MASTERS_OF_EVIL_WWII, ZOLAS_CREATIONS } from './villains';

class CaptainAmericaMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const ARNIM_ZOLA = new CaptainAmericaMastermind(
  '7351cae6-f1d4-4c31-a075-fa7a25a4a13e',
  'Arnim Zola',
  6,
  6,
  ZOLAS_CREATIONS,
  false,
  SAVIOR,
  ABOMINATION
);

export const BARON_HEINRICH_ZEMO = new CaptainAmericaMastermind(
  '008db486-dbf4-47d9-b61e-19fe11adb5d1',
  'Baron Heinrich Zemo',
  9,
  6,
  MASTERS_OF_EVIL_WWII
);
