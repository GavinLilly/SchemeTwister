import { AbstractMastermind } from '../../../model';

import { ADAPT, HYDRA_LEVEL } from './keywords';
import { META } from './meta';
import { AIM_HYDRA_OFFSHOOT, HYDRA_ELITE } from './villains';

class ShieldMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const HYDRA_HIGH_COUNCIL = new ShieldMastermind(
  '93764f78-07cf-42ff-8458-2b4832985107',
  'Hydra High Council',
  '7-16',
  6,
  HYDRA_ELITE,
  false,
  ADAPT,
  HYDRA_LEVEL
);

export const HYDRA_SUPER_ADAPTOID = new ShieldMastermind(
  'ae671cab-2112-47e9-8349-1704dc4052d7',
  'Hydra Super-Adaptoid',
  '8-14',
  6,
  AIM_HYDRA_OFFSHOOT,
  false,
  ADAPT
);
