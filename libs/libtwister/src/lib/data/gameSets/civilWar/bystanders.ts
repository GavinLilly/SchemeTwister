import { IBystander , CardType } from '../../../model';


import { META } from './meta';

export const ASPIRING_HERO: IBystander = {
  id: '24fa23a2-69ed-4117-a55d-901b7064e4f1',
  name: 'Aspiring Hero',
  copies: 4,
  victoryPoints: 1,
  gameSetId: META.id,
  cardType: CardType.BYSTANDER,
};

export const COMIC_SHOP_KEEPER: IBystander = {
  id: 'd61f5ca8-6d1b-43a4-acce-bf7ce4607eef',
  name: 'Comic Shop Keeper',
  copies: 4,
  victoryPoints: 1,
  gameSetId: META.id,
  cardType: CardType.BYSTANDER,
};
