import { AbstractMastermind } from '../../../model';
import { VILLAINOUS_WEAPONS } from '../heroesOfAsgard/keywords';

import { TRIGGERED_ARTIFACTS } from './keywords';
import { META } from './meta';
import { FOLLOWERS_OF_RONAN } from './villains';

class McuGuardiansOfTheGalaxy extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const RONAN_THE_ACCUSER = new McuGuardiansOfTheGalaxy(
  '1faead13-40f8-4583-8aa1-9b16778aa1d7',
  'Ronan the Accuser',
  6,
  0,
  FOLLOWERS_OF_RONAN,
  false,
  VILLAINOUS_WEAPONS,
  TRIGGERED_ARTIFACTS
);

export const EPIC_RONAN_THE_ACCUSER = new McuGuardiansOfTheGalaxy(
  'f2defecb-0e5c-4b4a-9d5c-cb17f707a744',
  'Ronan the Accuser',
  7,
  0,
  FOLLOWERS_OF_RONAN,
  true,
  VILLAINOUS_WEAPONS,
  TRIGGERED_ARTIFACTS
);

export const EGO_THE_LIVING_PLANET = new McuGuardiansOfTheGalaxy(
  'b901a133-3a12-4492-9efb-a9dcea7c53b6',
  'Ego, The Living Planet',
  '3+',
  0
);

export const EPIC_EGO_THE_LIVING_PLANET = new McuGuardiansOfTheGalaxy(
  '7474eef1-38f4-4127-8ce8-e38296fadcc1',
  'Ego, The Living Planet',
  '1+',
  0,
  undefined,
  true
);
