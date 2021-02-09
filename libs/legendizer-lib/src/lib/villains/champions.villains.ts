import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  |  'MONSTERS_UNLEASHED'
  |  'WRECKING_CREW'
;

export const Champions: Record<VillainGroupNames, IVillainGroup> = {
    MONSTERS_UNLEASHED: {
        id: 'a189a196-91f3-496b-8ca4-39708c881bb1',
        name: 'Monsters Unleashed',
        cardType: CardType.VILLAINGROUP,
        gameSet: GameSets.CHAMPIONS
    },
    WRECKING_CREW: {
        id: '170cc43f-32cb-4dfd-b2b6-f833cd875e59',
        name: 'Wrecking Crew',
        cardType: CardType.VILLAINGROUP,
        gameSet: GameSets.CHAMPIONS
    },
};