import { IVillainGroup, CardType } from '../../../model';

import { FEAST } from './keywords';
import { META } from './meta';

export const MAXIMUM_CARNAGE: IVillainGroup = {
  id: '7a950d64-6bbf-4993-99f6-9071542ba6e0',
  name: 'Maxmimum Carnage',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [FEAST],
};

export const SINISTER_SIX: IVillainGroup = {
  id: '13e916d4-f3f3-4fd1-9d27-f22987b009e2',
  name: 'Sinister Six',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
};
