import { Hero } from '@schemetwister/libtwister';
import {
  ARTIFACT,
  DEMOLISH,
  HYDRA,
  THROWN_ARTIFACT,
} from '@schemetwister/schemetwister-series-marvel-common';

import { FOES_OF_ASGARD } from '../../teams';

import { META } from './fearItself.meta';

export const GREITHOTH_BREAKER_OF_WILLS = new Hero({
  id: 'aae895fd-bd30-4924-a11c-e7def711c23b',
  name: 'Greithoth, Breaker of Wills',
  team: FOES_OF_ASGARD,
  gameSet: META,
  keywords: [ARTIFACT, THROWN_ARTIFACT],
});

export const KUURTH_BREAKER_OF_STONE = new Hero({
  id: 'd36ca623-b752-489a-9097-5f030647e7c4',
  name: 'Kuurth, Breaker of Stone',
  team: FOES_OF_ASGARD,
  gameSet: META,
  keywords: [THROWN_ARTIFACT],
});

export const NERKKOD_BREAKER_OF_OCEANS = new Hero({
  id: '31338b1b-d68e-4a4f-95db-c40cee72f76e',
  name: 'Nerkkod, Breaker of Oceans',
  team: FOES_OF_ASGARD,
  gameSet: META,
  keywords: [THROWN_ARTIFACT],
});

export const NUL_BREAKER_OF_WORLDS = new Hero({
  id: '414ecfae-07f8-42fb-9fd0-41c39a298260',
  name: 'Nul, Breaker of Worlds',
  team: FOES_OF_ASGARD,
  gameSet: META,
  keywords: [DEMOLISH, THROWN_ARTIFACT],
});

export const SKADI = new Hero({
  id: '1737a6bf-634f-4ad2-a7bc-b844493216d9',
  name: 'Skadi',
  team: HYDRA,
  gameSet: META,
  keywords: [THROWN_ARTIFACT],
});

export const SKIRN_BREAKER_OF_MEN = new Hero({
  id: '71f3509b-bff5-47e8-ac9b-568f5c5cb887',
  name: 'Skirn, Breaker of Men',
  team: FOES_OF_ASGARD,
  gameSet: META,
  keywords: [THROWN_ARTIFACT],
});
