import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { CaptainAmerica as CaptainAmericaKeywords } from '../keywords';
import { Teams } from '../teams';

import { IHero } from './hero.interface';

type HeroNames =
  | 'AGENT_X13'
  | 'CAPTAIN_AMERICA_FALCON'
  | 'CAPTAIN_AMERICA_1941'
  | 'STEVE_ROGERS_DIRECTOR_OF_SHIELD'
  | 'WINTER_SOLDIER';

export const CaptainAmerica: Record<HeroNames, IHero> = {
  AGENT_X13: {
    id: '46c091cc-92aa-4424-aa0b-8cbb84d6799b',
    name: 'Agent X-13',
    team: Teams.SHIELD,
    cardType: CardType.HERO,
    gameSet: GameSets.CAPTAIN_AMERICA,
    keywords: [
      CaptainAmericaKeywords.ManOutOfTime,
      CaptainAmericaKeywords.Savior,
    ],
  },
  CAPTAIN_AMERICA_FALCON: {
    id: '832b22ec-9e68-462b-9635-54f9ece643e4',
    name: 'Captain America (Falcon)',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CAPTAIN_AMERICA,
    keywords: [CaptainAmericaKeywords.Savior],
  },
  CAPTAIN_AMERICA_1941: {
    id: '3a15a735-db28-4a83-be68-56bbb28bee96',
    name: 'Captain America 1941',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CAPTAIN_AMERICA,
    keywords: [
      CaptainAmericaKeywords.ManOutOfTime,
      CaptainAmericaKeywords.Savior,
    ],
  },
  STEVE_ROGERS_DIRECTOR_OF_SHIELD: {
    id: 'b31e1b13-5a0a-48ed-a5e9-3f4d1d19c578',
    name: 'Steve Rogers, Director of S.H.I.E.L.D.',
    team: Teams.SHIELD,
    cardType: CardType.HERO,
    gameSet: GameSets.CAPTAIN_AMERICA,
    keywords: [
      CaptainAmericaKeywords.ManOutOfTime,
      CaptainAmericaKeywords.Savior,
    ],
  },
  WINTER_SOLDIER: {
    id: 'd0ec44f1-e1be-426f-9817-6077e10779e8',
    name: 'Winter Soldier',
    cardType: CardType.HERO,
    gameSet: GameSets.CAPTAIN_AMERICA,
    keywords: [CaptainAmericaKeywords.ManOutOfTime],
  },
};
