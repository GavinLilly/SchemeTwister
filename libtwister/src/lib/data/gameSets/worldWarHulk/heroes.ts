import { IHero , CardType } from '../../../model';
import {
  AVENGERS,
  CHAMPIONS,
  CRIME_SYNDICATE,
  SHIELD,
  WARBOUND,
} from '../../teams';
import { FEAST } from '../paintTheTownRed/keywords';

import {
  CROSS_DIMENSIONAL_RAMPAGE,
  OUTWIT,
  SMASH,
  TRANSFORM,
  WOUNDED_FURY,
} from './keywords';
import { META } from './meta';

export const AMADEUS_CHO: IHero = {
  id: '1a632e24-b869-4b7c-8a8c-be005184ff1e',
  name: 'Amadeus Cho',
  team: CHAMPIONS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TRANSFORM, OUTWIT],
};

export const BRUCE_BANNER: IHero = {
  id: '47eff720-ae15-432e-811b-f0ecf8da274a',
  name: 'Bruce Banner',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TRANSFORM, OUTWIT, SMASH],
};

export const CAIERA: IHero = {
  id: '03ce67a3-2b2d-41cd-93fc-0a984307b104',
  name: 'Caiera',
  team: WARBOUND,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TRANSFORM, OUTWIT, SMASH],
};

export const GLADIATOR_HULK: IHero = {
  id: 'e2234fb8-1b9e-4440-8f8f-d40fc6b780ef',
  name: 'Gladiator Hulk',
  team: WARBOUND,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TRANSFORM, SMASH, WOUNDED_FURY, CROSS_DIMENSIONAL_RAMPAGE],
};

export const HIROIM: IHero = {
  id: '1ffb4fbe-5d0b-4fb3-a3cc-765f77407260',
  name: 'Hiroim',
  team: WARBOUND,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TRANSFORM],
};

export const HULKBUSTER_IRON_MAN: IHero = {
  id: 'e242af0a-6f71-4b7c-bb99-f39e8c2e5e83',
  name: 'Hulkbuster Iron Man',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TRANSFORM, OUTWIT, SMASH],
};

export const JOE_FIXIT_GREY_HULK: IHero = {
  id: 'f3fe187a-eb3a-41bb-b2af-6d3e96d706cc',
  name: 'Joe Fixit, Grey Hulk',
  team: CRIME_SYNDICATE,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TRANSFORM, SMASH],
};

export const KORG: IHero = {
  id: '4e028cfd-542c-4a5d-94f1-8b750b65e2e2',
  name: 'Korg',
  team: WARBOUND,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TRANSFORM, OUTWIT, SMASH],
};

export const MIEK_THE_UNHIVED: IHero = {
  id: '81117f62-aa07-4212-82ff-ffa4ce376c49',
  name: 'Miek, The Unhived',
  team: WARBOUND,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [FEAST, TRANSFORM, SMASH],
};

export const NAMORA: IHero = {
  id: 'a2fdda90-a561-42b3-a69a-2996ea3b7a3d',
  name: 'Namora',
  team: CHAMPIONS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TRANSFORM, SMASH],
};

export const NONAME_BROOD_QUEEN: IHero = {
  id: 'b1514d3f-226a-4e01-b3b5-306f1fed5fa3',
  name: 'No-Name, Brood Queen',
  team: WARBOUND,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [FEAST, TRANSFORM],
};

export const RICK_JONES: IHero = {
  id: 'f79e960b-135b-46da-b637-864499b235d6',
  name: 'Rick Jones',
  team: SHIELD,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TRANSFORM, SMASH],
};

export const SENTRY: IHero = {
  id: '6b998ee8-d3e2-48e6-bbc9-dbc844847485',
  name: 'Sentry',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [FEAST, TRANSFORM],
};

export const SHEHULK: IHero = {
  id: '7359ed89-db62-4eda-afa0-f5575577e065',
  name: 'She-Hulk',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TRANSFORM, OUTWIT, SMASH],
};

export const SKAAR_SON_OF_HULK: IHero = {
  id: 'd9b92ad3-98c2-4128-bf61-a299be5e9c6d',
  name: 'Skaar, Son of Hulk',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TRANSFORM, SMASH, WOUNDED_FURY],
};
