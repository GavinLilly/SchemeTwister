import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { Deadpool as DeadpoolKeywords } from '../keywords';

import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames = 'DEADPOOLS_FRIENDS' | 'EVIL_DEADPOOL_CORPSE';

export const Deadpool: Record<VillainGroupNames, IVillainGroup> = {
  DEADPOOLS_FRIENDS: {
    id: '64a75bb7-bf4a-4b77-a299-de6ee6842001',
    name: `Deadpool's "Friends"`,
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.DEADPOOL,
    keywords: [DeadpoolKeywords.ExcessiveViolence],
  },
  EVIL_DEADPOOL_CORPSE: {
    id: '2a9d540b-60e5-4ccc-bc60-fcb96fe89321',
    name: 'Evil Deadpool Corpse',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.DEADPOOL,
    keywords: [DeadpoolKeywords.ExcessiveViolence],
  },
};
