import { Hero } from '@schemetwister/libtwister';

import { TELEPORT } from '../darkCity/darkCity.keywords';

import { META } from './threeD.meta';

export const HOWARD_THE_DUCK = new Hero({
  id: 'aa09b983-b71c-4c82-a7d2-7a0f5a0a5d29',
  name: 'Howard the Duck',

  gameSet: META,
});

export const MANTHING = new Hero({
  id: '002ce3a6-9c0a-4e98-848a-8a9bfde9d010',
  name: 'Man-Thing',

  gameSet: META,
  keywords: [TELEPORT],
});
