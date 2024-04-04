import { VillainGroup } from '@schemetwister/libtwister';
import { CROSS_DIMENSIONAL_RAMPAGE } from '@schemetwister/schemetwister-series-marvel-common';

import { FEAST } from '../paintTheTownRed/paintTheTownRed.keywords';

import { OUTWIT, WOUNDED_FURY } from './worldWarHulk.keywords';
import { META } from './worldWarHulk.meta';

export const ASPECTS_OF_THE_VOID = new VillainGroup({
  id: '90ba3403-201c-4554-bde7-de31b2b18412',
  name: 'Aspects of the Void',
  gameSet: META,
  keywords: [FEAST, WOUNDED_FURY],
});

export const CODE_RED = new VillainGroup({
  id: '88d5ca32-e078-40e0-a4dc-b300d7424d66',
  name: 'Code Red',
  gameSet: META,
  keywords: [WOUNDED_FURY],
});

export const ILLUMINATI = new VillainGroup({
  id: 'b6b54f9a-56d7-4529-be48-8675c6df1422',
  name: 'Illuminati',
  gameSet: META,
  keywords: [OUTWIT, CROSS_DIMENSIONAL_RAMPAGE],
});

export const INTELLIGENCIA = new VillainGroup({
  id: '337af3e9-107a-40c7-8d54-adfe9e1a52e7',
  name: 'Intelligencia',
  gameSet: META,
  keywords: [OUTWIT, WOUNDED_FURY],
});

export const SAKAAR_IMPERIAL_GUARD = new VillainGroup({
  id: 'f32c2b11-6741-4b9e-85f9-c0ef77785bc3',
  name: 'Sakaar Imperial Guard',
  gameSet: META,
  keywords: [FEAST, OUTWIT],
});

export const UFOES = new VillainGroup({
  id: 'e35df983-8b44-444f-b8cc-8a084aef0d0c',
  name: 'U-Foes',
  gameSet: META,
});

export const WARBOUND = new VillainGroup({
  id: 'a7ba16e0-c4f4-40e9-b340-1bd8e9bf47c8',
  name: 'Warbound',
  gameSet: META,
  keywords: [FEAST, WOUNDED_FURY],
});
