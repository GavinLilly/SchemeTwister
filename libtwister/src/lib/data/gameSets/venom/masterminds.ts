import { AbstractMastermind } from '../../../model';

import { SYMBIOTE_BONDS } from './keywords';
import { META } from './meta';
import { LIFE_FOUNDATION, POISONS } from './villains';

abstract class AbstractVenomMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class Hybrid extends AbstractVenomMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(id, 'Hybrid', attackPoints, 6, LIFE_FOUNDATION, epic, SYMBIOTE_BONDS);
  }
}

export const HYBRID = new Hybrid('a2fcb3d5-4ae2-44e7-bc7f-63193faf5446', 6);

export const EPIC_HYBRID = new Hybrid(
  '2fbed495-883d-4962-928e-d78677add612',
  8,
  true
);

class PoisonThanos extends AbstractVenomMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(id, 'Poison Thanos', attackPoints, 7, POISONS, epic);
  }
}

export const POISON_THANOS = new PoisonThanos(
  'be91be31-f5d5-40cf-aa46-21f393bf1659',
  12
);

export const EPIC_POISON_THANOS = new PoisonThanos(
  'e591b841-9663-4f31-bd59-c79b23688b3f',
  13,
  true
);
