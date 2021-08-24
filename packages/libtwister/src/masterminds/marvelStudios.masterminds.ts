import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { MarvelStudios as MarvelStudiosKeywords } from '../keywords';
import { VillainGroups } from '../villains';

import { IMastermind } from './mastermind.interface';

type MastermindNames = 'IRON_MONGER' | 'LOKI' | 'RED_SKULL';

export const MarvelStudios: Record<MastermindNames, IMastermind> = {
  IRON_MONGER: {
    id: 'a809a0db-8214-4547-9fd6-177c03050055',
    name: 'Iron Monger',
    alwaysLeads: [VillainGroups.MARVEL_STUDIOS.IRON_FOES],
    attackPoints: '9',
    victoryPoints: 5,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.MARVEL_STUDIOS,
    keywords: [MarvelStudiosKeywords.Conqueror],
  },
  LOKI: {
    id: 'a9f48d6c-820c-4837-a5da-1342b4f0f338',
    name: 'Loki',
    alwaysLeads: [VillainGroups.LEGENDARY.ENEMIES_OF_ASGARD],
    attackPoints: 10,
    victoryPoints: 5,
    gameSet: GameSets.MARVEL_STUDIOS,
    cardType: CardType.MASTERMIND,
  },
  RED_SKULL: {
    id: '750bdc8a-9583-4117-bab6-92238b26739a',
    name: 'Red Skull',
    alwaysLeads: [VillainGroups.LEGENDARY.HYDRA],
    attackPoints: 7,
    victoryPoints: 5,
    gameSet: GameSets.MARVEL_STUDIOS,
    cardType: CardType.MASTERMIND,
  },
};
