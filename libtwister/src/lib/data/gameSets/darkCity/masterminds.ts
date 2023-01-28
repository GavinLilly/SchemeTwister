import { AbstractMastermind } from '../../../model';

import { BRIBE } from './keywords';
import { META } from './meta';
import {
  FOUR_HORSEMEN,
  MARAUDERS,
  MLF,
  STREETS_OF_NEW_YORK,
  UNDERWORLD,
} from './villains';

class DarkCityMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const APOCALYPSE = new DarkCityMastermind(
  'ec0617db-3869-4301-b07d-938876684790',
  'Apocalypse',
  12,
  6,
  FOUR_HORSEMEN
);

export const KINGPIN = new DarkCityMastermind(
  'f2f779c3-8a3e-4e34-9488-f310fa08fb34',
  'Kingpin',
  '13*',
  6,
  STREETS_OF_NEW_YORK,
  false,
  BRIBE
);

export const MEPHISTO = new DarkCityMastermind(
  '1de53796-a23a-43c3-9263-d15d6fec6f0b',
  'Mephisto',
  10,
  6,
  UNDERWORLD
);

export const MR_SINISTER = new DarkCityMastermind(
  'ce62da2d-6e60-4933-8972-aa96b2c23390',
  'Mr. Sinister',
  8,
  6,
  MARAUDERS
);

export const STRYFE = new DarkCityMastermind(
  '4c24e25b-f5c3-4b03-8e41-184274007862',
  'Stryfe',
  7,
  6,
  MLF
);
