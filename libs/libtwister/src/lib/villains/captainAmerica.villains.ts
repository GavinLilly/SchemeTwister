import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames = 'ZOLAS_CREATIONS' | 'MASTERS_OF_EVIL_WWII';

export const CaptainAmerica: Record<VillainGroupNames, IVillainGroup> = {
  ZOLAS_CREATIONS: {
    id: '755b1918-6f12-4871-8db4-b763a6032b54',
    name: "Zola's Creations",
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.CAPTAIN_AMERICA,
  },
  MASTERS_OF_EVIL_WWII: {
    id: '8650bcb1-5221-4836-9a96-3a885634064b',
    name: 'Masters of Evil (WWII)',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.CAPTAIN_AMERICA,
  },
};
