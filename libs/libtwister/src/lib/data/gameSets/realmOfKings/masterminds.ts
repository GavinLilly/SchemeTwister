import { AbstractMastermind } from '../../../model';

import { ABOMINATION, THRONES_FAVOR } from './keywords';
import { META } from './meta';
import { INHUMAN_REBELLION, SHIAR_IMPERIAL_ELITE } from './villains';

abstract class AbstractRealmOfKingsMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class MaximusTheMad extends AbstractRealmOfKingsMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(
      id,
      'Maximus the Mad',
      attackPoints,
      6,
      INHUMAN_REBELLION,
      epic,
      THRONES_FAVOR,
      ABOMINATION
    );
  }
}

export const MAXIMUS_THE_MAD = new MaximusTheMad(
  '24610267-6acd-4b1f-899c-48b3a43af94f',
  8
);

export const EPIC_MAXIMUS_THE_MAD = new MaximusTheMad(
  'ae9b5953-23ca-4066-8ab4-d76291644ae7',
  9,
  true
);

class Vulcan extends AbstractRealmOfKingsMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(
      id,
      "Emperor Vulcan of the Shi'ar",
      attackPoints,
      6,
      SHIAR_IMPERIAL_ELITE,
      epic,
      THRONES_FAVOR
    );
  }
}

export const EMPEROR_VULCAN_OF_THE_SHIAR = new Vulcan(
  '21b14872-e23d-46d6-b721-94483dad908a',
  10
);

export const EPIC_EMPEROR_VULCAN_OF_THE_SHIAR = new Vulcan(
  'e3289899-5eb0-45fa-8321-3e24e1dd1fd3',
  12,
  true
);
