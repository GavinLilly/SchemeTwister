import { MastermindWithEpic, randomize } from '@schemetwister/libtwister';

import { SINISTER_SIX } from '../paintTheTownRed/paintTheTownRed.villains';
import { UNDERCOVER } from '../shield/shield.keywords';

import { CYBER_MODS_FOR_ENEMIES } from './2099.keywords';
import { META } from './2099.meta';
import { ALCHEMAX_ENFORCERS, FALSE_AESIR_OF_ALCHEMAX } from './2099.villains';

// TODO make a real Adapting Mastermind with Epic
export const SINISTER_SIX_2099 = new MastermindWithEpic(
  {
    id: 'c0d9951e-79c5-4c42-815b-0e0ec53d04d0',
    name: 'Sinister Six 2099',
    attackPoints: '9, 6+, 7+, 8+, 10*, 11*',
    victoryPoints: 6,
    alwaysLeads: [
      randomize([FALSE_AESIR_OF_ALCHEMAX, ALCHEMAX_ENFORCERS, SINISTER_SIX]),
    ],
    gameSet: META,
    masterStrike: 'TBD',
  },
  {
    id: '617aa42e-a481-435a-ace5-996c2c2b0195',
    attackPoints: '12, 7+, 9+, 8+, 13*, 14*',
  }
);

export const ALCHEMAX_EXECUTIVES = new MastermindWithEpic(
  {
    id: 'dbabc745-69d3-4652-8698-289306d08da8',
    name: 'Alchemax Executives',
    attackPoints: '10, 7+, 8+, 9+',
    victoryPoints: 6,
    alwaysLeads: [ALCHEMAX_ENFORCERS],
    gameSet: META,
    masterStrike: 'TBD',
    keywords: [CYBER_MODS_FOR_ENEMIES, UNDERCOVER],
  },
  {
    id: 'a9d01c2d-2d6b-4ce1-8bf5-2f01fa3c9827',
    attackPoints: '13, 8+, 9+, 11+',
  }
);
