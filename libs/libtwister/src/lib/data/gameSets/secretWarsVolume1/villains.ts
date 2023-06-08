import { IVillainGroup, CardType } from '../../../model';
import { BRIBE, TELEPORT } from '../darkCity/keywords';

import { CROSS_DIMENSIONAL_RAMPAGE, RISE_OF_THE_LIVING_DEAD } from './keywords';
import { META } from './meta';

export const THE_DEADLANDS: IVillainGroup = {
  id: '068e3934-7b0e-4f80-ab8a-167c06072090',
  name: 'The Deadlands',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [RISE_OF_THE_LIVING_DEAD],
};

export const DOMAIN_OF_APOCALYPSE: IVillainGroup = {
  id: '8f5f5b90-bbcd-48b0-845b-0c7e05c4bb7f',
  name: 'Domain of Apocalypse',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [TELEPORT, CROSS_DIMENSIONAL_RAMPAGE],
};

export const LIMBO: IVillainGroup = {
  id: 'db877f4e-d1d8-466b-86c8-c3253f01e282',
  name: 'Limbo',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [TELEPORT],
};

export const MANHATTAN_EARTH1610: IVillainGroup = {
  id: 'f3daf848-5a1d-44bc-ab5f-3261039cc0a2',
  name: 'Manhattan (Earth-1610)',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [TELEPORT, CROSS_DIMENSIONAL_RAMPAGE],
};

export const SENTINEL_TERRITORIES: IVillainGroup = {
  id: '32e33f51-ef58-4752-926b-eb5bf6fae586',
  name: 'Sentinel Territories',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [CROSS_DIMENSIONAL_RAMPAGE],
};

export const WASTELAND: IVillainGroup = {
  id: '77a97c27-ea12-4f9e-90ac-be5d017b3f20',
  name: 'Wasteland',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [BRIBE, CROSS_DIMENSIONAL_RAMPAGE],
};
