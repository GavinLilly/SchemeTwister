import { Hero } from '@schemetwister/libtwister';
import {
  AVENGERS,
  DANGER_SENSE,
  GUARDIANS_OF_THE_GALAXY,
} from '@schemetwister/series-marvel-common';

import {
  BURNING_SHARDS,
  CONTEST_OF_CHAMPIONS,
  COSMIC_THREAT,
  SHARDS,
} from './intoTheCosmos.keywords';
import { META } from './intoTheCosmos.meta';

export const ADAM_WARLOCK = new Hero({
  id: '8dff0c8f-5cac-4630-b96f-987e448328ba',
  name: 'Adam Warlock',
  team: AVENGERS,
  gameSet: META,
  keywords: [SHARDS, BURNING_SHARDS],
});

export const CAPTAIN_MAR_VELL = new Hero({
  id: '4bd27d21-bc0a-417a-aba9-757cf39e1d51',
  name: 'Captain Mar-Vell',
  team: AVENGERS,
  gameSet: META,
  keywords: [SHARDS, DANGER_SENSE],
});

export const MOONDRAGON = new Hero({
  id: '133725c6-f86f-4b02-bee5-c058929e0cd5',
  name: 'Moondragon',
  team: AVENGERS,
  gameSet: META,
  keywords: [SHARDS, DANGER_SENSE],
});

export const NEBULA = new Hero({
  id: 'e38f5577-bac1-4c54-ab65-62adb31bd96f',
  name: 'Nebula',
  team: GUARDIANS_OF_THE_GALAXY,
  gameSet: META,
  keywords: [SHARDS],
});

export const NOVA = new Hero({
  id: 'c2ec7fbf-283b-4de0-8ae0-cc4a88b15c0e',
  name: 'Nova',
  team: AVENGERS,
  gameSet: META,
  keywords: [SHARDS, COSMIC_THREAT],
});

export const PHYLA_VELL = new Hero({
  id: '49845aa3-2681-4c98-92a1-18afca2a735b',
  name: 'Phyla-Vell',
  team: GUARDIANS_OF_THE_GALAXY,
  gameSet: META,
  keywords: [SHARDS],
});

export const QUASAR = new Hero({
  id: '49cefede-776b-492e-8fea-4a8e191a292b',
  name: 'Quasar',
  team: AVENGERS,
  gameSet: META,
  keywords: [SHARDS, BURNING_SHARDS],
});

export const RONAN_THE_ACCUSER = new Hero({
  id: '261e3c11-8400-4f1e-8ac8-16c0cd753829',
  name: 'Ronan the Accuser',
  gameSet: META,
  keywords: [SHARDS, BURNING_SHARDS, CONTEST_OF_CHAMPIONS],
});

export const YONDU = new Hero({
  id: '9e36bcec-fc64-477e-9e2d-e83a54a2bfcb',
  name: 'Yondu',
  team: GUARDIANS_OF_THE_GALAXY,
  gameSet: META,
  keywords: [SHARDS, BURNING_SHARDS, DANGER_SENSE],
});
