import { CardType, IHero } from '../../../model';
import { AVENGERS, MARVEL_KNIGHTS, SHIELD } from '../../teams';
import { WHEN_RECRUITED } from '../realmOfKings/keywords';
import { DARK_MEMORIES } from '../revelations/keywords';
import { UNDERCOVER } from '../shield/keywords';
import { DODGE } from '../villains/keywords';

import { UNLEASH } from './keywords';
import { META } from './meta';

export const BLACK_WIDOW: IHero = {
  id: '45950633-2ab7-4bf8-87da-df45a1cd42af',
  name: 'Black Widow',
  team: SHIELD,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DODGE, DARK_MEMORIES, UNDERCOVER],
};

export const YELENA_BELOVA: IHero = {
  id: 'ca500a68-e8b5-4845-87be-05510c3176f5',
  name: 'Yelena Belova',
  team: SHIELD,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [UNDERCOVER, UNLEASH, DODGE],
};

export const RED_GUARDIAN: IHero = {
  id: '8fc823b4-11b0-4d96-89bb-98831eefb5cf',
  name: 'Red Guardian',
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [WHEN_RECRUITED, UNDERCOVER, UNLEASH],
};

export const WHITE_TIGER: IHero = {
  id: 'e9114379-5eec-44bb-a2b2-f2cdd7ae43e7',
  name: 'White Tiger',
  team: MARVEL_KNIGHTS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DODGE, DARK_MEMORIES],
};

export const FALCON_AND_WINTER_SOLDIER: IHero = {
  id: 'eef98daf-b51b-459c-8ee7-f7d412d0dde0',
  name: 'Falcon & Winter Soldier',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DARK_MEMORIES, DODGE],
};
