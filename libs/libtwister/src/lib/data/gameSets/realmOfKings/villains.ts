import { IVillainGroup, CardType } from '../../../model';

import { ABOMINATION, THRONES_FAVOR } from './keywords';
import { META } from './meta';

export const INHUMAN_REBELLION: IVillainGroup = {
  id: 'f2a90de3-d516-40cc-bb14-1196e648f146',
  name: 'Inhuman Rebellion',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [ABOMINATION],
};

export const SHIAR_IMPERIAL_ELITE: IVillainGroup = {
  id: '034d6982-2940-4b3c-8c9d-4c40b84b3f8e',
  name: "Shi'ar Imperial Elite",
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [THRONES_FAVOR],
};
