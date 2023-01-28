import { IVillainGroup , CardType } from '../../../model';


import { DEMOLISH, ELUSIVE, X_TREME_ATTACK } from './keywords';
import { META } from './meta';

export const AVENGERS: IVillainGroup = {
  id: '5a6e5a2f-939c-4c7e-8d10-5261cf375553',
  name: 'Avengers',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [DEMOLISH, ELUSIVE],
};

export const DEFENDERS: IVillainGroup = {
  id: 'be582617-82af-4727-9528-1cb35561af56',
  name: 'Defenders',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
};

export const MARVEL_KNIGHTS: IVillainGroup = {
  id: 'b684fdfe-60ab-4af8-8b83-e46f7ebd708a',
  name: 'Marvel Knights',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
};

export const SPIDER_FRIENDS: IVillainGroup = {
  id: '04b86954-b605-48cb-beed-1e3121384c98',
  name: 'Spider Friends',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [ELUSIVE],
};

export const UNCANNY_AVENGERS: IVillainGroup = {
  id: '4ed437b8-13fc-4ebc-acf7-a4606396e928',
  name: 'Uncanny Avengers',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [X_TREME_ATTACK],
};

export const UNCANNY_XMEN: IVillainGroup = {
  id: 'd5602d88-f8aa-4f4c-87c7-7a70e56e732f',
  name: 'Uncanny X-Men',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [ELUSIVE, X_TREME_ATTACK],
};

export const XMEN_FIRST_CLASS: IVillainGroup = {
  id: '38875e12-6cf7-434b-9215-687f7f17932d',
  name: 'X-Men First Class',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [X_TREME_ATTACK],
};
