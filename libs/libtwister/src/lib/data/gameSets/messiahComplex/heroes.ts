import { CardType, IHero } from '../../../model';
import { X_FACTOR, X_FORCE, X_MEN } from '../../teams';
import { INVESTIGATE } from '../noir/keywords';
import { WHEN_RECRUITED } from '../realmOfKings/keywords';

import { CLONE, SHATTER, TACTICAL_FORMATION } from './keywords';
import { META } from './meta';

export const STRONG_GUY: IHero = {
  id: 'ee989156-a39f-4058-aa4a-077832cacfb5',
  name: 'Strong Guy',
  team: X_FACTOR,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [INVESTIGATE, TACTICAL_FORMATION],
};

export const WARPATH: IHero = {
  id: '3928b4f5-820b-4860-beca-59df65d4665a',
  name: 'Warpath',
  team: X_FORCE,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [INVESTIGATE, TACTICAL_FORMATION],
};

export const MULTIPLE_MAN: IHero = {
  id: '78e22f6a-3594-4ce8-9b49-fa4fab12efd9',
  name: 'Multiple Man',
  team: X_FACTOR,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [INVESTIGATE, CLONE, TACTICAL_FORMATION],
};

export const STEPFORD_CUCKOOS: IHero = {
  id: '47dff683-279a-4d6d-aa84-e8fa898e6cdb',
  name: 'Stepford Cuckoos',
  team: X_MEN,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [INVESTIGATE, CLONE, TACTICAL_FORMATION, WHEN_RECRUITED],
};

export const M: IHero = {
  id: '4899bdfa-8338-4131-8f53-44034a5eeee1',
  name: 'M',
  team: X_FACTOR,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [INVESTIGATE, CLONE, WHEN_RECRUITED, TACTICAL_FORMATION],
};

export const SHATTERSTAR: IHero = {
  id: 'e9e53da6-5047-4ef8-9111-d1d13a6f3739',
  name: 'SHATTERstar',
  team: X_FORCE,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [CLONE, WHEN_RECRUITED, TACTICAL_FORMATION, SHATTER],
};

export const SIRYN: IHero = {
  id: '53eefc9f-baa5-4375-b32f-dcd2faa37018',
  name: 'Siryn',
  team: X_FACTOR,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [SHATTER, INVESTIGATE, TACTICAL_FORMATION],
};

export const RICTOR: IHero = {
  id: '472d8671-19c0-459f-befe-934811630cab',
  name: 'Rictor',
  team: X_FACTOR,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [SHATTER, INVESTIGATE],
};
