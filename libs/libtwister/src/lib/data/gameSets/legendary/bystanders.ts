import { IBystander , CardType } from '../../../model';


import { META } from './meta';

export const BYSTANDER: IBystander = {
  id: 'd84ef365-e212-430b-9925-c567ef17569f',
  name: 'Bystander',
  copies: 30,
  victoryPoints: 1,
  gameSetId: META.id,
  cardType: CardType.BYSTANDER,
};
