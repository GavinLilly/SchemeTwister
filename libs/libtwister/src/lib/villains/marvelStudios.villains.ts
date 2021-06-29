import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { MarvelStudios as MarvelStudiosKeywords } from '../keywords';

import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  | 'CHITAURI'
  | 'GAMMA_HUNTERS'
  | 'ENEMIES_OF_ASGARD'
  | 'HYDRA'
  | 'IRON_FOES';

export const MarvelStudios: Record<VillainGroupNames, IVillainGroup> = {
  CHITAURI: {
    id: '60e792d1-00df-43ad-a91f-e322b1c5ed74',
    name: 'Chitauri',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.MARVEL_STUDIOS,
    keywords: [MarvelStudiosKeywords.Conqueror],
  },
  GAMMA_HUNTERS: {
    id: '9b3f98f6-7697-44eb-b99d-416bdf7c87c7',
    name: 'Gamma Hunters',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.MARVEL_STUDIOS,
    keywords: [MarvelStudiosKeywords.Conqueror],
  },
  ENEMIES_OF_ASGARD: {
    id: '2f7163ca-0a86-4aed-b20d-8b585c7adb89',
    name: 'Enemies of Asgard',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.MARVEL_STUDIOS,
  },
  HYDRA: {
    id: 'b8c8ea42-1005-472a-ade6-ad3c0641da60',
    name: 'HYDRA',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.MARVEL_STUDIOS,
  },
  IRON_FOES: {
    id: 'b77ef73b-2699-40d9-b8a2-08dc1f8e921a',
    name: 'Iron Foes',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.MARVEL_STUDIOS,
    keywords: [MarvelStudiosKeywords.Conqueror],
  },
};
