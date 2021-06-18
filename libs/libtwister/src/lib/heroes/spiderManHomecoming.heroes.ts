import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from '../teams';
import { IHero } from './hero.interface';

type HeroNames =
  | 'HAPPY_HOGAN'
  | 'HIGH_TECH_SPIDERMAN'
  | 'PETER_PARKER_HOMECOMING'
  | 'PETERS_ALLIES'
  | 'TONY_STARK';

export const SpiderManHomecoming: Record<HeroNames, IHero> = {
  HAPPY_HOGAN: {
    id: 'f9aefec7-040b-4bff-8088-ccc15d4257a1',
    name: 'Happy Hogan',
    cardType: CardType.HERO,
    gameSet: GameSets.SPIDERMAN_HOMECOMING,
  },
  HIGH_TECH_SPIDERMAN: {
    id: '7a7ed33d-dd72-4e23-9e61-2260a1d6c26d',
    name: 'High Tech Spider-Man',
    team: Teams.SPIDER_FRIENDS,
    cardType: CardType.HERO,
    gameSet: GameSets.SPIDERMAN_HOMECOMING,
  },
  PETER_PARKER_HOMECOMING: {
    id: '3f74c939-9ae7-473f-8020-e7e1d973dd92',
    name: 'Peter Parker, Homecoming',
    team: Teams.SPIDER_FRIENDS,
    cardType: CardType.HERO,
    gameSet: GameSets.SPIDERMAN_HOMECOMING,
  },
  PETERS_ALLIES: {
    id: '2b5d17f1-ae3b-4f30-b459-655ae2e27886',
    name: "Peter's Allies",
    team: Teams.SPIDER_FRIENDS,
    cardType: CardType.HERO,
    gameSet: GameSets.SPIDERMAN_HOMECOMING,
  },
  TONY_STARK: {
    id: '432c0168-768c-4e01-992e-aef781be8505',
    name: 'Tony Stark',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.SPIDERMAN_HOMECOMING,
  },
};
