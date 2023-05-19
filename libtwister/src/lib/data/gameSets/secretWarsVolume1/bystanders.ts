import { IBystander, CardType } from '../../../model';

import { META } from './meta';

export const BANKER: IBystander = {
  id: '2fb373d6-57ee-4dff-9575-00d6a6185e88',
  name: 'Banker',
  cardType: CardType.BYSTANDER,
  copies: 3,
  gameSet: META,
  victoryPoints: 1,
};
