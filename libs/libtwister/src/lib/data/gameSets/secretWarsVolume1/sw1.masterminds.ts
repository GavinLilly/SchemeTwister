import { Mastermind } from '../../../model';
import { HeroClass } from '../../enums/heroClass.enum';
import { TELEPORT } from '../darkCity/darkCity.keywords';

import {
  CROSS_DIMENSIONAL_RAMPAGE,
  RISE_OF_THE_LIVING_DEAD,
} from './sw1.keywords';
import { META } from './sw1.meta';
import {
  LIMBO,
  SENTINEL_TERRITORIES,
  THE_DEADLANDS,
  WASTELAND,
} from './sw1.villains';

export const MADELYNE_PRYOR_GOBLIN_QUEEN = new Mastermind({
  id: '60a0a5df-2273-43a8-9d08-e7b2c9ab7e05',
  name: 'Madelyne Pryor, Goblin Queen',
  gameSet: META,
  attackPoints: 10,
  victoryPoints: 6,
  alwaysLeads: [LIMBO],
  specialRules:
    'Bystanders captured by Madelyne are "Demon Goblin" Villains with 2 Attack. You can fight them to rescue them as Bystanders. You can\'t fight her while she has any Demon Goblins.',
  masterStrike:
    'Madelyne captures 4 Bystanders. If she already had any Bystanders before that, then each player gains a Wound.',
});

export const NIMROD_SUPER_SENTINEL = new Mastermind({
  id: '9d7f0563-8ff6-462b-81cc-310fbc3d4775',
  name: 'Nimrod, Super Sentinel',
  gameSet: META,
  attackPoints: 6,
  victoryPoints: 6,
  alwaysLeads: [SENTINEL_TERRITORIES],
  keywords: [TELEPORT],
  specialRules:
    "You can't fight Nimrod unless you made at least 6 Recruit this turn.",
  masterStrike: `Each player who does not reveal a ${HeroClass.TECH} Hero must choose Recruit or Attack, then discard all their cards with that icon.`,
});

export const WASTELAND_HULK = new Mastermind({
  id: '6a55b53d-eb74-467b-8948-dd95619830b8',
  name: 'Wasteland Hulk',
  gameSet: META,
  attackPoints: 7,
  victoryPoints: 6,
  alwaysLeads: [WASTELAND],
  keywords: [CROSS_DIMENSIONAL_RAMPAGE],
  specialRules:
    "Wasteland Hulk gets +3 Attack for each of his Mastermind Tactics among all players' Victory Piles.",
  masterStrike: 'Cross-Dimensional Hulk Rampage',
});

export const ZOMBIE_GREEN_GOBLIN = new Mastermind({
  id: 'dd48892e-fa46-45d4-a8f3-97ff35d561ee',
  name: 'Zombie Green Goblin',
  gameSet: META,
  attackPoints: 11,
  victoryPoints: 6,
  alwaysLeads: [THE_DEADLANDS],
  keywords: [RISE_OF_THE_LIVING_DEAD],
  specialRules:
    'Zombie Green Goblin gets +1 Attack for each Hero in the KO pile that costs 7 or more.',
  masterStrike:
    'Rise of the Living Dead. KO each Hero in the HQ that costs 7 or more. Then, each player discards a card for each Hero in the KO pile that costs 7 or more.',
});
