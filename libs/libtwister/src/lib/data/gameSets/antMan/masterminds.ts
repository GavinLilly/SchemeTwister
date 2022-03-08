import { AbstractMastermind } from '../../../model';

import { CHIVALROUS_DUEL, EMPOWERED } from './keywords';
import { META } from './meta';
import { QUEENS_VENGEANCE, ULTRONS_LEGACY } from './villains';

abstract class AbstractAntManMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class BaseUltron extends AbstractAntManMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(id, 'Ultron', attackPoints, 6, ULTRONS_LEGACY, epic, EMPOWERED);
  }
}

export const ULTRON = new BaseUltron('90f9437a-04b6-4efb-85af-829896a83ac8', 9);

export const EPIC_ULTRON = new BaseUltron(
  '89167683-86c8-497b-95af-17838c3d7021',
  10,
  true
);

class BaseMorganLeFay extends AbstractAntManMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(
      id,
      'Morgan Le Fay',
      attackPoints,
      6,
      QUEENS_VENGEANCE,
      epic,
      CHIVALROUS_DUEL
    );
  }
}

export const MORGAN_LE_FAY = new BaseMorganLeFay(
  'eadae97c-473e-46db-bf18-ac871d378031',
  7
);

export const EPIC_MORGAN_LE_FAY = new BaseMorganLeFay(
  'b2adb1bc-d44f-4fdb-8860-67c4f539f825',
  9,
  true
);
