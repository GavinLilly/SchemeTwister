import { EpicMastermindBuilder } from '../../../model';

import { ENDGAME } from './keywords';
import { META } from './meta';
import { CHILDREN_OF_THANOS, INFINITY_STONES } from './villains';

const thanos = new EpicMastermindBuilder({
  name: 'Thanos',
  gameSet: META,
  victoryPoints: 7,
  alwaysLeads: [INFINITY_STONES],
});

export const THANOS = thanos.buildNormal({
  id: '94946692-4e18-4b9e-be02-973543be232d',
  attackPoints: '11+',
});

export const EPIC_THANOS = thanos.buildEpic({
  id: '8c615b1e-7e09-4f8d-ab1e-89dd8edb35b7',
  attackPoints: '13+',
});

const ebonyMaw = new EpicMastermindBuilder({
  name: 'Ebony Maw',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [CHILDREN_OF_THANOS],
  keywords: [ENDGAME],
});

export const EBONY_MAW = ebonyMaw.buildNormal({
  id: '4199309b-1816-4747-994b-4145426e5b4e',
  attackPoints: '8+',
});

export const EPIC_EBONY_MAW = ebonyMaw.buildEpic({
  id: 'cf25bc47-fb0a-4c04-b767-98f578a891c3',
  attackPoints: '10+',
});
