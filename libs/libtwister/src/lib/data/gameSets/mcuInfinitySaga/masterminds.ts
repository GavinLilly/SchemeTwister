import { AbstractMastermind } from '../../../model';

import { ENDGAME } from './keywords';
import { META } from './meta';
import { CHILDREN_OF_THANOS, INFINITY_STONES } from './villains';

abstract class AbstractInfinitySagaMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class Thanos extends AbstractInfinitySagaMastermind {
  constructor(id: string, attackPoints: string, epic = false) {
    super(id, 'Thanos', attackPoints, 7, INFINITY_STONES, epic);
  }
}

export const THANOS = new Thanos('94946692-4e18-4b9e-be02-973543be232d', '11+');

export const EPIC_THANOS = new Thanos(
  '8c615b1e-7e09-4f8d-ab1e-89dd8edb35b7',
  '13+',
  true
);

class EbonyMaw extends AbstractInfinitySagaMastermind {
  constructor(id: string, attackPoints: string, epic = false) {
    super(id, 'Ebony Maw', attackPoints, 6, CHILDREN_OF_THANOS, epic, ENDGAME);
  }
}

export const EBONY_MAW = new EbonyMaw(
  '4199309b-1816-4747-994b-4145426e5b4e',
  '8+'
);

export const EPIC_EBONY_MAW = new EbonyMaw(
  'cf25bc47-fb0a-4c04-b767-98f578a891c3',
  '10+',
  true
);
