import { IHero , CardType } from '../../../model';
import { AVENGERS } from '../../teams';

import {
  EMPOWERED,
  MICROSCOPIC_SIZE_CHANGING,
  SIZE_CHANGING,
} from './keywords';
import { META } from './meta';

export const ANT_MAN: IHero = {
  id: '159f7a3b-6440-4acc-8601-23badb411a90',
  name: 'Ant-Man',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [SIZE_CHANGING, MICROSCOPIC_SIZE_CHANGING],
};

export const WASP: IHero = {
  id: '6980d717-aa7a-44d0-9274-5acce19faee0',
  name: 'Wasp',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [SIZE_CHANGING, MICROSCOPIC_SIZE_CHANGING],
};

export const JOCASTA: IHero = {
  id: 'b563c38c-a421-45d6-b0fe-674fed7c5a072',
  name: 'Jocasta',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [SIZE_CHANGING, EMPOWERED],
};

export const WONDER_MAN: IHero = {
  id: 'df842c13-b058-408b-a9b8-88290cfa784b',
  name: 'Wonder Man',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [SIZE_CHANGING, EMPOWERED],
};

export const BLACK_KNIGHT: IHero = {
  id: 'e50c070f-739c-4d2d-9e35-632665ba22c2',
  name: 'Black Knight',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [EMPOWERED],
};
