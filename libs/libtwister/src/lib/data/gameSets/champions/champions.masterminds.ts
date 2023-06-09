import { EpicMastermindBuilder } from '../../../model';
import { VERSATILE } from '../darkCity/keywords';
import { DEMOLISH } from '../villains/keywords';

import { MONSTERS_UNLEASHED, WRECKING_CREW } from './champions.villains';
import { SIZE_CHANGING } from './keywords';
import { META } from './meta';

const finFangFoom = new EpicMastermindBuilder({
  gameSet: META,
  name: 'Fin Fang Foom',
  victoryPoints: 7,
  alwaysLeads: [MONSTERS_UNLEASHED],
  keywords: [DEMOLISH, SIZE_CHANGING],
});

export const FIN_FANG_FOOM = finFangFoom.buildNormal({
  id: 'c5cf4934-68cf-4ac6-9ac9-65a1f4307ff4',
  attackPoints: '20*',
});

export const EPIC_FIN_FANG_FOOM = finFangFoom.buildEpic({
  id: '30469c57-f4e3-4255-b642-f37aa49eb6b9',
  attackPoints: '24*',
});

const pagliacci = new EpicMastermindBuilder({
  gameSet: META,
  name: 'Pagliacci',
  victoryPoints: 6,
  alwaysLeads: [WRECKING_CREW],
  keywords: [DEMOLISH, VERSATILE],
});

export const PAGLIACCI = pagliacci.buildNormal({
  id: 'bc34e995-15f6-4918-922d-7e3c1e6f1a12',
  attackPoints: 9,
});

export const EPIC_PAGLIACCI = pagliacci.buildEpic({
  id: '10fdfc96-fd5d-402f-945e-f800d83fd7ea',
  attackPoints: 11,
});
