import { IVillainGroup , CardType } from '../../../model';
import { BRIBE } from '../darkCity/keywords';

import { FORTIFY, SHIELD_CLEARANCE, SIZE_CHANGING } from './keywords';
import { META } from './meta';

export const CSA_SPECIAL_MARSHALS: IVillainGroup = {
  id: '329fc891-df4a-4e35-88fd-6f80286f1cef',
  name: 'CSA Special Marshals',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [SIZE_CHANGING, FORTIFY],
};

export const GREAT_LAKE_AVENGERS: IVillainGroup = {
  id: 'ea8b66c5-c730-4ada-b4c7-9996a5bb93c8',
  name: 'Great Lakes Avengers',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [SIZE_CHANGING, FORTIFY],
};

export const HEROES_FOR_HIRE: IVillainGroup = {
  id: 'df3e0ea4-edbd-4b2d-8057-69520b52d009',
  name: 'Heroes for Hire',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [BRIBE, FORTIFY],
};

export const REGISTRATION_ENFORCERS: IVillainGroup = {
  id: 'a0c95643-8d51-44aa-9abf-24bd586be5ce',
  name: 'Registration Enforcers',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [SIZE_CHANGING],
};

export const SHIELD_ELITE: IVillainGroup = {
  id: 'a38d4861-93d6-4edf-ab0c-81290e452944',
  name: 'S.H.I.E.L.D. Elite',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [FORTIFY, SHIELD_CLEARANCE],
};

export const SUPERHUMAN_REGISTRATION_ACT: IVillainGroup = {
  id: '81509e55-b191-4731-bab2-c2c365f0fc1d',
  name: 'Superhuman Registration Act',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [SIZE_CHANGING, FORTIFY],
};

export const THUNDERBOLTS: IVillainGroup = {
  id: '556db507-4b67-4273-8420-c06ba339f8a0',
  name: 'Thunderbolts',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [FORTIFY],
};
