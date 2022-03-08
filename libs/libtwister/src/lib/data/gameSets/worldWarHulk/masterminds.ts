import { AbstractMastermind } from '../../../model';
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

class WWHulkMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const GENERAL_THUNDERBOLT_ROSS = new WWHulkMastermind(
  '1361f09c-889c-4d5b-92e2-6a739ad0fb09',
  'General "Thunderbolt” Ross',
  6,
  6,
  CODE_RED,
  false,
  TRANSFORM,
  WOUNDED_FURY,
  CROSS_DIMENSIONAL_RAMPAGE
);

export const ILLUMINATI_SECRET_SOCIETY = new WWHulkMastermind(
  '11332b30-7a2c-48d0-bbdb-d48860fd7769',
  'Illuminati, Secret Society',
  11,
  7,
  ILLUMINATI,
  false,
  TRANSFORM,
  OUTWIT
);

export const KING_HULK_SAKAARSON = new WWHulkMastermind(
  '3f018456-2aff-47a5-8556-f2be139ae2f9',
  'King Hulk, Sakaarson',
  9,
  6,
  WARBOUND,
  false,
  TRANSFORM,
  WOUNDED_FURY,
  CROSS_DIMENSIONAL_RAMPAGE
);

export const MODOK = new WWHulkMastermind(
  '7e7b6054-969f-4854-8049-39578bbf08ae',
  'M.O.D.O.K.',
  9,
  6,
  INTELLIGENCIA,
  false,
  TRANSFORM,
  OUTWIT
);

export const THE_RED_KING = new WWHulkMastermind(
  'fdf31917-70fd-4745-8625-7510fa5224e5',
  'The Red King',
  7,
  6,
  SAKAAR_IMPERIAL_GUARD,
  false,
  TRANSFORM
);

export const THE_SENTRY = new WWHulkMastermind(
  '14512d58-4e07-404c-a970-2d798202d801',
  'The Sentry',
  10,
  6,
  ASPECTS_OF_THE_VOID,
  false,
  FEAST,
  TRANSFORM,
  WOUNDED_FURY,
  CROSS_DIMENSIONAL_RAMPAGE
);
