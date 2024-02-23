import { MastermindWithEpic } from '@schemetwister/libtwister';

import { VERSATILE } from '../darkCity/darkCity.keywords';
import { DEMOLISH } from '../villains/villains.keywords';

import { SIZE_CHANGING } from './champions.keywords';
import { META } from './champions.meta';
import { MONSTERS_UNLEASHED, WRECKING_CREW } from './champions.villains';

export const FIN_FANG_FOOM = new MastermindWithEpic(
  {
    id: 'c5cf4934-68cf-4ac6-9ac9-65a1f4307ff4',
    attackPoints: '20*',
    masterStrike:
      'Demolish each player, then do it again for each Monsters Unleashed Villain in the city and Escape Pile.',
    gameSet: META,
    name: 'Fin Fang Foom',
    victoryPoints: 7,
    alwaysLeads: [MONSTERS_UNLEASHED],
    keywords: [DEMOLISH, SIZE_CHANGING],
  },
  {
    id: '30469c57-f4e3-4255-b642-f37aa49eb6b9',
    attackPoints: '24*',
    masterStrike:
      'Demolish each player, then do it again for each Monsters Unleashed Villain in the city and Escape Pile. KO all the Heroes Demolished this way.',
  }
);

export const PAGLIACCI = new MastermindWithEpic(
  {
    id: 'bc34e995-15f6-4918-922d-7e3c1e6f1a12',
    attackPoints: 9,
    masterStrike: `1, 5: This card becomes a Scheme Twist that takes effect immediately.
2, 3, 4: Demolish each player.`,
    gameSet: META,
    name: 'Pagliacci',
    victoryPoints: 6,
    alwaysLeads: [WRECKING_CREW],
    keywords: [DEMOLISH, VERSATILE],
  },
  {
    id: '10fdfc96-fd5d-402f-945e-f800d83fd7ea',
    attackPoints: 11,
    masterStrike: `1, 3, 5: This card becomes a Scheme Twist that takes effect immediately.
2, 4: Demolish each player.`,
  }
);
