import { VillainGroup } from '../../../model';

import { BRIBE, TELEPORT } from './darkCity.keywords';
import { META } from './darkCity.meta';

export const EMISSARIES_OF_EVIL = new VillainGroup({
  id: '2d106df3-c74d-4795-99b7-09d0ee33d87d',
  name: 'Emissaries of Evil',
  gameSet: META,
});

export const FOUR_HORSEMEN = new VillainGroup({
  id: '2cdf94da-fae7-42f6-8433-598f7626a409',
  name: 'Four Horsemen',
  gameSet: META,
});

export const MARAUDERS = new VillainGroup({
  id: '511d57f2-37b3-4497-9dda-8258b13a3b2e',
  name: 'Marauders',
  gameSet: META,
});

export const MLF = new VillainGroup({
  id: '8f6079bf-4cdb-4fe0-a339-d2796efe2ab5',
  name: 'MLF',
  gameSet: META,
});

export const STREETS_OF_NEW_YORK = new VillainGroup({
  id: '79037670-3af3-482b-a410-54e780caa7ea',
  name: 'Streets of New York',
  gameSet: META,

  keywords: [BRIBE],
});

export const UNDERWORLD = new VillainGroup({
  id: '4265325a-0aae-4b28-90db-6305f8883a6a',
  name: 'Underworld',
  gameSet: META,

  keywords: [TELEPORT],
});
