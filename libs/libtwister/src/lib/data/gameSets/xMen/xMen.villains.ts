import { VillainGroup } from '../../../model';

import {
  X_GENE,
  DOMINATE,
  TRAPS,
  TOKEN_CARDS,
  HUMAN_SHIELDS,
  SOARING_FLIGHT,
} from './keywords';
import { META } from './meta';

export const DARK_DESCENDANTS = new VillainGroup({
  id: 'eb82a628-241e-496f-bb3a-65f05dd65162',
  name: 'Dark Descendants',
  gameSet: META,

  keywords: [X_GENE, DOMINATE, TRAPS],
});

export const HELLFIRE_CLUB = new VillainGroup({
  id: '98b5a781-0137-4a57-ae35-7b05a6c617f9',
  name: 'Hellfire Club',
  gameSet: META,

  keywords: [DOMINATE, TRAPS, TOKEN_CARDS],
});

export const MOJOVERSE = new VillainGroup({
  id: '51be7e1f-d2a6-49cb-8155-392bb497db2e',
  name: 'Mojoverse',
  gameSet: META,

  keywords: [HUMAN_SHIELDS, TRAPS],
});

export const MURDERWORLD = new VillainGroup({
  id: '84d6062e-66a9-4e2b-ab9d-518502295723',
  name: 'Murderworld',
  gameSet: META,

  keywords: [HUMAN_SHIELDS, TRAPS, TOKEN_CARDS],
});

export const SHADOW_X = new VillainGroup({
  id: '46bb7cbc-16f1-4df1-8cb8-b591e1ec8d4a',
  name: 'Shadow-X',
  gameSet: META,

  keywords: [X_GENE, SOARING_FLIGHT, DOMINATE, TRAPS],
});

export const SHIAR_IMPERIAL_GUARD = new VillainGroup({
  id: '958904bf-dff4-4e56-a157-c2980477558b',
  name: 'Shiar Imperial Guard',
  gameSet: META,

  keywords: [DOMINATE, TRAPS, TOKEN_CARDS],
});

export const SISTERHOOD_OF_MUTANTS = new VillainGroup({
  id: '3d71cf65-e446-4f42-bb95-f596726ac80a',
  name: 'Sisterhood of Mutants',
  gameSet: META,

  keywords: [DOMINATE, TRAPS],
});
