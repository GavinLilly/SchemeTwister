import { AbstractMastermind } from '../../../model';

import { MASS_MOMENTUM } from './keywords';
import { META } from './meta';
import { ANNIHILATION_WAVE, TIMELINES_OF_KANG } from './villains';

abstract class AbstractAnnihilationMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class BaseAnnihilus extends AbstractAnnihilationMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(
      id,
      'Annihilus',
      attackPoints,
      6,
      ANNIHILATION_WAVE,
      epic,
      MASS_MOMENTUM
    );
  }
}

export const ANNIHILUS = new BaseAnnihilus(
  '0db4044f-d88e-4fab-835e-55243ccec0f8',
  '10+'
);

export const EPIC_ANNIHILUS = new BaseAnnihilus(
  '1b6c9f4c-fddd-45fb-b4f0-b5a2f3316e16',
  '12+',
  true
);

class BaseKang extends AbstractAnnihilationMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(id, 'Kang the Conqueror', attackPoints, 6, TIMELINES_OF_KANG, epic);
  }
}

export const KANG_THE_CONQUEROR = new BaseKang(
  'c80a223b-cbf5-44ac-823f-f3647792e0a1',
  '8+'
);

export const EPIC_KANG_THE_CONQUEROR = new BaseKang(
  '334b2b68-157d-4d9b-b249-fa69df1ec74d',
  '10+',
  true
);
