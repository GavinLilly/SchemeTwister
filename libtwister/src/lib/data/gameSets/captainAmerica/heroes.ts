import { IHero , CardType } from '../../../model';
import { AVENGERS, SHIELD } from '../../teams';

import { MAN_OUT_OF_TIME, SAVIOR } from './keywords';
import { META } from './meta';

export const AGENT_X13: IHero = {
  id: '46c091cc-92aa-4424-aa0b-8cbb84d6799b',
  name: 'Agent X-13',
  team: SHIELD,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [MAN_OUT_OF_TIME, SAVIOR],
};
export const CAPTAIN_AMERICA_FALCON: IHero = {
  id: '832b22ec-9e68-462b-9635-54f9ece643e4',
  name: 'Captain America (Falcon)',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [SAVIOR],
};
export const CAPTAIN_AMERICA_1941: IHero = {
  id: '3a15a735-db28-4a83-be68-56bbb28bee96',
  name: 'Captain America 1941',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [MAN_OUT_OF_TIME, SAVIOR],
};
export const STEVE_ROGERS_DIRECTOR_OF_SHIELD: IHero = {
  id: 'b31e1b13-5a0a-48ed-a5e9-3f4d1d19c578',
  name: 'Steve Rogers, Director of S.H.I.E.L.D.',
  team: SHIELD,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [MAN_OUT_OF_TIME, SAVIOR],
};
export const WINTER_SOLDIER: IHero = {
  id: 'd0ec44f1-e1be-426f-9817-6077e10779e8',
  name: 'Winter Soldier',
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [MAN_OUT_OF_TIME],
};
