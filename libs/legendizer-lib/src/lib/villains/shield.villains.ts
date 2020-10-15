import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  | 'HYDRA_ELITE'
  | 'AIM_HYDRA_OFFSHOOT';

export const Shield: Record<VillainGroupNames, IVillainGroup> = {
  HYDRA_ELITE: {
    id: '4f17b2bc-e761-4684-b7c0-65b381f036d5',
    name: 'Hydra Elite',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SHIELD
  },
  AIM_HYDRA_OFFSHOOT: {
    id: '64a7baad-a562-4154-ba45-da13159142de',
    name: 'A.I.M., Hydra Offshoot',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SHIELD
  }
};
