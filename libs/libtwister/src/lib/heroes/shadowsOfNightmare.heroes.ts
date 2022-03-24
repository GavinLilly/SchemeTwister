import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import {
  AstralPlane,
  DemonicBargain,
  RitualArtifacts,
} from '../keywords/shadowsOfNightmare.keywords';
import { Teams } from '../teams';
import { IHero } from './hero.interface';

type HeroNames =
  | 'DOCTOR_STRANGE'
  | 'CLEA'
  | 'DOCTOR_VOODOO'
  | 'THE_ANCIENT_ONE'
  | 'THE_VISHANTI';

export const ShadowsOfNightmare: Record<HeroNames, IHero> = {
  DOCTOR_STRANGE: {
    id: '8aeff104-5b7a-4e71-9dc4-e2287b33f0b5',
    name: 'Doctor Strange',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.SHADOWS_OF_NIGHTMARE,
    keywords: [RitualArtifacts],
  },
  CLEA: {
    id: '4aef3e46-2731-428e-8831-31ba4854ab2a',
    name: 'Clea',
    team: Teams.MARVEL_KNIGHTS,
    cardType: CardType.HERO,
    gameSet: GameSets.SHADOWS_OF_NIGHTMARE,
    keywords: [DemonicBargain, RitualArtifacts],
  },
  DOCTOR_VOODOO: {
    id: '068ad97a-50a8-4935-9b3a-ec2a6bbb05e5',
    name: 'Doctor Voodoo',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.SHADOWS_OF_NIGHTMARE,
    keywords: [RitualArtifacts],
  },
  THE_ANCIENT_ONE: {
    id: 'be278c05-4224-432b-afc3-fe2723133cf8',
    name: 'The Ancient One',
    cardType: CardType.HERO,
    gameSet: GameSets.SHADOWS_OF_NIGHTMARE,
    keywords: [AstralPlane, RitualArtifacts],
  },
  THE_VISHANTI: {
    id: '4f0f9b86-b983-4e46-bbec-655e0abad23e',
    name: 'The Vishanti',
    cardType: CardType.HERO,
    gameSet: GameSets.SHADOWS_OF_NIGHTMARE,
    keywords: [DemonicBargain, RitualArtifacts],
  },
};
