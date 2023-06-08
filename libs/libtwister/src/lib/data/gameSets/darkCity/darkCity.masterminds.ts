import { Mastermind } from '../../../model';

import { BRIBE } from './keywords';
import { META } from './meta';
import {
  FOUR_HORSEMEN,
  MARAUDERS,
  MLF,
  STREETS_OF_NEW_YORK,
  UNDERWORLD,
} from './darkCity.villains';

export const APOCALYPSE = new Mastermind({
  id: 'ec0617db-3869-4301-b07d-938876684790',
  gameSet: META,
  name: 'Apocalypse',
  attackPoints: 12,
  victoryPoints: 6,
  alwaysLeads: [FOUR_HORSEMEN],
});

export const KINGPIN = new Mastermind({
  id: 'f2f779c3-8a3e-4e34-9488-f310fa08fb34',
  name: 'Kingpin',
  gameSet: META,
  attackPoints: '13*',
  victoryPoints: 6,
  alwaysLeads: [STREETS_OF_NEW_YORK],
  keywords: [BRIBE],
});

export const MEPHISTO = new Mastermind({
  id: '1de53796-a23a-43c3-9263-d15d6fec6f0b',
  name: 'Mephisto',
  gameSet: META,
  attackPoints: 10,
  victoryPoints: 6,
  alwaysLeads: [UNDERWORLD],
});

export const MR_SINISTER = new Mastermind({
  id: 'ce62da2d-6e60-4933-8972-aa96b2c23390',
  name: 'Mr. Sinister',
  gameSet: META,
  attackPoints: 8,
  victoryPoints: 6,
  alwaysLeads: [MARAUDERS],
});

export const STRYFE = new Mastermind({
  id: '4c24e25b-f5c3-4b03-8e41-184274007862',
  name: 'Stryfe',
  gameSet: META,
  attackPoints: 7,
  victoryPoints: 6,
  alwaysLeads: [MLF],
});
