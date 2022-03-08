import { IVillainGroup , CardType } from '../../../model';


import { POISION_VILLAINS, SYMBIOTE_BONDS } from './keywords';
import { META } from './meta';

export const LIFE_FOUNDATION: IVillainGroup = {
  id: '8e892d94-e2ae-4949-9cf3-dd20487c6b9a',
  name: 'Life Foundation',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [SYMBIOTE_BONDS],
};

export const POISONS: IVillainGroup = {
  id: 'db59bd15-218a-4f34-b8b7-f78ddf148053',
  name: 'Poisons',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [SYMBIOTE_BONDS, POISION_VILLAINS],
};
