import { EpicMastermindBuilder } from '../../../model';

import { CHIVALROUS_DUEL, EMPOWERED } from './keywords';
import { META } from './meta';
import { QUEENS_VENGEANCE, ULTRONS_LEGACY } from './antMan.villains';

const ultron = new EpicMastermindBuilder({
  gameSet: META,
  name: 'Ultron',
  victoryPoints: 6,
  alwaysLeads: [ULTRONS_LEGACY],
  keywords: [EMPOWERED],
});

export const ULTRON = ultron.buildNormal({
  id: '90f9437a-04b6-4efb-85af-829896a83ac8',
  attackPoints: 9,
});

export const EPIC_ULTRON = ultron.buildEpic({
  id: '89167683-86c8-497b-95af-17838c3d7021',
  attackPoints: 10,
});

const morganLeFay = new EpicMastermindBuilder({
  gameSet: META,
  name: 'Morgan le Fay',
  victoryPoints: 6,
  alwaysLeads: [QUEENS_VENGEANCE],
  keywords: [CHIVALROUS_DUEL],
});

export const MORGAN_LE_FAY = morganLeFay.buildNormal({
  id: 'eadae97c-473e-46db-bf18-ac871d378031',
  attackPoints: 7,
});

export const EPIC_MORGAN_LE_FAY = morganLeFay.buildEpic({
  id: 'b2adb1bc-d44f-4fdb-8860-67c4f539f825',
  attackPoints: 9,
});
