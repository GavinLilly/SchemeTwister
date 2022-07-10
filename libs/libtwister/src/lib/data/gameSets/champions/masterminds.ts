import { AbstractMastermind } from '../../../model';
import { VERSATILE } from '../darkCity/keywords';
import { DEMOLISH } from '../villains/keywords';

import { SIZE_CHANGING } from './keywords';
import { META } from './meta';
import { MONSTERS_UNLEASHED, WRECKING_CREW } from './villains';

abstract class AbstractChampionsMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class BaseFinFangFoom extends AbstractChampionsMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(
      id,
      'Fin Fang Foom',
      attackPoints,
      7,
      MONSTERS_UNLEASHED,
      epic,
      DEMOLISH,
      SIZE_CHANGING
    );
  }
}

export const FIN_FANG_FOOM = new BaseFinFangFoom(
  'c5cf4934-68cf-4ac6-9ac9-65a1f4307ff4',
  '20*'
);

export const EPIC_FIN_FANG_FOOM = new BaseFinFangFoom(
  '30469c57-f4e3-4255-b642-f37aa49eb6b9',
  '24*',
  true
);

class BasePagliacci extends AbstractChampionsMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(
      id,
      'Pagliacci',
      attackPoints,
      6,
      WRECKING_CREW,
      epic,
      DEMOLISH,
      VERSATILE
    );
  }
}

export const PAGLIACCI = new BasePagliacci(
  'bc34e995-15f6-4918-922d-7e3c1e6f1a12',
  9
);

export const EPIC_PAGLIACCI = new BasePagliacci(
  '10fdfc96-fd5d-402f-945e-f800d83fd7ea',
  11,
  true
);
