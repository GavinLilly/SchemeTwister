import { EpicMastermindBuilder } from '../../../model';

import { ANNIHILATION_WAVE, TIMELINES_OF_KANG } from './annihilation.villains';
import { MASS_MOMENTUM } from './keywords';
import { META } from './meta';

const annihilus = new EpicMastermindBuilder({
  gameSet: META,
  name: 'Annihilus',
  victoryPoints: 6,
  alwaysLeads: [ANNIHILATION_WAVE],
  keywords: [MASS_MOMENTUM],
});

export const ANNIHILUS = annihilus.buildNormal({
  id: '0db4044f-d88e-4fab-835e-55243ccec0f8',
  attackPoints: '10+',
});

export const EPIC_ANNIHILUS = annihilus.buildEpic({
  id: '1b6c9f4c-fddd-45fb-b4f0-b5a2f3316e16',
  attackPoints: '12+',
});

const kang = new EpicMastermindBuilder({
  gameSet: META,
  name: 'Kang the Conqueror',
  victoryPoints: 6,
  alwaysLeads: [TIMELINES_OF_KANG],
});

export const KANG_THE_CONQUEROR = kang.buildNormal({
  id: 'c80a223b-cbf5-44ac-823f-f3647792e0a1',
  attackPoints: '8+',
});

export const EPIC_KANG_THE_CONQUEROR = kang.buildEpic({
  id: '334b2b68-157d-4d9b-b249-fa69df1ec74d',
  attackPoints: '10+',
});
