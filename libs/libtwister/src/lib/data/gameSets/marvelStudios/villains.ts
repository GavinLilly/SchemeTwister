import { IVillainGroup, CardType } from '../../../model';

import { CONQUEROR } from './keywords';
import { META } from './meta';

export const CHITAURI: IVillainGroup = {
  id: '60e792d1-00df-43ad-a91f-e322b1c5ed74',
  name: 'Chitauri',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [CONQUEROR],
};

export const GAMMA_HUNTERS: IVillainGroup = {
  id: '9b3f98f6-7697-44eb-b99d-416bdf7c87c7',
  name: 'Gamma Hunters',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [CONQUEROR],
};

export const ENEMIES_OF_ASGARD: IVillainGroup = {
  id: '2f7163ca-0a86-4aed-b20d-8b585c7adb89',
  name: 'Enemies of Asgard',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
};

export const HYDRA: IVillainGroup = {
  id: 'b8c8ea42-1005-472a-ade6-ad3c0641da60',
  name: 'HYDRA',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
};

export const IRON_FOES: IVillainGroup = {
  id: 'b77ef73b-2699-40d9-b8a2-08dc1f8e921a',
  name: 'Iron Foes',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [CONQUEROR],
};
