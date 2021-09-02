import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import {
  DarkCity as DarkCityKeywords,
  SecretWarsVolume1 as SecretWarsVolume1Keywords,
} from '../keywords';

import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  | 'THE_DEADLANDS'
  | 'DOMAIN_OF_APOCALYPSE'
  | 'LIMBO'
  | 'MANHATTAN_EARTH1610'
  | 'SENTINEL_TERRITORIES'
  | 'WASTELAND';

export const SecretWarsVolume1: Record<VillainGroupNames, IVillainGroup> = {
  THE_DEADLANDS: {
    id: '068e3934-7b0e-4f80-ab8a-167c06072090',
    name: 'The Deadlands',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    keywords: [SecretWarsVolume1Keywords.RiseOfTheLivingDead],
  },
  DOMAIN_OF_APOCALYPSE: {
    id: '8f5f5b90-bbcd-48b0-845b-0c7e05c4bb7f',
    name: 'Domain of Apocalypse',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    keywords: [
      DarkCityKeywords.Teleport,
      SecretWarsVolume1Keywords.CrossDimensionalRampage,
    ],
  },
  LIMBO: {
    id: 'db877f4e-d1d8-466b-86c8-c3253f01e282',
    name: 'Limbo',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    keywords: [DarkCityKeywords.Teleport],
  },
  MANHATTAN_EARTH1610: {
    id: 'f3daf848-5a1d-44bc-ab5f-3261039cc0a2',
    name: 'Manhattan (Earth-1610)',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    keywords: [
      DarkCityKeywords.Teleport,
      SecretWarsVolume1Keywords.CrossDimensionalRampage,
    ],
  },
  SENTINEL_TERRITORIES: {
    id: '32e33f51-ef58-4752-926b-eb5bf6fae586',
    name: 'Sentinel Territories',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    keywords: [SecretWarsVolume1Keywords.CrossDimensionalRampage],
  },
  WASTELAND: {
    id: '77a97c27-ea12-4f9e-90ac-be5d017b3f20',
    name: 'Wasteland',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    keywords: [
      DarkCityKeywords.Bribe,
      SecretWarsVolume1Keywords.CrossDimensionalRampage,
    ],
  },
};
