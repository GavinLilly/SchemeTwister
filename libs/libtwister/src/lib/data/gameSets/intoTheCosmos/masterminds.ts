import { AbstractMastermind } from '../../../model';

import { UNIVERSAL_CHURCH_OF_TRUTH } from './henchmen';
import { CONTEST_OF_CHAMPIONS, COSMIC_THREAT, SHARDS } from './keywords';
import { META } from './meta';
import { ELDERS_OF_THE_UNIVERSE, FROM_BEYOND } from './villains';

abstract class AbstractIntoTheCosmosMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class Beyonder extends AbstractIntoTheCosmosMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(
      id,
      epic ? 'Beyonder' : 'The Beyonder',
      attackPoints,
      7,
      FROM_BEYOND,
      epic,
      CONTEST_OF_CHAMPIONS,
      COSMIC_THREAT
    );
  }
}

export const THE_BEYONDER = new Beyonder(
  '8a48003e-f4f1-4bc6-bf1c-0199b878ad68',
  21
);

export const EPIC_BEYONDER = new Beyonder(
  '8ebd6355-3568-4142-95e5-34069f077c63',
  24,
  true
);

class Grandmaster extends AbstractIntoTheCosmosMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(
      id,
      epic ? 'Grandmaster' : 'The Grandmaster',
      attackPoints,
      6,
      ELDERS_OF_THE_UNIVERSE,
      epic,
      CONTEST_OF_CHAMPIONS,
      SHARDS
    );
  }
}

export const THE_GRANDMASTER = new Grandmaster(
  'a94bd803-fe80-4545-9d84-8df02a870f8b',
  10
);

export const EPIC_GRANDMASTER = new Grandmaster(
  '42324863-9864-4b9a-bf20-7ba0396618f8',
  11,
  true
);

class Magus extends AbstractIntoTheCosmosMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(
      id,
      'Magus',
      attackPoints,
      6,
      UNIVERSAL_CHURCH_OF_TRUTH,
      epic,
      SHARDS
    );
  }
}

export const MAGUS = new Magus('286d73ed-cd99-4991-bee0-6cdf252e8061', 9);

export const EPIC_MAGUS = new Magus(
  'a61bdc52-85c1-494d-bd3e-a84920b6289c',
  '11+',
  true
);
