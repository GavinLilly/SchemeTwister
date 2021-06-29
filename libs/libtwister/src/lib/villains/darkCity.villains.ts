import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { DarkCity as DarkCityKeywords } from '../keywords';

import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  | 'EMISSARIES_OF_EVIL'
  | 'FOUR_HORSEMEN'
  | 'MARAUDERS'
  | 'MLF'
  | 'STREETS_OF_NEW_YORK'
  | 'UNDERWORLD';

export const DarkCity: Record<VillainGroupNames, IVillainGroup> = {
  EMISSARIES_OF_EVIL: {
    id: '2d106df3-c74d-4795-99b7-09d0ee33d87d',
    name: 'Emissaries of Evil',
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.VILLAINGROUP,
  },
  FOUR_HORSEMEN: {
    id: '2cdf94da-fae7-42f6-8433-598f7626a409',
    name: 'Four Horsemen',
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.VILLAINGROUP,
  },
  MARAUDERS: {
    id: '511d57f2-37b3-4497-9dda-8258b13a3b2e',
    name: 'Marauders',
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.VILLAINGROUP,
  },
  MLF: {
    id: '8f6079bf-4cdb-4fe0-a339-d2796efe2ab5',
    name: 'MLF',
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.VILLAINGROUP,
  },
  STREETS_OF_NEW_YORK: {
    id: '79037670-3af3-482b-a410-54e780caa7ea',
    name: 'Streets of New York',
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.VILLAINGROUP,
    keywords: [DarkCityKeywords.Bribe],
  },
  UNDERWORLD: {
    id: '4265325a-0aae-4b28-90db-6305f8883a6a',
    name: 'Underworld',
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.VILLAINGROUP,
    keywords: [DarkCityKeywords.Teleport],
  },
};
