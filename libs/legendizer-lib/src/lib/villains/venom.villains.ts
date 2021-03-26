import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  |  'LIFE_FOUNDATION'
  |  'POISONS'
;

export const Venom: Record<VillainGroupNames, IVillainGroup> = {
    LIFE_FOUNDATION: {
        id: '8e892d94-e2ae-4949-9cf3-dd20487c6b9a',
        name: 'Life Foundation',
        cardType: CardType.VILLAINGROUP,
        gameSet: GameSets.VENOM
    },
    POISONS: {
        id: 'db59bd15-218a-4f34-b8b7-f78ddf148053',
        name: 'Poisons',
        cardType: CardType.VILLAINGROUP,
        gameSet: GameSets.VENOM
    },
};