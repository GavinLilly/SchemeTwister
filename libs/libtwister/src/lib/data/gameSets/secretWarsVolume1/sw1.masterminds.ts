import { Mastermind } from '../../../model';
import { TELEPORT } from '../darkCity/keywords';

import { CROSS_DIMENSIONAL_RAMPAGE, RISE_OF_THE_LIVING_DEAD } from './keywords';
import { META } from './meta';
import {
  LIMBO,
  SENTINEL_TERRITORIES,
  THE_DEADLANDS,
  WASTELAND,
} from './villains';

export const MADELYNE_PRYOR_GOBLIN_QUEEN = new Mastermind({
  id: '60a0a5df-2273-43a8-9d08-e7b2c9ab7e05',
  name: 'Madelyne Pryor, Goblin Queen',
  gameSet: META,
  attackPoints: 10,
  victoryPoints: 6,
  alwaysLeads: [LIMBO],
});

export const NIMROD_SUPER_SENTINEL = new Mastermind({
  id: '9d7f0563-8ff6-462b-81cc-310fbc3d4775',
  name: 'Nimrod, Super Sentinel',
  gameSet: META,
  attackPoints: 6,
  victoryPoints: 6,
  alwaysLeads: [SENTINEL_TERRITORIES],
  keywords: [TELEPORT],
});

export const WASTELAND_HULK = new Mastermind({
  id: '6a55b53d-eb74-467b-8948-dd95619830b8',
  name: 'Wasteland Hulk',
  gameSet: META,
  attackPoints: 7,
  victoryPoints: 6,
  alwaysLeads: [WASTELAND],
  keywords: [CROSS_DIMENSIONAL_RAMPAGE],
});

export const ZOMBIE_GREEN_GOBLIN = new Mastermind({
  id: 'dd48892e-fa46-45d4-a8f3-97ff35d561ee',
  name: 'Zombie Green Goblin',
  gameSet: META,
  attackPoints: 11,
  victoryPoints: 6,
  alwaysLeads: [THE_DEADLANDS],
  keywords: [RISE_OF_THE_LIVING_DEAD],
});
