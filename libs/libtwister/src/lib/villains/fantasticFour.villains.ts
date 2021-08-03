import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { FantasticFour as FantasticFourKeywords } from '../keywords';

import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames = 'HERALDS_OF_GALACTUS' | 'SUBTERRANEA';

export const FantasticFour: Record<VillainGroupNames, IVillainGroup> = {
  HERALDS_OF_GALACTUS: {
    id: 'ec13a924-108a-48ba-8dfd-4eb6b310febc',
    name: 'Heralds of Galactus',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.FANTASTIC_FOUR,
    keywords: [FantasticFourKeywords.CosmicThreat],
  },
  SUBTERRANEA: {
    id: '8e152e27-b507-402e-8049-8425cbc79734',
    name: 'Subterranea',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.FANTASTIC_FOUR,
    keywords: [FantasticFourKeywords.Burrow],
  },
};
