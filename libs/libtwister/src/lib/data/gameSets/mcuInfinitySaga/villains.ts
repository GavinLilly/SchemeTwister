import { CardType, IVillainGroup } from '../../../model';

import { ENDGAME } from './keywords';
import { META } from './meta';

export const CHILDREN_OF_THANOS: IVillainGroup = {
  id: 'dfb2c2f0-d238-4f3e-930f-d514066b8a07',
  name: 'Children of Thanos',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [ENDGAME],
};

export const INFINITY_STONES: IVillainGroup = {
  id: 'c7a9e7d3-bee1-41d6-be22-e7bd5a06a215',
  name: 'Infinity Stones',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [ENDGAME],
};
