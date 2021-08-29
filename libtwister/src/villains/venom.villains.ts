import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { Venom as VenomKeywords } from '../keywords';

import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames = 'LIFE_FOUNDATION' | 'POISONS';

export const Venom: Record<VillainGroupNames, IVillainGroup> = {
  LIFE_FOUNDATION: {
    id: '8e892d94-e2ae-4949-9cf3-dd20487c6b9a',
    name: 'Life Foundation',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.VENOM,
    keywords: [VenomKeywords.SymbioteBonds],
  },
  POISONS: {
    id: 'db59bd15-218a-4f34-b8b7-f78ddf148053',
    name: 'Poisons',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.VENOM,
    keywords: [VenomKeywords.SymbioteBonds, VenomKeywords.PoisionVillains],
  },
};
