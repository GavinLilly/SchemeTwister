import { IVillainGroup , CardType } from '../../../model';


import { EXCESSIVE_VIOLENCE } from './keywords';
import { META } from './meta';

export const DEADPOOLS_FRIENDS: IVillainGroup = {
  id: '64a75bb7-bf4a-4b77-a299-de6ee6842001',
  name: `Deadpool's "Friends"`,
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [EXCESSIVE_VIOLENCE],
};

export const EVIL_DEADPOOL_CORPSE: IVillainGroup = {
  id: '2a9d540b-60e5-4ccc-bc60-fcb96fe89321',
  name: 'Evil Deadpool Corpse',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [EXCESSIVE_VIOLENCE],
};
