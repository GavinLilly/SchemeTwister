import { VillainGroup } from '@schemetwister/libtwister';

import { CROSS_DIMENSIONAL_RAMPAGE } from '../secretWarsVolume1/sw1.keywords';

import {
  CHARGE,
  CIRCLE_OF_KUNG_FU,
  FATEFUL_RESURRECTION,
  PATROL,
  SPECTRUM,
} from './sw2.keywords';
import { META } from './sw2.meta';

export const DEADPOOLS_SECRET_SECRET_WARS = new VillainGroup({
  id: '529d6fbb-9b0b-48d1-b0ab-da7569dfd50d',
  name: "Deadpool's Secret Secret Wars",

  gameSet: META,
  keywords: [SPECTRUM, CIRCLE_OF_KUNG_FU, FATEFUL_RESURRECTION],
});

export const GUARDIANS_OF_KNOWHERE = new VillainGroup({
  id: 'd1d5e11f-0027-419a-8775-52c19e5da2ae',
  name: 'Guardians of Knowhere',

  gameSet: META,
  keywords: [PATROL, FATEFUL_RESURRECTION, CHARGE],
});

export const KUNLUN = new VillainGroup({
  id: '5813628d-f039-4564-a804-1c34a1d15954',
  name: "K'un-Lun",

  gameSet: META,
  keywords: [CIRCLE_OF_KUNG_FU],
});

export const MONSTER_METROPOLIS = new VillainGroup({
  id: 'e1d78a8a-797b-48cb-8001-166540608666',
  name: 'Monster Metropolis',

  gameSet: META,
  keywords: [CROSS_DIMENSIONAL_RAMPAGE, FATEFUL_RESURRECTION, CHARGE],
});

export const UTOPOLIS = new VillainGroup({
  id: 'e983b5b3-8d3e-4e4e-a670-f0d78875eccc',
  name: 'Utopolis',

  gameSet: META,
  keywords: [SPECTRUM, PATROL, CHARGE],
});

export const XMEN_92 = new VillainGroup({
  id: 'fc09e974-dada-444d-8434-f3e9924354d9',
  name: "X-Men '92",

  gameSet: META,
  keywords: [CROSS_DIMENSIONAL_RAMPAGE, SPECTRUM, CHARGE],
});
