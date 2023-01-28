import { AbstractMastermind } from '../../../model';

import { ARTIFACT, SHARDS } from './keywords';
import { META } from './meta';
import { INFINITY_GEMS, KREE_STARFORCE } from './villains';

class GuardiansOfTheGalaxyMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const SUPREME_INTELLIGENCE = new GuardiansOfTheGalaxyMastermind(
  '4cc39f08-f904-433f-8345-abf183de331a',
  'Supreme Intelligence of the Kree',
  9,
  6,
  KREE_STARFORCE,
  false,
  SHARDS
);

export const THANOS = new GuardiansOfTheGalaxyMastermind(
  'a70ec132-82aa-4a6c-bf26-f57928b3b066',
  'Thanos',
  24,
  7,
  INFINITY_GEMS,
  false,
  ARTIFACT
);
