import { IVillainGroup, CardType } from '../../../model';

import { ARTIFACT, SHARDS } from './keywords';
import { META } from './meta';

export const KREE_STARFORCE: IVillainGroup = {
  id: '368b4068-a407-4bf4-b5b4-da93440eb433',
  name: 'Kree Starforce',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [SHARDS],
};

export const INFINITY_GEMS: IVillainGroup = {
  id: '27e817d0-b853-420e-b1a6-2f7ba15681a7',
  name: 'Infinity Gems',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [SHARDS, ARTIFACT],
};
