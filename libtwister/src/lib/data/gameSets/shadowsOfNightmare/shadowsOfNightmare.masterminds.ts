import { EpicMastermindBuilder } from '../../../model';

import { ASTRAL_PLANE, DEMONIC_BARGAIN } from './keywords';
import { META } from './meta';
import { FEAR_LORDS, LORDS_OF_NETHERWORLD } from './villains';

const dormammu = new EpicMastermindBuilder({
  name: 'Dormammu',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [LORDS_OF_NETHERWORLD],
  keywords: [DEMONIC_BARGAIN],
});

export const DORMAMMU = dormammu.buildNormal({
  id: '44f15c5d-86db-49d9-9eaa-6a98405a7ffd',
  attackPoints: 11,
});

export const EPIC_DORMAMMU = dormammu.buildEpic({
  id: '7faff6e6-d8a1-4bb1-bde0-edbc6873af68',
  attackPoints: 13,
});

const nightmare = new EpicMastermindBuilder({
  name: 'Nightmare',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [FEAR_LORDS],
  keywords: [ASTRAL_PLANE],
});

export const NIGHTMARE = nightmare.buildNormal({
  id: 'abca8754-2331-462c-8b96-cee46ce9f00e',
  attackPoints: 6,
});

export const EPIC_NIGHTMARE = nightmare.buildEpic({
  id: '85d2d78a-a56a-4bee-9c4b-4808bc6d9c00',
  attackPoints: 8,
});
