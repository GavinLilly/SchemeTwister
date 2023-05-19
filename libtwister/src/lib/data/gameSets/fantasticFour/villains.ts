import { IVillainGroup, CardType } from '../../../model';

import { BURROW, COSMIC_THREAT } from './keywords';
import { META } from './meta';

export const HERALDS_OF_GALACTUS: IVillainGroup = {
  id: 'ec13a924-108a-48ba-8dfd-4eb6b310febc',
  name: 'Heralds of Galactus',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [COSMIC_THREAT],
};

export const SUBTERRANEA: IVillainGroup = {
  id: '8e152e27-b507-402e-8049-8425cbc79734',
  name: 'Subterranea',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [BURROW],
};
