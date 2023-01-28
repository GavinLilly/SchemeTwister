import { AbstractMastermind } from '../../../model';

import { DANGER_SENSE, STRIKER } from './keywords';
import { META } from './meta';
import { SALVAGERS, VULTURE_TECH } from './villains';

abstract class AbstractHomecomingMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class AdrianToomes extends AbstractHomecomingMastermind {
  constructor(id: string, epic = false) {
    super(id, 'Adrian Toomes', '5+', 6, SALVAGERS, epic, DANGER_SENSE, STRIKER);
  }
}

export const ADRIAN_TOOMES = new AdrianToomes(
  '2b7ede2e-4f67-4152-9dcd-e91ae624c454'
);

export const EPIC_ADRIAN_TOOMES = new AdrianToomes(
  'a06ffef2-06a0-4475-9110-ebe5ca46402e',
  true
);

class Vulture extends AbstractHomecomingMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(
      id,
      'Vulture',
      attackPoints,
      6,
      VULTURE_TECH,
      epic,
      DANGER_SENSE,
      STRIKER
    );
  }
}

export const VULTURE = new Vulture(
  '5826e339-b396-4b55-95bd-cb1867bb7991',
  '8+'
);

export const EPIC_VULTURE = new Vulture(
  'c172fb7e-ff79-4837-b5cf-974ee4148c81',
  '10+',
  true
);
