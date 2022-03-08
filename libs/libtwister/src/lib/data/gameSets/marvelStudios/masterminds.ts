import { AbstractMastermind } from '../../../model';

import { CONQUEROR } from './keywords';
import { META } from './meta';
import { ENEMIES_OF_ASGARD, HYDRA, IRON_FOES } from './villains';

class MarvelStudiosMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const IRON_MONGER = new MarvelStudiosMastermind(
  'a809a0db-8214-4547-9fd6-177c03050055',
  'Iron Monger',
  9,
  5,
  IRON_FOES,
  false,
  CONQUEROR
);

export const LOKI = new MarvelStudiosMastermind(
  'a9f48d6c-820c-4837-a5da-1342b4f0f338',
  'Loki',
  10,
  5,
  ENEMIES_OF_ASGARD
);

export const RED_SKULL = new MarvelStudiosMastermind(
  '750bdc8a-9583-4117-bab6-92238b26739a',
  'Red Skull',
  7,
  5,
  HYDRA
);
