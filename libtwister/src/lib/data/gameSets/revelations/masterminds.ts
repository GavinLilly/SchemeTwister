import { AbstractMastermind } from '../../../model';

import { MANDARINS_RINGS } from './henchmen';
import { DARK_MEMORIES, LOCATIONS } from './keywords';
import { META } from './meta';
import { HOODS_GANG, LETHAL_LEGION } from './villains';

abstract class AbstractRevelationsMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class GrimReaper extends AbstractRevelationsMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(id, 'Grim Reaper', attackPoints, 6, LETHAL_LEGION, epic, LOCATIONS);
  }
}

export const GRIM_REAPER = new GrimReaper(
  'b595f6d1-33ab-47c8-834a-f47a01083193',
  '8+'
);

export const EPIC_GRIM_REAPER = new GrimReaper(
  'a9da7041-a927-4030-96b7-1641be3bd7df',
  '9+',
  true
);

class TheHood extends AbstractRevelationsMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(
      id,
      epic ? 'Hood' : 'The Hood',
      attackPoints,
      6,
      HOODS_GANG,
      epic,
      DARK_MEMORIES,
      LOCATIONS
    );
  }
}

export const THE_HOOD = new TheHood(
  'febabcdf-503e-4343-9389-3f901ebe345f',
  '9+'
);

export const EPIC_HOOD = new TheHood(
  '91622572-b2b3-48b1-9861-ba8233ad26d5',
  '10+',
  true
);

class Mandarin extends AbstractRevelationsMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(id, 'Mandarin', attackPoints, 6, MANDARINS_RINGS, epic, LOCATIONS);
  }
}

export const MANDARIN = new Mandarin(
  'a6dcfa1a-14f2-4f4b-b3d1-ef2740539dab',
  '16*'
);

export const EPIC_MANDARIN = new Mandarin(
  '6bf519cd-ba2c-47ac-abf9-97c849b42d1e',
  '26*',
  true
);
