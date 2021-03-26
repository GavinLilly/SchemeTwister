import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  |  'SALVAGERS'
  |  'VULTURE_TECH'
;

export const SpiderManHomecoming: Record<VillainGroupNames, IVillainGroup> = {
    SALVAGERS: {
        id: '36db4913-6798-42f6-b8bb-0603ef256005',
        name: 'Salvagers',
        cardType: CardType.VILLAINGROUP,
        gameSet: GameSets.SPIDERMAN_HOMECOMING
    },
    VULTURE_TECH: {
        id: '4795a9f5-9992-4ef7-9884-c94118fd939f',
        name: 'Vulture Tech',
        cardType: CardType.VILLAINGROUP,
        gameSet: GameSets.SPIDERMAN_HOMECOMING
    },
};