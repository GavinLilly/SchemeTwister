import { AbstractMastermind } from '../../../model';

import { ASTRAL_PLANE, DEMONIC_BARGAIN } from './keywords';
import { META } from './meta';
import { FEAR_LORDS, LORDS_OF_NETHERWORLD } from './villains';

abstract class AbstractShadowsOfNightmareMastermind extends AbstractMastermind {
  public readonly gameSetId: string = META.id;
}

class BaseDormammu extends AbstractShadowsOfNightmareMastermind {
  constructor(id: string, attackPoints: number, epic = false) {
    super(
      id,
      'Dormammu',
      attackPoints,
      6,
      LORDS_OF_NETHERWORLD,
      epic,
      DEMONIC_BARGAIN
    );
  }
}

export const DORMAMMU = new BaseDormammu(
  '44f15c5d-86db-49d9-9eaa-6a98405a7ffd',
  11
);

export const EPIC_DORMAMMU = new BaseDormammu(
  '7faff6e6-d8a1-4bb1-bde0-edbc6873af68',
  13,
  true
);

class BaseNightmare extends AbstractShadowsOfNightmareMastermind {
  constructor(id: string, attackPoints: number, epic = false) {
    super(id, 'Nightmare', attackPoints, 6, FEAR_LORDS, epic, ASTRAL_PLANE);
  }
}

export const NIGHTMARE = new BaseNightmare(
  'abca8754-2331-462c-8b96-cee46ce9f00e',
  6
);

export const EPIC_NIGHTMARE = new BaseNightmare(
  '85d2d78a-a56a-4bee-9c4b-4808bc6d9c00',
  8,
  true
);
