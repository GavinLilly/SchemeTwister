import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import {
  DarkCity as DarkCityKeywords,
  SecretWarsVolume1 as SecretWarsVolume1Keywords,
} from '../keywords';
import { VillainGroups } from '../villains';

import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'MADELYNE_PRYOR_GOBLIN_QUEEN'
  | 'NIMROD_SUPER_SENTINEL'
  | 'WASTELAND_HULK'
  | 'ZOMBIE_GREEN_GOBLIN';

export const SecretWarsVolume1: Record<MastermindNames, IMastermind> = {
  MADELYNE_PRYOR_GOBLIN_QUEEN: {
    id: '60a0a5df-2273-43a8-9d08-e7b2c9ab7e05',
    name: 'Madelyne Pryor, Goblin Queen',
    alwaysLeads: [VillainGroups.SECRET_WARS_VOLUME_1.LIMBO],
    attackPoints: '10',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
  },
  NIMROD_SUPER_SENTINEL: {
    id: '9d7f0563-8ff6-462b-81cc-310fbc3d4775',
    name: 'Nimrod, Super Sentinel',
    alwaysLeads: [VillainGroups.SECRET_WARS_VOLUME_1.SENTINEL_TERRITORIES],
    attackPoints: '6',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    keywords: [DarkCityKeywords.Teleport],
  },
  WASTELAND_HULK: {
    id: '6a55b53d-eb74-467b-8948-dd95619830b8',
    name: 'Wasteland Hulk',
    alwaysLeads: [VillainGroups.SECRET_WARS_VOLUME_1.WASTELAND],
    attackPoints: '7',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    keywords: [SecretWarsVolume1Keywords.CrossDimensionalRampage],
  },
  ZOMBIE_GREEN_GOBLIN: {
    id: 'dd48892e-fa46-45d4-a8f3-97ff35d561ee',
    name: 'Zombie Green Goblin',
    alwaysLeads: [VillainGroups.SECRET_WARS_VOLUME_1.THE_DEADLANDS],
    attackPoints: '11',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    keywords: [SecretWarsVolume1Keywords.RiseOfTheLivingDead],
  },
};
