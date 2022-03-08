import { AbstractMastermind } from '../../../model';
import { TELEPORT } from '../darkCity/keywords';

import { CROSS_DIMENSIONAL_RAMPAGE, RISE_OF_THE_LIVING_DEAD } from './keywords';
import { META } from './meta';
import {
  LIMBO,
  SENTINEL_TERRITORIES,
  THE_DEADLANDS,
  WASTELAND,
} from './villains';

class Sw1Mastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const MADELYNE_PRYOR_GOBLIN_QUEEN = new Sw1Mastermind(
  '60a0a5df-2273-43a8-9d08-e7b2c9ab7e05',
  'Madelyne Pryor, Goblin Queen',
  10,
  6,
  LIMBO
);

export const NIMROD_SUPER_SENTINEL = new Sw1Mastermind(
  '9d7f0563-8ff6-462b-81cc-310fbc3d4775',
  'Nimrod, Super Sentinel',
  6,
  6,
  SENTINEL_TERRITORIES,
  false,
  TELEPORT
);

export const WASTELAND_HULK = new Sw1Mastermind(
  '6a55b53d-eb74-467b-8948-dd95619830b8',
  'Wasteland Hulk',
  7,
  6,
  WASTELAND,
  false,
  CROSS_DIMENSIONAL_RAMPAGE
);

export const ZOMBIE_GREEN_GOBLIN = new Sw1Mastermind(
  'dd48892e-fa46-45d4-a8f3-97ff35d561ee',
  'Zombie Green Goblin',
  11,
  6,
  THE_DEADLANDS,
  false,
  RISE_OF_THE_LIVING_DEAD
);
