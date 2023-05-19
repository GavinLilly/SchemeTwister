import { Mastermind } from '../../../model';
import { FEAST } from '../paintTheTownRed/keywords';

import {
  CROSS_DIMENSIONAL_RAMPAGE,
  OUTWIT,
  TRANSFORM,
  WOUNDED_FURY,
} from './keywords';
import { META } from './meta';
import {
  ASPECTS_OF_THE_VOID,
  CODE_RED,
  ILLUMINATI,
  INTELLIGENCIA,
  SAKAAR_IMPERIAL_GUARD,
  WARBOUND,
} from './villains';

export const GENERAL_THUNDERBOLT_ROSS = new Mastermind({
  id: '1361f09c-889c-4d5b-92e2-6a739ad0fb09',
  name: 'General "Thunderbolt” Ross',
  gameSet: META,
  attackPoints: 6,
  victoryPoints: 6,
  alwaysLeads: [CODE_RED],
  keywords: [TRANSFORM, WOUNDED_FURY, CROSS_DIMENSIONAL_RAMPAGE],
});

export const ILLUMINATI_SECRET_SOCIETY = new Mastermind({
  id: '11332b30-7a2c-48d0-bbdb-d48860fd7769',
  name: 'Illuminati, Secret Society',
  gameSet: META,
  attackPoints: 11,
  victoryPoints: 7,
  alwaysLeads: [ILLUMINATI],
  keywords: [TRANSFORM, OUTWIT],
});

export const KING_HULK_SAKAARSON = new Mastermind({
  id: '3f018456-2aff-47a5-8556-f2be139ae2f9',
  name: 'King Hulk, Sakaarson',
  gameSet: META,
  attackPoints: 9,
  victoryPoints: 6,
  alwaysLeads: [WARBOUND],
  keywords: [TRANSFORM, WOUNDED_FURY, CROSS_DIMENSIONAL_RAMPAGE],
});

export const MODOK = new Mastermind({
  id: '7e7b6054-969f-4854-8049-39578bbf08ae',
  name: 'M.O.D.O.K.',
  gameSet: META,
  attackPoints: 9,
  victoryPoints: 6,
  alwaysLeads: [INTELLIGENCIA],
  keywords: [TRANSFORM, OUTWIT],
});

export const THE_RED_KING = new Mastermind({
  id: 'fdf31917-70fd-4745-8625-7510fa5224e5',
  name: 'The Red King',
  gameSet: META,
  attackPoints: 7,
  victoryPoints: 6,
  alwaysLeads: [SAKAAR_IMPERIAL_GUARD],
  keywords: [TRANSFORM],
});

export const THE_SENTRY = new Mastermind({
  id: '14512d58-4e07-404c-a970-2d798202d801',
  name: 'The Sentry',
  gameSet: META,
  attackPoints: 10,
  victoryPoints: 6,
  alwaysLeads: [ASPECTS_OF_THE_VOID],
  keywords: [FEAST, TRANSFORM, WOUNDED_FURY, CROSS_DIMENSIONAL_RAMPAGE],
});
