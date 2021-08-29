import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import {
  PaintTheTownRed as PaintTheTownRedKeywords,
  WorldWarHulk as WorldWarHulkKeywords,
} from '../keywords';

import { Teams } from '../teams';

import { IHero } from './hero.interface';

type HeroNames =
  | 'AMADEUS_CHO'
  | 'BRUCE_BANNER'
  | 'CAIERA'
  | 'GLADIATOR_HULK'
  | 'HIROIM'
  | 'HULKBUSTER_IRON_MAN'
  | 'JOE_FIXIT_GREY_HULK'
  | 'KORG'
  | 'MIEK_THE_UNHIVED'
  | 'NAMORA'
  | 'NONAME_BROOD_QUEEN'
  | 'RICK_JONES'
  | 'SENTRY'
  | 'SHEHULK'
  | 'SKAAR_SON_OF_HULK';

export const WorldWarHulk: Record<HeroNames, IHero> = {
  AMADEUS_CHO: {
    id: '1a632e24-b869-4b7c-8a8c-be005184ff1e',
    name: 'Amadeus Cho',
    team: Teams.CHAMPIONS,
    cardType: CardType.HERO,
    gameSet: GameSets.WORLD_WAR_HULK,
    keywords: [WorldWarHulkKeywords.Transform, WorldWarHulkKeywords.Outwit],
  },
  BRUCE_BANNER: {
    id: '47eff720-ae15-432e-811b-f0ecf8da274a',
    name: 'Bruce Banner',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.WORLD_WAR_HULK,
    keywords: [
      WorldWarHulkKeywords.Transform,
      WorldWarHulkKeywords.Outwit,
      WorldWarHulkKeywords.Smash,
    ],
  },
  CAIERA: {
    id: '03ce67a3-2b2d-41cd-93fc-0a984307b104',
    name: 'Caiera',
    team: Teams.WARBOUND,
    cardType: CardType.HERO,
    gameSet: GameSets.WORLD_WAR_HULK,
    keywords: [
      WorldWarHulkKeywords.Transform,
      WorldWarHulkKeywords.Outwit,
      WorldWarHulkKeywords.Smash,
    ],
  },
  GLADIATOR_HULK: {
    id: 'e2234fb8-1b9e-4440-8f8f-d40fc6b780ef',
    name: 'Gladiator Hulk',
    team: Teams.WARBOUND,
    cardType: CardType.HERO,
    gameSet: GameSets.WORLD_WAR_HULK,
    keywords: [
      WorldWarHulkKeywords.Transform,
      WorldWarHulkKeywords.Smash,
      WorldWarHulkKeywords.WoundedFury,
      WorldWarHulkKeywords.CrossDimensionalRampage,
    ],
  },
  HIROIM: {
    id: '1ffb4fbe-5d0b-4fb3-a3cc-765f77407260',
    name: 'Hiroim',
    team: Teams.WARBOUND,
    cardType: CardType.HERO,
    gameSet: GameSets.WORLD_WAR_HULK,
    keywords: [WorldWarHulkKeywords.Transform],
  },
  HULKBUSTER_IRON_MAN: {
    id: 'e242af0a-6f71-4b7c-bb99-f39e8c2e5e83',
    name: 'Hulkbuster Iron Man',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.WORLD_WAR_HULK,
    keywords: [
      WorldWarHulkKeywords.Transform,
      WorldWarHulkKeywords.Outwit,
      WorldWarHulkKeywords.Smash,
    ],
  },
  JOE_FIXIT_GREY_HULK: {
    id: 'f3fe187a-eb3a-41bb-b2af-6d3e96d706cc',
    name: 'Joe Fixit, Grey Hulk',
    team: Teams.CRIME_SYNDICATE,
    cardType: CardType.HERO,
    gameSet: GameSets.WORLD_WAR_HULK,
    keywords: [WorldWarHulkKeywords.Transform, WorldWarHulkKeywords.Smash],
  },
  KORG: {
    id: '4e028cfd-542c-4a5d-94f1-8b750b65e2e2',
    name: 'Korg',
    team: Teams.WARBOUND,
    cardType: CardType.HERO,
    gameSet: GameSets.WORLD_WAR_HULK,
    keywords: [
      WorldWarHulkKeywords.Transform,
      WorldWarHulkKeywords.Outwit,
      WorldWarHulkKeywords.Smash,
    ],
  },
  MIEK_THE_UNHIVED: {
    id: '81117f62-aa07-4212-82ff-ffa4ce376c49',
    name: 'Miek, The Unhived',
    team: Teams.WARBOUND,
    cardType: CardType.HERO,
    gameSet: GameSets.WORLD_WAR_HULK,
    keywords: [
      PaintTheTownRedKeywords.Feast,
      WorldWarHulkKeywords.Transform,
      WorldWarHulkKeywords.Smash,
    ],
  },
  NAMORA: {
    id: 'a2fdda90-a561-42b3-a69a-2996ea3b7a3d',
    name: 'Namora',
    team: Teams.CHAMPIONS,
    cardType: CardType.HERO,
    gameSet: GameSets.WORLD_WAR_HULK,
    keywords: [WorldWarHulkKeywords.Transform, WorldWarHulkKeywords.Smash],
  },
  NONAME_BROOD_QUEEN: {
    id: 'b1514d3f-226a-4e01-b3b5-306f1fed5fa3',
    name: 'No-Name, Brood Queen',
    team: Teams.WARBOUND,
    cardType: CardType.HERO,
    gameSet: GameSets.WORLD_WAR_HULK,
    keywords: [PaintTheTownRedKeywords.Feast, WorldWarHulkKeywords.Transform],
  },
  RICK_JONES: {
    id: 'f79e960b-135b-46da-b637-864499b235d6',
    name: 'Rick Jones',
    team: Teams.SHIELD,
    cardType: CardType.HERO,
    gameSet: GameSets.WORLD_WAR_HULK,
    keywords: [WorldWarHulkKeywords.Transform, WorldWarHulkKeywords.Smash],
  },
  SENTRY: {
    id: '6b998ee8-d3e2-48e6-bbc9-dbc844847485',
    name: 'Sentry',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.WORLD_WAR_HULK,
    keywords: [PaintTheTownRedKeywords.Feast, WorldWarHulkKeywords.Transform],
  },
  SHEHULK: {
    id: '7359ed89-db62-4eda-afa0-f5575577e065',
    name: 'She-Hulk',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.WORLD_WAR_HULK,
    keywords: [
      WorldWarHulkKeywords.Transform,
      WorldWarHulkKeywords.Outwit,
      WorldWarHulkKeywords.Smash,
    ],
  },
  SKAAR_SON_OF_HULK: {
    id: 'd9b92ad3-98c2-4128-bf61-a299be5e9c6d',
    name: 'Skaar, Son of Hulk',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.WORLD_WAR_HULK,
    keywords: [
      WorldWarHulkKeywords.Transform,
      WorldWarHulkKeywords.Smash,
      WorldWarHulkKeywords.WoundedFury,
    ],
  },
};
