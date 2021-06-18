import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from '../teams';
import { IHero } from './hero.interface';

type HeroNames =
  | 'ADAM_WARLOCK'
  | 'CAPTAIN_MARVELL'
  | 'MOONDRAGON'
  | 'NEBULA'
  | 'NOVA'
  | 'PHYLAVELL'
  | 'QUASAR'
  | 'RONAN_THE_ACCUSER'
  | 'YONDU';

export const IntoTheCosmos: Record<HeroNames, IHero> = {
  ADAM_WARLOCK: {
    id: '8dff0c8f-5cac-4630-b96f-987e448328ba',
    name: 'Adam Warlock',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.INTO_THE_COSMOS,
  },
  CAPTAIN_MARVELL: {
    id: '4bd27d21-bc0a-417a-aba9-757cf39e1d51',
    name: 'Captain Mar-Vell',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.INTO_THE_COSMOS,
  },
  MOONDRAGON: {
    id: '133725c6-f86f-4b02-bee5-c058929e0cd5',
    name: 'Moondragon',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.INTO_THE_COSMOS,
  },
  NEBULA: {
    id: 'e38f5577-bac1-4c54-ab65-62adb31bd96f',
    name: 'Nebula',
    team: Teams.GUARDIANS_OF_THE_GALAXY,
    cardType: CardType.HERO,
    gameSet: GameSets.INTO_THE_COSMOS,
  },
  NOVA: {
    id: 'c2ec7fbf-283b-4de0-8ae0-cc4a88b15c0e',
    name: 'Nova',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.INTO_THE_COSMOS,
  },
  PHYLAVELL: {
    id: '49845aa3-2681-4c98-92a1-18afca2a735b',
    name: 'Phyla-Vell',
    team: Teams.GUARDIANS_OF_THE_GALAXY,
    cardType: CardType.HERO,
    gameSet: GameSets.INTO_THE_COSMOS,
  },
  QUASAR: {
    id: '49cefede-776b-492e-8fea-4a8e191a292b',
    name: 'Quasar',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.INTO_THE_COSMOS,
  },
  RONAN_THE_ACCUSER: {
    id: '261e3c11-8400-4f1e-8ac8-16c0cd753829',
    name: 'Ronan the Accuser',
    cardType: CardType.HERO,
    gameSet: GameSets.INTO_THE_COSMOS,
  },
  YONDU: {
    id: '9e36bcec-fc64-477e-9e2d-e83a54a2bfcb',
    name: 'Yondu',
    team: Teams.GUARDIANS_OF_THE_GALAXY,
    cardType: CardType.HERO,
    gameSet: GameSets.INTO_THE_COSMOS,
  },
};
