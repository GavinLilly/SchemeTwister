import { IVillainGroup, CardType } from '../../../model';

import { HYDRA_LEVEL, UNDERCOVER } from './keywords';
import { META } from './meta';

export const HYDRA_ELITE: IVillainGroup = {
  id: '4f17b2bc-e761-4684-b7c0-65b381f036d5',
  name: 'Hydra Elite',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [HYDRA_LEVEL],
};

export const AIM_HYDRA_OFFSHOOT: IVillainGroup = {
  id: '64a7baad-a562-4154-ba45-da13159142de',
  name: 'A.I.M., Hydra Offshoot',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [UNDERCOVER, HYDRA_LEVEL],
};
