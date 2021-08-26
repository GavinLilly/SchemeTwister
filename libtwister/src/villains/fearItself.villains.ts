import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { FearItself as FearItselfKeywords } from '../keywords';

import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames = 'THE_MIGHTY';

export const FearItself: Record<VillainGroupNames, IVillainGroup> = {
  THE_MIGHTY: {
    id: '47884868-7332-40f3-81da-92eb51491d3e',
    name: 'The Mighty',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.FEAR_ITSELF,
    keywords: [FearItselfKeywords.UruEnchantedWeapons],
  },
};
