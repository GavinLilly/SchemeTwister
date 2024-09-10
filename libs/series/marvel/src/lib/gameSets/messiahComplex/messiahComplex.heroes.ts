import { Hero } from '@schemetwister/libtwister';

import { X_FACTOR, X_FORCE, X_MEN } from '../../teams';
import { INVESTIGATE } from '../noir/noir.keywords';
import { WHEN_RECRUITED } from '../realmOfKings/realmOfKings.keywords';

import {
  CLONE_HEROES,
  SHATTER,
  TACTICAL_FORMATION,
} from './messiahComplex.keywords';
import { META } from './messiahComplex.meta';

export const STRONG_GUY = new Hero({
  id: 'ee989156-a39f-4058-aa4a-077832cacfb5',
  name: 'Strong Guy',
  team: X_FACTOR,
  gameSet: META,
  keywords: [INVESTIGATE, TACTICAL_FORMATION],
});

export const WARPATH = new Hero({
  id: '3928b4f5-820b-4860-beca-59df65d4665a',
  name: 'Warpath',
  team: X_FORCE,
  gameSet: META,
  keywords: [INVESTIGATE, TACTICAL_FORMATION],
});

export const MULTIPLE_MAN = new Hero({
  id: '78e22f6a-3594-4ce8-9b49-fa4fab12efd9',
  name: 'Multiple Man',
  team: X_FACTOR,
  gameSet: META,
  keywords: [INVESTIGATE, CLONE_HEROES, TACTICAL_FORMATION],
});

export const STEPFORD_CUCKOOS = new Hero({
  id: '47dff683-279a-4d6d-aa84-e8fa898e6cdb',
  name: 'Stepford Cuckoos',
  team: X_MEN,
  gameSet: META,
  keywords: [INVESTIGATE, CLONE_HEROES, TACTICAL_FORMATION, WHEN_RECRUITED],
});

export const M = new Hero({
  id: '4899bdfa-8338-4131-8f53-44034a5eeee1',
  name: 'M',
  team: X_FACTOR,
  gameSet: META,
  keywords: [INVESTIGATE, CLONE_HEROES, WHEN_RECRUITED, TACTICAL_FORMATION],
});

export const SHATTERSTAR = new Hero({
  id: 'e9e53da6-5047-4ef8-9111-d1d13a6f3739',
  name: 'SHATTERstar',
  team: X_FORCE,
  gameSet: META,
  keywords: [CLONE_HEROES, WHEN_RECRUITED, TACTICAL_FORMATION, SHATTER],
});

export const SIRYN = new Hero({
  id: '53eefc9f-baa5-4375-b32f-dcd2faa37018',
  name: 'Siryn',
  team: X_FACTOR,
  gameSet: META,
  keywords: [SHATTER, INVESTIGATE, TACTICAL_FORMATION],
});

export const RICTOR = new Hero({
  id: '472d8671-19c0-459f-befe-934811630cab',
  name: 'Rictor',
  team: X_FACTOR,
  gameSet: META,
  keywords: [SHATTER, INVESTIGATE],
});
