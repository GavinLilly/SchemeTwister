import { Hero } from '@schemetwister/libtwister';
import {
  DIVIDED,
  EXCESSIVE_VIOLENCE,
  GUARDIANS_OF_THE_GALAXY,
} from '@schemetwister/series-marvel-common';

import {
  EXCESSIVE_KINDNESS,
  TRIGGERED_ARTIFACTS,
} from './mcuGuardiansOfTheGalaxy.keywords';
import { META } from './mcuGuardiansOfTheGalaxy.meta';

export const STAR_LORD = new Hero({
  id: '9f16a276-4a0b-440e-a2d4-6ddb455616de',
  name: 'Star-Lord',
  team: GUARDIANS_OF_THE_GALAXY,
  gameSet: META,
  keywords: [TRIGGERED_ARTIFACTS, DIVIDED],
});

export const GAMORA = new Hero({
  id: 'ebf0c743-b7ca-4729-abd4-cba5de774e77',
  name: 'Gamora',
  team: GUARDIANS_OF_THE_GALAXY,
  gameSet: META,
  keywords: [TRIGGERED_ARTIFACTS, DIVIDED],
});

export const ROCKET_AND_GROOT = new Hero({
  id: '6e1cccf7-587e-4baf-9916-bafae7ff6d29',
  name: 'Rocket & Groot',
  team: GUARDIANS_OF_THE_GALAXY,
  gameSet: META,
  keywords: [
    EXCESSIVE_KINDNESS,
    DIVIDED,
    EXCESSIVE_VIOLENCE,
    TRIGGERED_ARTIFACTS,
  ],
});

export const DRAX = new Hero({
  id: '0fa4353f-e228-407b-95ed-08d26bd77140',
  name: 'Drax',
  team: GUARDIANS_OF_THE_GALAXY,
  gameSet: META,
  keywords: [EXCESSIVE_VIOLENCE, DIVIDED, TRIGGERED_ARTIFACTS],
});

export const MANTIS = new Hero({
  id: 'fb0c4efb-c871-44a1-b3bb-a10a6cee0280',
  name: 'Mantis',
  team: GUARDIANS_OF_THE_GALAXY,
  gameSet: META,
  keywords: [EXCESSIVE_KINDNESS, DIVIDED],
});
