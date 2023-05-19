import { IVillainGroup, CardType } from '../../../model';
import { CROSS_DIMENSIONAL_RAMPAGE } from '../secretWarsVolume1/keywords';

import {
  CHARGE,
  CIRCLE_OF_KUNG_FU,
  FATEFUL_RESURRECTION,
  PATROL,
  SPECTRUM,
} from './keywords';
import { META } from './meta';

export const DEADPOOLS_SECRET_SECRET_WARS: IVillainGroup = {
  id: '529d6fbb-9b0b-48d1-b0ab-da7569dfd50d',
  name: "Deadpool's Secret Secret Wars",
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [SPECTRUM, CIRCLE_OF_KUNG_FU, FATEFUL_RESURRECTION],
};

export const GUARDIANS_OF_KNOWHERE: IVillainGroup = {
  id: 'd1d5e11f-0027-419a-8775-52c19e5da2ae',
  name: 'Guardians of Knowhere',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [PATROL, FATEFUL_RESURRECTION, CHARGE],
};

export const KUNLUN: IVillainGroup = {
  id: '5813628d-f039-4564-a804-1c34a1d15954',
  name: "K'un-Lun",
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [CIRCLE_OF_KUNG_FU],
};

export const MONSTER_METROPOLIS: IVillainGroup = {
  id: 'e1d78a8a-797b-48cb-8001-166540608666',
  name: 'Monster Metropolis',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [CROSS_DIMENSIONAL_RAMPAGE, FATEFUL_RESURRECTION, CHARGE],
};

export const UTOPOLIS: IVillainGroup = {
  id: 'e983b5b3-8d3e-4e4e-a670-f0d78875eccc',
  name: 'Utopolis',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [SPECTRUM, PATROL, CHARGE],
};

export const XMEN_92: IVillainGroup = {
  id: 'fc09e974-dada-444d-8434-f3e9924354d9',
  name: "X-Men '92",
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [CROSS_DIMENSIONAL_RAMPAGE, SPECTRUM, CHARGE],
};
