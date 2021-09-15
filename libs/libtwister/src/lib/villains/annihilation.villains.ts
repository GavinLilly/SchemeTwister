import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { Annihilation as AnnihilationKeywords } from '../keywords';
import { Conqueror } from '../keywords/marvelStudios.keywords';

import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames = 'ANNIHILATION_WAVE' | 'TIMELINES_OF_KANG';

export const Annihilation: Record<VillainGroupNames, IVillainGroup> = {
  ANNIHILATION_WAVE: {
    id: 'efcbc5ba-b401-4268-844b-b35c97b4a274',
    name: 'Annihilation Wave',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.ANNIHILATION,
    keywords: [AnnihilationKeywords.Momentum],
  },
  TIMELINES_OF_KANG: {
    id: '3ff639d6-d3ed-47d5-92a3-5696636368d2',
    name: 'Timelines of Kang',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.ANNIHILATION,
    keywords: [Conqueror, AnnihilationKeywords.ManOutOfTime],
  },
};
