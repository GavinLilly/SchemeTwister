import { IVillainGroup , CardType } from '../../../model';


import { MOONLIGHT_AND_SUNLIGHT, WAKING_NIGHTMARE } from './keywords';
import { META } from './meta';

export const DEMONS_OF_LIMBO: IVillainGroup = {
  id: 'c236e200-011d-4e56-b04a-b61b0011ced3',
  name: 'Demons of Limbo',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [MOONLIGHT_AND_SUNLIGHT, WAKING_NIGHTMARE],
};

export const HELLIONS: IVillainGroup = {
  id: '2745b10a-fd6d-4d92-94ad-ee7c870876d3',
  name: 'Hellions',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [MOONLIGHT_AND_SUNLIGHT, WAKING_NIGHTMARE],
};
