import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  |  'DEMONS_OF_LIMBO'
  |  'HELLIONS'
;

export const NewMutants: Record<VillainGroupNames, IVillainGroup> = {
    DEMONS_OF_LIMBO: {
        id: 'c236e200-011d-4e56-b04a-b61b0011ced3',
        name: 'Demons of Limbo',
        cardType: CardType.VILLAINGROUP,
        gameSet: GameSets.NEW_MUTANTS
    },
    HELLIONS: {
        id: '2745b10a-fd6d-4d92-94ad-ee7c870876d3',
        name: 'Hellions',
        cardType: CardType.VILLAINGROUP,
        gameSet: GameSets.NEW_MUTANTS
    },
};