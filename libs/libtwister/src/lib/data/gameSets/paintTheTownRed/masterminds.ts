import { AbstractMastermind } from '../../../model';

import { FEAST } from './keywords';
import { META } from './meta';
import { MAXIMUM_CARNAGE, SINISTER_SIX } from './villains';

class PttrMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const CARNAGE = new PttrMastermind(
  '9e4870e5-7137-4c2f-994f-aa70876a8dae',
  'Carnage',
  9,
  6,
  MAXIMUM_CARNAGE,
  false,
  FEAST
);

export const MYSTERIO = new PttrMastermind(
  '41e155a1-92e7-4c76-992f-319cd55c47f0',
  'Mysterio',
  8,
  6,
  SINISTER_SIX
);
