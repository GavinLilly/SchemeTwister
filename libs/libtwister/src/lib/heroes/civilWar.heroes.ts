import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { CivilWar as CivilWarKeywords } from '../keywords';
import { Teams } from '../teams';

import { IHero } from './hero.interface';

type HeroNames =
  | 'CAPTAIN_AMERICA_SECRET_AVENGER'
  | 'CLOAK_AND_DAGGER'
  | 'DAREDEVIL'
  | 'FALCON'
  | 'GOLIATH'
  | 'HERCULES'
  | 'HULKLING'
  | 'LUKE_CAGE'
  | 'PATRIOT'
  | 'PETER_PARKER'
  | 'SPEEDBALL'
  | 'STATURE'
  | 'STORM_AND_BLACK_PANTHER'
  | 'TIGRA'
  | 'VISION'
  | 'WICCAN';

export const CivilWar: Record<HeroNames, IHero> = {
  CAPTAIN_AMERICA_SECRET_AVENGER: {
    id: 'd32f915f-f526-45a9-a65f-8cb186580a6d',
    name: 'Captain America, Secret Avenger',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [CivilWarKeywords.Divided],
  },
  CLOAK_AND_DAGGER: {
    id: 'f435f3ef-0bd9-49ed-8105-5f92939dbe82',
    name: 'Cloak & Dagger',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [CivilWarKeywords.Divided, CivilWarKeywords.Phasing],
  },
  DAREDEVIL: {
    id: '518591cd-91ab-40a3-86a6-86872ce7a566',
    name: 'Daredevil',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [CivilWarKeywords.Divided],
  },
  FALCON: {
    id: '8afbb314-f5e4-41a7-a269-e2c9490c97bd',
    name: 'Falcon',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [CivilWarKeywords.Divided],
  },
  GOLIATH: {
    id: '9936a148-964d-4234-9ddd-4190b4cc4a64',
    name: 'Goliath',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [CivilWarKeywords.Divided, CivilWarKeywords.SizeChanging],
  },
  HERCULES: {
    id: '85c30745-2452-4310-98fb-495adffd0ffe',
    name: 'Hercules',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [CivilWarKeywords.Divided],
  },
  HULKLING: {
    id: '60aaf371-6d78-4561-8485-5e22371b9cda',
    name: 'Hulkling',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [CivilWarKeywords.Divided, CivilWarKeywords.SizeChanging],
  },
  LUKE_CAGE: {
    id: '1c329cd0-fadd-4ec0-970b-8fe9bf249c40',
    name: 'Luke Cage',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [CivilWarKeywords.Divided, CivilWarKeywords.Fortify],
  },
  PATRIOT: {
    id: '08c54828-1f95-4947-b744-6c2a3aa4ac4a',
    name: 'Patriot',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [CivilWarKeywords.Divided],
  },
  PETER_PARKER: {
    id: '045c8478-541f-423d-8fbb-f61f9f7aba68',
    name: 'Peter Parker',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [CivilWarKeywords.Divided],
  },
  SPEEDBALL: {
    id: '09ce305d-30d2-4200-a9c8-6b35b773a2e4',
    name: 'Speedball',
    team: Teams.NEW_WARRIORS,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [CivilWarKeywords.Divided],
  },
  STATURE: {
    id: 'a98c8759-6da6-434d-8f82-9446441d1291',
    name: 'Stature',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [CivilWarKeywords.Divided, CivilWarKeywords.SizeChanging],
  },
  STORM_AND_BLACK_PANTHER: {
    id: '03be487b-3b71-47aa-9e11-fc5f7c632aab',
    name: 'Storm & Black Panther',
    team: Teams.X_MEN,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [CivilWarKeywords.Divided],
  },
  TIGRA: {
    id: '361cdc1e-78c0-42d9-af97-2f6d82bb77f4',
    name: 'Tigra',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [CivilWarKeywords.Divided],
  },
  VISION: {
    id: '232f0aea-f5a7-40aa-9d54-183ecddd234a',
    name: 'Vision',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [
      CivilWarKeywords.Divided,
      CivilWarKeywords.SizeChanging,
      CivilWarKeywords.Phasing,
    ],
  },
  WICCAN: {
    id: 'f25d4443-6620-4ad6-a870-36818e305c7e',
    name: 'Wiccan',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.CIVIL_WAR,
    keywords: [CivilWarKeywords.Divided, CivilWarKeywords.Phasing],
  },
};
