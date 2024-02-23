import { MastermindWithEpic } from '@schemetwister/libtwister';

import { DANGER_SENSE, STRIKER } from './spidermanHomecoming.keywords';
import { META } from './spidermanHomecoming.meta';
import { SALVAGERS, VULTURE_TECH } from './spidermanHomecoming.villains';

export const ADRIAN_TOOMES = new MastermindWithEpic(
  {
    id: '2b7ede2e-4f67-4152-9dcd-e91ae624c454',
    attackPoints: '5+',
    masterStrike:
      'Starting from the Sewers, each Villain in the city uses its "Escape" ability.',
    name: 'Adrian Toomes',
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [SALVAGERS],
    keywords: [DANGER_SENSE, STRIKER],
  },
  {
    id: 'a06ffef2-06a0-4475-9110-ebe5ca46402e',
    masterStrike:
      'Starting from the Sewers, each Villain in the city uses its "Ambush" ability, then its "Escape" ability.',
  }
);

export const VULTURE = new MastermindWithEpic(
  {
    id: '5826e339-b396-4b55-95bd-cb1867bb7991',
    attackPoints: '8+',
    masterStrike:
      'Put a Wound from the Wound Stack below each HQ space as a "Winged Assault." Whenever a player gains or KOs a Hero from the HQ, the player on their right gains one of the Wounds below that HQ space.',
    name: 'Vulture',
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [VULTURE_TECH],
    keywords: [DANGER_SENSE, STRIKER],
  },
  {
    id: 'c172fb7e-ff79-4837-b5cf-974ee4148c81',
    attackPoints: '10+',
    masterStrike:
      'Put a Wound from the Wound Stack or KO pile below each HQ space as a "Winged Assault." Whenever a player gains or KOs a Hero from the HQ, the player on their right gains one of the Wounds below that HQ space, putting it on top of their deck.',
  }
);
