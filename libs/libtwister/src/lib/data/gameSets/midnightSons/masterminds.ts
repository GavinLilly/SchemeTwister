import { AbstractMastermind } from '../../../model';

import { HAUNT, HUNT_FOR_VICTIMS } from './keywords';
import { META } from './meta';
import { LILIN, FALLEN } from './villains';

abstract class AbstractMidnightSonsMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class Lilith extends AbstractMidnightSonsMastermind {
  constructor(id: string, attackPoints: number | string, epic = false) {
    super(
      id,
      'Lilith, Mother of Demons',
      attackPoints,
      6,
      LILIN,
      epic,
      HUNT_FOR_VICTIMS
    );
  }
}

export const LILITH = new Lilith('505a06ce-d2e9-44b2-b429-457967572d3c', '8+');

export const EPIC_LILITH = new Lilith(
  '06ef2527-96c7-43fa-a381-7f260ef762ac',
  '10+',
  true
);

class Zarathos extends AbstractMidnightSonsMastermind {
  constructor(id: string, attackPoints: number | string, epic = false) {
    super(id, 'Zarathos', attackPoints, 6, FALLEN, epic, HAUNT);
  }
}

export const ZARATHOS = new Zarathos('52546c9a-67d2-4734-ab87-b651a95edcbb', 7);

export const EPIC_ZARATHOS = new Zarathos(
  '0f560e76-2bd0-4d3c-9680-25a7b4bcc91f',
  9,
  true
);
