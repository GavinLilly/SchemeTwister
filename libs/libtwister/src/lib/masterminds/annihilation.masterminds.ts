import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { Annihilation as AnnihilationKeywords } from '../keywords';
import { ManOutOfTime } from '../keywords/captainAmerica.keywords';
import { Conqueror } from '../keywords/marvelStudios.keywords';
import { VillainGroups } from '../villains';

import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'ANNIHILUS'
  | 'EPIC_ANNIHILUS'
  | 'KANG_THE_CONQUEROR'
  | 'EPIC_KANG_THE_CONQUEROR';

export const Annihilation: Record<MastermindNames, IMastermind> = {
  ANNIHILUS: {
    id: '0db4044f-d88e-4fab-835e-55243ccec0f8',
    name: 'Annihilus',
    alwaysLeads: [VillainGroups.ANNIHILATION.ANNIHILATION_WAVE],
    attackPoints: '10+',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.ANNIHILATION,
    keywords: [AnnihilationKeywords.MassMomentum],
  },
  EPIC_ANNIHILUS: {
    id: '2bb9f0cd-c5f4-421f-9f88-98a612845d9b',
    name: 'Epic Annihilus',
    alwaysLeads: [VillainGroups.ANNIHILATION.ANNIHILATION_WAVE],
    attackPoints: '12+',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.ANNIHILATION,
    keywords: [AnnihilationKeywords.MassMomentum],
  },
  KANG_THE_CONQUEROR: {
    id: 'c80a223b-cbf5-44ac-823f-f3647792e0a1',
    name: 'Kang the Conqueror',
    alwaysLeads: [VillainGroups.ANNIHILATION.TIMELINES_OF_KANG],
    attackPoints: '8+',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.ANNIHILATION,
    keywords: [Conqueror, ManOutOfTime],
  },
  EPIC_KANG_THE_CONQUEROR: {
    id: 'dc83442d-7512-42cd-b330-ca3532e485da',
    name: 'Epic Kang the Conqueror',
    alwaysLeads: [VillainGroups.ANNIHILATION.TIMELINES_OF_KANG],
    attackPoints: '10+',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.ANNIHILATION,
    keywords: [Conqueror, ManOutOfTime],
  },
};
