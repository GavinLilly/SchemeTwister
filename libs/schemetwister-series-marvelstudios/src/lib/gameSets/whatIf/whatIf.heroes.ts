import { Hero } from '@schemetwister/libtwister';
import {
  CROSS_DIMENSIONAL_RAMPAGE,
  EMPOWERED,
} from '@schemetwister/schemetwister-series-marvel-common';

import { GUARDIANS_OF_THE_MULTIVERSE } from '../../teams';

import { LIBERATE, SOULBIND, WHAT_IF } from './whatIf.keywords';
import { META } from './whatIf.meta';

export const APOCALYPTIC_BLACK_WIDOW = new Hero({
  id: '7cd0e8b2-3e95-4c9e-99df-f718810f4f28',
  name: 'Apocalyptic Black Widow',
  team: GUARDIANS_OF_THE_MULTIVERSE,
  gameSet: META,
  keywords: [LIBERATE, WHAT_IF],
});

export const CAPTAIN_CARTER = new Hero({
  id: '5f101fc4-969c-4db3-b5a2-672c7b054a28',
  name: 'Captain Carter',
  team: GUARDIANS_OF_THE_MULTIVERSE,
  gameSet: META,
  keywords: [WHAT_IF, LIBERATE],
});

export const DOCTOR_STRANGE_SUPREMEM = new Hero({
  id: '0bcb2528-5a29-453e-af0b-801b438d8e55',
  name: 'Doctor Strange Supreme',
  team: GUARDIANS_OF_THE_MULTIVERSE,
  gameSet: META,
  keywords: [SOULBIND, WHAT_IF],
});

export const GAMORA_DESTROYER_OF_THANOS = new Hero({
  id: '7bae17d1-db66-44c4-b847-3eaf45e03501',
  name: 'Gamora, Destroyer of Thanos',
  team: GUARDIANS_OF_THE_MULTIVERSE,
  gameSet: META,
  keywords: [WHAT_IF, SOULBIND],
});

export const KILLMONGER_SPEC_OPS = new Hero({
  id: 'ae773c41-63df-4838-8cd4-1079e1f3ff12',
  name: 'Killmonger, Spec Ops',
  team: GUARDIANS_OF_THE_MULTIVERSE,
  gameSet: META,
  keywords: [WHAT_IF, LIBERATE],
});

export const PARTY_THOR = new Hero({
  id: '8061a96a-3d5f-48d1-9756-20fd0f5d1d6c',
  name: 'Party Thor',
  team: GUARDIANS_OF_THE_MULTIVERSE,
  gameSet: META,
  keywords: [CROSS_DIMENSIONAL_RAMPAGE, WHAT_IF],
});

export const STAR_LORD_TCHALLA = new Hero({
  id: '4a563ea0-d0da-458f-bd5c-15f78c6fa60e',
  name: "Star-Load T'Challa",
  team: GUARDIANS_OF_THE_MULTIVERSE,
  gameSet: META,
  keywords: [EMPOWERED, WHAT_IF],
});

export const UATU_THE_WATCHER = new Hero({
  id: '80086a43-e2b9-45ea-ab40-9aa328da04bf',
  name: 'Uatu, The Watcher',
  team: GUARDIANS_OF_THE_MULTIVERSE,
  gameSet: META,
  keywords: [WHAT_IF, EMPOWERED, SOULBIND],
});
