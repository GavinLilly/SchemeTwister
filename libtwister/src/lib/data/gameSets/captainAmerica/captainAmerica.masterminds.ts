import { Mastermind } from '../../../model';

import { ABOMINATION, SAVIOR } from './keywords';
import { META } from './meta';
import { MASTERS_OF_EVIL_WWII, ZOLAS_CREATIONS } from './villains';

export const ARNIM_ZOLA = new Mastermind({
  id: '7351cae6-f1d4-4c31-a075-fa7a25a4a13e',
  name: 'Arnim Zola',
  gameSet: META,
  victoryPoints: 6,
  attackPoints: 6,
  alwaysLeads: [ZOLAS_CREATIONS],
  keywords: [SAVIOR, ABOMINATION],
});

export const BARON_HEINRICH_ZEMO = new Mastermind({
  id: '008db486-dbf4-47d9-b61e-19fe11adb5d1',
  name: 'Baron Heinrich Zemo',
  gameSet: META,
  attackPoints: '9+',
  victoryPoints: 6,
  alwaysLeads: [MASTERS_OF_EVIL_WWII],
});
