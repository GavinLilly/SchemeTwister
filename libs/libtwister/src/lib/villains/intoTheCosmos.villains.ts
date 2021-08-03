import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { IntoTheCosmos as IntoTheCosmosKeywords } from '../keywords';

import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  | 'ELDERS_OF_THE_UNIVERSE'
  | 'CELESTIALS'
  | 'FROM_BEYOND'
  | 'BLACK_ORDER_OF_THANOS';

export const IntoTheCosmos: Record<VillainGroupNames, IVillainGroup> = {
  ELDERS_OF_THE_UNIVERSE: {
    id: 'cbf60874-654b-463f-8278-a19950b8e832',
    name: 'Elders of the Universe',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.INTO_THE_COSMOS,
    keywords: [
      IntoTheCosmosKeywords.Shards,
      IntoTheCosmosKeywords.ContestOfChampions,
    ],
  },
  CELESTIALS: {
    id: '764fb512-9c83-498a-a68e-8abfa9961e9e',
    name: 'Celestials',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.INTO_THE_COSMOS,
    keywords: [
      IntoTheCosmosKeywords.Shards,
      IntoTheCosmosKeywords.CelestialBoons,
      IntoTheCosmosKeywords.CosmicThreat,
    ],
  },
  FROM_BEYOND: {
    id: '1b1edcd2-b7cc-42dc-9dad-5912de02b4b1',
    name: 'From Beyond',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.INTO_THE_COSMOS,
    keywords: [
      IntoTheCosmosKeywords.CosmicThreat,
      IntoTheCosmosKeywords.CosmicThreat,
    ],
  },
  BLACK_ORDER_OF_THANOS: {
    id: 'aabe7d0a-5f84-4ffc-8d25-8d4e711a5d46',
    name: 'Black Order of Thanos',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.INTO_THE_COSMOS,
    keywords: [IntoTheCosmosKeywords.DangerSenseOnVillains],
  },
};
