import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { DarkCity as DarkCityKeywords } from '../keywords';
import { VillainGroups } from '../villains';

import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'APOCALYPSE'
  | 'KINGPIN'
  | 'MEPHISTO'
  | 'MR_SINISTER'
  | 'STRYFE';

export const DarkCity: Record<MastermindNames, IMastermind> = {
  APOCALYPSE: {
    id: 'ec0617db-3869-4301-b07d-938876684790',
    name: 'Apocalypse',
    alwaysLeads: [VillainGroups.DARK_CITY.FOUR_HORSEMEN],
    attackPoints: 12,
    victoryPoints: 6,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.MASTERMIND,
  },
  KINGPIN: {
    id: 'f2f779c3-8a3e-4e34-9488-f310fa08fb34',
    name: 'Kingpin',
    alwaysLeads: [VillainGroups.DARK_CITY.STREETS_OF_NEW_YORK],
    attackPoints: '13*',
    victoryPoints: 6,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.MASTERMIND,
    keywords: [DarkCityKeywords.Bribe],
  },
  MEPHISTO: {
    id: '1de53796-a23a-43c3-9263-d15d6fec6f0b',
    name: 'Mephisto',
    alwaysLeads: [VillainGroups.DARK_CITY.UNDERWORLD],
    attackPoints: 10,
    victoryPoints: 6,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.MASTERMIND,
  },
  MR_SINISTER: {
    id: 'ce62da2d-6e60-4933-8972-aa96b2c23390',
    name: 'Mr. Sinister',
    alwaysLeads: [VillainGroups.DARK_CITY.MARAUDERS],
    attackPoints: 8,
    victoryPoints: 6,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.MASTERMIND,
  },
  STRYFE: {
    id: '4c24e25b-f5c3-4b03-8e41-184274007862',
    name: 'Stryfe',
    alwaysLeads: [VillainGroups.DARK_CITY.MLF],
    attackPoints: 7,
    victoryPoints: 6,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.MASTERMIND,
  },
};
