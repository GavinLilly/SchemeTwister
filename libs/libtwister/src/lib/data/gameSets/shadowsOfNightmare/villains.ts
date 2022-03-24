import { CardType, IVillainGroup } from '../../../model';

import { ASTRAL_PLANE, DEMONIC_BARGAIN } from './keywords';
import { META } from './meta';

export const LORDS_OF_NETHERWORLD: IVillainGroup = {
  id: 'f356c475-f6ac-47a4-bf52-d7ccc813f89d',
  name: 'Lords of the Netherworld',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [DEMONIC_BARGAIN],
};

export const FEAR_LORDS: IVillainGroup = {
  id: '436d1a17-0888-46a0-8dce-2766d4ede478',
  name: 'Fear Lords',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [ASTRAL_PLANE],
};
