import { AbstractMastermind } from '../../../model';

import { SPIDER_SLAYER } from './henchmen';
import { INVESTIGATE } from './keywords';
import { META } from './meta';

class BaseJJonahJameson extends AbstractMastermind {
  public readonly gameSetId = META.id;

  constructor(id: string, attackPoints: string | number, epic = false) {
    super(
      id,
      'J. Jonah Jameson',
      attackPoints,
      5,
      SPIDER_SLAYER,
      epic,
      INVESTIGATE
    );
  }
}

export const J_JONAH_JAMESON = new BaseJJonahJameson(
  '40c8699c-f848-4228-b9e2-b5fb5f69e3ef',
  '4*'
);

export const EPIC_J_JONAH_JAMESON = new BaseJJonahJameson(
  '1a464f77-8e35-4ff0-8c32-c38eb5bf88ac',
  '5*',
  true
);
