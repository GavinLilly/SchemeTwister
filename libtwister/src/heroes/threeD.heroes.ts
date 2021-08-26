import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { DarkCity as DarkCityKeywords } from '../keywords';

import { IHero } from './hero.interface';

type HeroNames = 'HOWARD_THE_DUCK' | 'MANTHING';

export const ThreeD: Record<HeroNames, IHero> = {
  HOWARD_THE_DUCK: {
    id: 'aa09b983-b71c-4c82-a7d2-7a0f5a0a5d29',
    name: 'Howard the Duck',
    cardType: CardType.HERO,
    gameSet: GameSets.THREE_D,
  },
  MANTHING: {
    id: '002ce3a6-9c0a-4e98-848a-8a9bfde9d010',
    name: 'Man-Thing',
    cardType: CardType.HERO,
    gameSet: GameSets.THREE_D,
    keywords: [DarkCityKeywords.Teleport],
  },
};
