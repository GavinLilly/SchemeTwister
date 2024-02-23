import { Hero } from '@schemetwister/libtwister';

import { X_MEN } from '../../teams';
import { DIVIDED } from '../civilWar/civilWar.keywords';

import {
  BERSERK,
  LIGHTSHOW,
  PIERCING_ENERGY,
  SOARING_FLIGHT,
  X_GENE,
} from './xMen.keywords';
import { META } from './xMen.meta';

export const AURORA_NORTHSTAR = new Hero({
  id: 'de49773c-6fef-46a9-b5e7-cce7ff87ebc0',
  name: 'Aurora & Northstar',
  team: X_MEN,
  gameSet: META,

  keywords: [DIVIDED, BERSERK, SOARING_FLIGHT, LIGHTSHOW],
});

export const BANSHEE = new Hero({
  id: 'a3ff4e01-6c49-46bf-bd12-01180a4f37bb',
  name: 'Banshee',
  team: X_MEN,
  gameSet: META,

  keywords: [X_GENE, PIERCING_ENERGY, SOARING_FLIGHT],
});

export const BEAST = new Hero({
  id: 'de15bf03-e774-4df5-8f4b-590117b258f3',
  name: 'Beast',
  team: X_MEN,
  gameSet: META,

  keywords: [X_GENE, BERSERK],
});

export const CANNONBALL = new Hero({
  id: 'e75d448c-08d8-4c44-ab56-971bab511ecf',
  name: 'Cannonball',
  team: X_MEN,
  gameSet: META,

  keywords: [SOARING_FLIGHT],
});

export const COLUSSUS_WOLVERINE = new Hero({
  id: '6b1c7ecb-88ef-4321-a8c3-9e658d034079',
  name: 'Colussus & Wolverine',
  team: X_MEN,
  gameSet: META,

  keywords: [DIVIDED, X_GENE, BERSERK, SOARING_FLIGHT],
});

export const DAZZLER = new Hero({
  id: 'ae9b6454-defa-4d25-8e3e-787e3e088cc2',
  name: 'Dazzler',
  team: X_MEN,
  gameSet: META,

  keywords: [PIERCING_ENERGY, LIGHTSHOW],
});

export const HAVOK = new Hero({
  id: 'ee9beeae-f97b-4178-83fc-ab52e3c11291',
  name: 'Havok',
  team: X_MEN,
  gameSet: META,

  keywords: [X_GENE, BERSERK, LIGHTSHOW],
});

export const JUBILEE = new Hero({
  id: 'dc778eae-1a9c-4f68-a75f-f3b01bcef869',
  name: 'Jubilee',
  team: X_MEN,
  gameSet: META,

  keywords: [LIGHTSHOW],
});

export const KITTY_PRYDE = new Hero({
  id: '76a70e7c-e20a-4e7d-b713-0bacad1d2ccc',
  name: 'Kitty Pryde',
  team: X_MEN,
  gameSet: META,

  keywords: [X_GENE, SOARING_FLIGHT],
});

export const LEGION = new Hero({
  id: '30c020d5-082c-4ede-9fca-6bbf4d4a2f41',
  name: 'Legion',
  team: X_MEN,
  gameSet: META,

  keywords: [DIVIDED, PIERCING_ENERGY, BERSERK, SOARING_FLIGHT, LIGHTSHOW],
});

export const LONGSHOT = new Hero({
  id: '7c472f3c-eb7d-4bc0-8bc1-8fb596617e82',
  name: 'Longshot',
  team: X_MEN,
  gameSet: META,

  keywords: [BERSERK],
});

export const PHOENIX = new Hero({
  id: '8c06ea1a-391f-40e5-b040-bb1912e205d4',
  name: 'Phoenix',
  team: X_MEN,
  gameSet: META,

  keywords: [PIERCING_ENERGY, BERSERK, SOARING_FLIGHT],
});

export const POLARIS = new Hero({
  id: '317a8234-96b3-452f-b4fb-d51f9acacca0',
  name: 'Polaris',
  team: X_MEN,
  gameSet: META,

  keywords: [X_GENE, PIERCING_ENERGY, SOARING_FLIGHT],
});

export const PSYLOCKE = new Hero({
  id: 'c46f0fb2-d638-43d8-a879-fcc8f7cb25f0',
  name: 'Psylocke',
  team: X_MEN,
  gameSet: META,

  keywords: [X_GENE, PIERCING_ENERGY],
});

export const X23 = new Hero({
  id: '9738e700-1f02-48e0-9b9b-17bce60c13fb',
  name: 'X-23',
  team: X_MEN,
  gameSet: META,

  keywords: [X_GENE, BERSERK],
});
