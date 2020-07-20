import { IHero, Team } from '@legendizer/shared/hero/types';
import { GameSets } from '@legendizer/shared/gameSet/data';
import { CardType } from '@legendizer/shared/base/types';

type HeroNames =
  | 'BLACK_WIDOW'
  | 'CAPTAIN_AMERICA'
  | 'CYCLOPS'
  | 'DEADPOOL'
  | 'EMMA_FROST'
  | 'GAMBIT'
  | 'HAWKEYE'
  | 'HULK'
  | 'IRON_MAN'
  | 'NICK_FURY'
  | 'ROGUE'
  | 'SPIDER_MAN'
  | 'STORM'
  | 'THOR'
  | 'WOLVERINE';

export const LegendaryHeroes: Record<HeroNames, IHero> = {
  BLACK_WIDOW: {
    id: 'b8d163f2-6d0d-49c9-abba-f1df72471b4c',
    name: 'Black Widow',
    team: Team.AVENGERS,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.HERO,
  },
  CAPTAIN_AMERICA: {
    id: '928faab9-4d92-4831-b18b-9abccbdf73bb',
    name: 'Captain America',
    team: Team.AVENGERS,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.HERO,
  },
  CYCLOPS: {
    id: 'f84c616b-c3ed-4a20-8c81-fa74f6312c9c',
    name: 'Cyclops',
    team: Team.XMEN,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.HERO,
  },
  DEADPOOL: {
    id: 'bd4bbce9-641a-443c-90cb-71d826c438e4',
    name: 'Deadpool',
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.HERO,
  },
  EMMA_FROST: {
    id: 'a93aa28d-3bad-4b2e-9eed-f9e1837c30c1',
    name: 'Emma Frost',
    team: Team.XMEN,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.HERO,
  },
  GAMBIT: {
    id: '22c8dd13-edc9-41a3-99cb-079f33f310b5',
    name: 'Gambit',
    team: Team.XMEN,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.HERO,
  },
  HAWKEYE: {
    id: '5c6fc9c5-c68e-4ad5-aae1-1663c3a6a6bc',
    name: 'Hawkeye',
    team: Team.AVENGERS,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.HERO,
  },
  HULK: {
    id: '6415aa6b-eb46-4e69-bd9d-451208af0ee3',
    name: 'Hulk',
    team: Team.AVENGERS,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.HERO,
  },
  IRON_MAN: {
    id: 'ac5dd000-fd59-401a-a562-fbf507f729eb',
    name: 'Iron Man',
    team: Team.AVENGERS,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.HERO,
  },
  NICK_FURY: {
    id: 'c0d08234-6764-44cf-9196-2cf3f8362c0b',
    name: 'Nick Fury',
    team: Team.SHIELD,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.HERO,
  },
  ROGUE: {
    id: '0a49f5e5-bc43-4d7d-9fa8-1b2e7a27f5fe',
    name: 'Rogue',
    team: Team.XMEN,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.HERO,
  },
  SPIDER_MAN: {
    id: 'c31229d3-cfbb-4ab2-a984-21aa8ad11db9',
    name: 'Spider-Man',
    team: Team.SPIDERFRIENDS,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.HERO,
  },
  STORM: {
    id: '379af624-21ce-4961-9376-bf9562b1191e',
    name: 'Storm',
    team: Team.XMEN,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.HERO,
  },
  THOR: {
    id: 'b6f13ebd-0dd1-4f06-b767-0adc36b2bfb6',
    name: 'Thor',
    team: Team.AVENGERS,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.HERO,
  },
  WOLVERINE: {
    id: '16c5466f-c1c5-44d7-bcd3-ca4d1c223816',
    name: 'Wolverine',
    team: Team.XMEN,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.HERO,
  },
};
