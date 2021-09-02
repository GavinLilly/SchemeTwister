import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { AntMan as AntManKeywords } from '../keywords';
import { Teams } from '../teams';

import { IHero } from './hero.interface';

type HeroNames = 'ANT_MAN' | 'WASP' | 'JOCASTA' | 'WONDER_MAN' | 'BLACK_KNIGHT';

export const AntMan: Record<HeroNames, IHero> = {
  ANT_MAN: {
    id: '159f7a3b-6440-4acc-8601-23badb411a90',
    name: 'Ant-Man',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.ANT_MAN,
    keywords: [
      AntManKeywords.SizeChanging,
      AntManKeywords.MicroscopicSizeChanging,
    ],
  },
  WASP: {
    id: '6980d717-aa7a-44d0-9274-5acce19faee0',
    name: 'Wasp',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.ANT_MAN,
    keywords: [
      AntManKeywords.SizeChanging,
      AntManKeywords.MicroscopicSizeChanging,
    ],
  },
  JOCASTA: {
    id: 'b563c38c-a421-45d6-b0fe-674fed7c5a072',
    name: 'Jocasta',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.ANT_MAN,
    keywords: [AntManKeywords.SizeChanging, AntManKeywords.Empowered],
  },
  WONDER_MAN: {
    id: 'df842c13-b058-408b-a9b8-88290cfa784b',
    name: 'Wonder Man',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.ANT_MAN,
    keywords: [AntManKeywords.SizeChanging, AntManKeywords.Empowered],
  },
  BLACK_KNIGHT: {
    id: 'e50c070f-739c-4d2d-9e35-632665ba22c2',
    name: 'Black Knight',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.ANT_MAN,
    keywords: [AntManKeywords.Empowered],
  },
};
