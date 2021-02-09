import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames = 'INHUMAN_REBELLION' | 'SHIAR_IMPERIAL_ELITE';

export const RealmOfKings: Record<VillainGroupNames, IVillainGroup> = {
  INHUMAN_REBELLION: {
    id: 'f2a90de3-d516-40cc-bb14-1196e648f146',
    name: 'Inhuman Rebellion',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.REALM_OF_KINGS,
  },
  SHIAR_IMPERIAL_ELITE: {
    id: '034d6982-2940-4b3c-8c9d-4c40b84b3f8e',
    name: "Shi'ar Imperial Elite",
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.REALM_OF_KINGS,
  },
};
