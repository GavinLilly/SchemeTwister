import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { Annihilation as AnnihilationKeywords } from '../keywords';
import { Conqueror } from '../keywords/marvelStudios.keywords';
import { VillainGroups } from '../villains';

import { IMastermind } from './mastermind.interface';

type MastermindNames = 'ANNIHILUS' | 'KANG_THE_CONQUEROR';

export const Annihilation: Record<MastermindNames, IMastermind> = {
  ANNIHILUS: {
    id: '0db4044f-d88e-4fab-835e-55243ccec0f8',
    name: 'Annihilus',
    alwaysLeads: [VillainGroups.ANNIHILATION.ANNIHILATION_WAVE],
    attackPoints: 0,
    victoryPoints: 0,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.ANNIHILATION,
    keywords: [AnnihilationKeywords.MassMomentum],
  },
  KANG_THE_CONQUEROR: {
    id: 'c80a223b-cbf5-44ac-823f-f3647792e0a1',
    name: 'Kang the Conqueror',
    alwaysLeads: [VillainGroups.ANNIHILATION.TIMELINES_OF_KANG],
    attackPoints: 0,
    victoryPoints: 0,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.ANNIHILATION,
    keywords: [Conqueror],
  },
};
