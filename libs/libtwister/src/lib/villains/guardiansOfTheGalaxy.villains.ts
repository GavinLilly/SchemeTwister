import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { GuardiansOfTheGalaxy as GuardiansOfTheGalaxyKeywords } from '../keywords';

import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames = 'KREE_STARFORCE' | 'INFINITY_GEMS';

export const GuardiansOfTheGalaxy: Record<VillainGroupNames, IVillainGroup> = {
  KREE_STARFORCE: {
    id: '368b4068-a407-4bf4-b5b4-da93440eb433',
    name: 'Kree Starforce',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.GUARDIANS_OF_THE_GALAXY,
    keywords: [GuardiansOfTheGalaxyKeywords.Shards],
  },
  INFINITY_GEMS: {
    id: '27e817d0-b853-420e-b1a6-2f7ba15681a7',
    name: 'Infinity Gems',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.GUARDIANS_OF_THE_GALAXY,
    keywords: [
      GuardiansOfTheGalaxyKeywords.Shards,
      GuardiansOfTheGalaxyKeywords.Artifact,
    ],
  },
};
