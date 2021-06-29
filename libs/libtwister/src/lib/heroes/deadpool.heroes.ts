import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { Deadpool as DeadpoolKeywords } from '../keywords';
import { Teams } from '../teams';

import { IHero } from './hero.interface';

type HeroNames =
  | 'BOB_AGENT_OF_HYDRA'
  | 'DEADPOOL'
  | 'SLAPSTICK'
  | 'SOLO'
  | 'STINGRAY';

export const Deadpool: Record<HeroNames, IHero> = {
  BOB_AGENT_OF_HYDRA: {
    id: '5aa52805-11c4-4e17-840b-b6e94612a21c',
    name: 'Bob, Agent of HYDRA',
    team: Teams.HYDRA,
    cardType: CardType.HERO,
    gameSet: GameSets.DEADPOOL,
    keywords: [DeadpoolKeywords.ExcessiveViolence],
  },
  DEADPOOL: {
    id: '864e7a8a-33c3-4464-84e9-3105bd1a9058',
    name: 'Deadpool',
    team: Teams.MERCS_FOR_MONEY,
    cardType: CardType.HERO,
    gameSet: GameSets.DEADPOOL,
    keywords: [DeadpoolKeywords.ExcessiveViolence],
  },
  SLAPSTICK: {
    id: 'f412fbfc-65cd-4276-ae81-87fa87d74180',
    name: 'Slapstick',
    team: Teams.MERCS_FOR_MONEY,
    cardType: CardType.HERO,
    gameSet: GameSets.DEADPOOL,
    keywords: [DeadpoolKeywords.ExcessiveViolence],
  },
  SOLO: {
    id: '52d2c47d-20a6-4fdf-8ce5-fb26d6aa958a',
    name: 'Solo',
    team: Teams.MERCS_FOR_MONEY,
    cardType: CardType.HERO,
    gameSet: GameSets.DEADPOOL,
    keywords: [DeadpoolKeywords.ExcessiveViolence],
  },
  STINGRAY: {
    id: '3e78fa58-b34d-48bb-84f0-f321b0dedc5c',
    name: 'Stingray',
    team: Teams.MERCS_FOR_MONEY,
    cardType: CardType.HERO,
    gameSet: GameSets.DEADPOOL,
    keywords: [DeadpoolKeywords.ExcessiveViolence],
  },
};
