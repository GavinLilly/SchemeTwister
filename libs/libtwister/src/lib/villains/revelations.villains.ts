import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  | 'ARMY_OF_EVIL'
  | 'DARK_AVENGERS'
  | 'HOODS_GANG'
  | 'LETHAL_LEGION';

export const Revelations: Record<VillainGroupNames, IVillainGroup> = {
  ARMY_OF_EVIL: {
    id: '31b33d1d-befb-44ea-9b0b-72d613ce37af',
    name: 'Army of Evil',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.REVELATIONS,
  },
  DARK_AVENGERS: {
    id: 'd41732e9-2c54-4ef1-963f-0600f14fa810',
    name: 'Dark Avengers',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.REVELATIONS,
  },
  HOODS_GANG: {
    id: '0508ea56-82a2-48ea-bffa-722a6d86ef07',
    name: "Hood's Gang",
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.REVELATIONS,
  },
  LETHAL_LEGION: {
    id: 'b8f4dcec-15d8-4d95-8cc9-a6701a6aad7d',
    name: 'Lethal Legion',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.REVELATIONS,
  },
};
