import { IHero , CardType } from '../../../model';
import { TELEPORT } from '../darkCity/keywords';

import { META } from './meta';

export const HOWARD_THE_DUCK: IHero = {
  id: 'aa09b983-b71c-4c82-a7d2-7a0f5a0a5d29',
  name: 'Howard the Duck',
  cardType: CardType.HERO,
  gameSetId: META.id,
};

export const MANTHING: IHero = {
  id: '002ce3a6-9c0a-4e98-848a-8a9bfde9d010',
  name: 'Man-Thing',
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TELEPORT],
};
