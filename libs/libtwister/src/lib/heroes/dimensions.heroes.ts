import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from '../teams';
import { IHero } from './hero.interface';

type HeroNames =
  | 'JESSICA_JONES'
  | 'MS_AMERICA'
  | 'SQUIRREL_GIRL'
  | 'HOWARD_THE_DUCK'
  | 'MANTHING';

export const Dimensions: Record<HeroNames, IHero> = {
  JESSICA_JONES: {
    id: '6812ba8e-8aa9-424f-80b8-d08e70632bd0',
    name: 'Jessica Jones',
    team: Teams.MARVEL_KNIGHTS,
    cardType: CardType.HERO,
    gameSet: GameSets.DIMENSIONS,
  },
  MS_AMERICA: {
    id: '879ef895-6e85-4bb1-aaf6-84a8c73b4110',
    name: 'Ms. America',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.DIMENSIONS,
  },
  SQUIRREL_GIRL: {
    id: 'fbdf540f-c4f4-4b93-ad20-84591cd2e577',
    name: 'Squirrel Girl',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.DIMENSIONS,
  },
  HOWARD_THE_DUCK: {
    id: '951a5345-2375-4098-b44c-6d819d03d182',
    name: 'Howard the Duck',
    cardType: CardType.HERO,
    gameSet: GameSets.DIMENSIONS,
  },
  MANTHING: {
    id: '84d256ce-3d98-4ea7-8b51-a599bdcdb5fc',
    name: 'Man-Thing',
    cardType: CardType.HERO,
    gameSet: GameSets.DIMENSIONS,
  },
};
