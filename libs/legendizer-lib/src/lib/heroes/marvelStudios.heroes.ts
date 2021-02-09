import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from '../teams';
import { IHero } from './hero.interface';

type HeroNames =
  | 'BLACK_WIDOW'
  | 'CAPTAIN_AMERICA'
  | 'HAWKEYE'
  | 'HULK'
  | 'IRON_MAN'
  | 'NICK_FURY'
  | 'THOR';

export const MarvelStudios: Record<HeroNames, IHero> = {
  BLACK_WIDOW: {
    id: '5c94b39f-9814-47c2-857b-cd17d6deec0b',
    name: 'Black Widow',
    team: Teams.AVENGERS,
    gameSet: GameSets.MARVEL_STUDIOS,
    cardType: CardType.HERO,
  },
  CAPTAIN_AMERICA: {
    id: '1a42d8d5-05fe-4140-9aca-78603c5c5825',
    name: 'Captain America',
    team: Teams.AVENGERS,
    gameSet: GameSets.MARVEL_STUDIOS,
    cardType: CardType.HERO,
  },
  HAWKEYE: {
    id: 'f0ee5af1-a69f-4e01-b668-dbeeccb59e52',
    name: 'Hawkeye',
    team: Teams.AVENGERS,
    gameSet: GameSets.MARVEL_STUDIOS,
    cardType: CardType.HERO,
  },
  HULK: {
    id: '6a457f77-a0ba-4226-a1e3-0ecc0cdd2e40',
    name: 'Hulk',
    team: Teams.AVENGERS,
    gameSet: GameSets.MARVEL_STUDIOS,
    cardType: CardType.HERO,
  },
  IRON_MAN: {
    id: 'ed6bd100-9cd8-43a5-8e04-07461f76ead9',
    name: 'Iron Man',
    team: Teams.AVENGERS,
    gameSet: GameSets.MARVEL_STUDIOS,
    cardType: CardType.HERO,
  },
  NICK_FURY: {
    id: '9a436cbb-f73f-4241-b8bb-8c0146af3ff9',
    name: 'Nick Fury',
    team: Teams.SHIELD,
    gameSet: GameSets.MARVEL_STUDIOS,
    cardType: CardType.HERO,
  },
  THOR: {
    id: 'f39ff646-754d-4dfb-abba-51877c3565f5',
    name: 'Thor',
    team: Teams.AVENGERS,
    gameSet: GameSets.MARVEL_STUDIOS,
    cardType: CardType.HERO,
  },
};
