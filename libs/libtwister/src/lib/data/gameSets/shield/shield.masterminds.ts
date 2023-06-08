import { Mastermind } from '../../../model';

import { ADAPT, HYDRA_LEVEL } from './keywords';
import { META } from './meta';
import { AIM_HYDRA_OFFSHOOT, HYDRA_ELITE } from './villains';

export const HYDRA_HIGH_COUNCIL = new Mastermind({
  id: '93764f78-07cf-42ff-8458-2b4832985107',
  name: 'Hydra High Council',
  gameSet: META,
  attackPoints: '7-16',
  victoryPoints: 6,
  alwaysLeads: [HYDRA_ELITE],
  keywords: [ADAPT, HYDRA_LEVEL],
});

export const HYDRA_SUPER_ADAPTOID = new Mastermind({
  id: 'ae671cab-2112-47e9-8349-1704dc4052d7',
  name: 'Hydra Super-Adaptoid',
  gameSet: META,
  attackPoints: '8-14',
  victoryPoints: 6,
  alwaysLeads: [AIM_HYDRA_OFFSHOOT],
  keywords: [ADAPT],
});
