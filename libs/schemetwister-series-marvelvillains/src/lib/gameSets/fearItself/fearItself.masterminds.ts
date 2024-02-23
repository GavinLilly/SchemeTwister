import { Mastermind } from '@schemetwister/libtwister';

import { DEMOLISH } from '../villains/villains.keywords';

import { META } from './fearItself.meta';
import { THE_MIGHTY } from './fearItself.villains';

export const URUENCHANTED_IRON_MAN = new Mastermind({
  id: 'ae06a222-8894-458e-9ef3-f75b823d4d2b',
  name: 'Uru-Enchanted Iron Man',
  gameSet: META,
  attackPoints: 7,
  victoryPoints: 6,
  alwaysLeads: [THE_MIGHTY],
  keywords: [DEMOLISH],
  masterStrike:
    'Demolish each player. Then stack this Strike next to Iron Man. Uru-Enchanted Iron Man has an Uru-Enchanted Weapon for each Strike stacked here.',
});
