import { IVillainGroup, CardType } from '../../../model';

import { ABOMINATION, SAVIOR } from './keywords';
import { META } from './meta';

export const ZOLAS_CREATIONS: IVillainGroup = {
  id: '755b1918-6f12-4871-8db4-b763a6032b54',
  name: "Zola's Creations",
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [ABOMINATION],
};
export const MASTERS_OF_EVIL_WWII: IVillainGroup = {
  id: '8650bcb1-5221-4836-9a96-3a885634064b',
  name: 'Masters of Evil (WWII)',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [SAVIOR],
};
