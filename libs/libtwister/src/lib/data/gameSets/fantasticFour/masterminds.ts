import { AbstractMastermind } from '../../../model';

import { GALACTUS_COSMIC_THREAT } from './keywords';
import { META } from './meta';
import { HERALDS_OF_GALACTUS, SUBTERRANEA } from './villains';

class FantasticFourMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const GALACTUS = new FantasticFourMastermind(
  '9782d689-6f55-435e-a99f-0b91cf167fe9',
  'Galactus',
  20,
  7,
  HERALDS_OF_GALACTUS,
  false,
  GALACTUS_COSMIC_THREAT
);

export const MOLE_MAN = new FantasticFourMastermind(
  'd05d9daa-802c-46eb-93a9-812ea79fa203',
  'Mole Man',
  7,
  6,
  SUBTERRANEA
);
