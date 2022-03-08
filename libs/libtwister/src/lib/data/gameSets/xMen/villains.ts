import { IVillainGroup , CardType } from '../../../model';


import {
  X_GENE,
  DOMINATE,
  TRAPS,
  TOKEN_CARDS,
  HUMAN_SHIELDS,
  SOARING_FLIGHT,
} from './keywords';
import { META } from './meta';

export const DARK_DESCENDANTS: IVillainGroup = {
  id: 'eb82a628-241e-496f-bb3a-65f05dd65162',
  name: 'Dark Descendants',
  gameSetId: META.id,
  cardType: CardType.VILLAINGROUP,
  keywords: [X_GENE, DOMINATE, TRAPS],
};

export const HELLFIRE_CLUB: IVillainGroup = {
  id: '98b5a781-0137-4a57-ae35-7b05a6c617f9',
  name: 'Hellfire Club',
  gameSetId: META.id,
  cardType: CardType.VILLAINGROUP,
  keywords: [DOMINATE, TRAPS, TOKEN_CARDS],
};

export const MOJOVERSE: IVillainGroup = {
  id: '51be7e1f-d2a6-49cb-8155-392bb497db2e',
  name: 'Mojoverse',
  gameSetId: META.id,
  cardType: CardType.VILLAINGROUP,
  keywords: [HUMAN_SHIELDS, TRAPS],
};

export const MURDERWORLD: IVillainGroup = {
  id: '84d6062e-66a9-4e2b-ab9d-518502295723',
  name: 'Murderworld',
  gameSetId: META.id,
  cardType: CardType.VILLAINGROUP,
  keywords: [HUMAN_SHIELDS, TRAPS, TOKEN_CARDS],
};

export const SHADOW_X: IVillainGroup = {
  id: '46bb7cbc-16f1-4df1-8cb8-b591e1ec8d4a',
  name: 'Shadow-X',
  gameSetId: META.id,
  cardType: CardType.VILLAINGROUP,
  keywords: [X_GENE, SOARING_FLIGHT, DOMINATE, TRAPS],
};

export const SHIAR_IMPERIAL_GUARD: IVillainGroup = {
  id: '958904bf-dff4-4e56-a157-c2980477558b',
  name: 'Shiar Imperial Guard',
  gameSetId: META.id,
  cardType: CardType.VILLAINGROUP,
  keywords: [DOMINATE, TRAPS, TOKEN_CARDS],
};

export const SISTERHOOD_OF_MUTANTS: IVillainGroup = {
  id: '3d71cf65-e446-4f42-bb95-f596726ac80a',
  name: 'Sisterhood of Mutants',
  gameSetId: META.id,
  cardType: CardType.VILLAINGROUP,
  keywords: [DOMINATE, TRAPS],
};
