import { VillainGroup } from '../../../model';

import { DEMOLISH, ELUSIVE, X_TREME_ATTACK } from './villains.keywords';
import { META } from './villains.meta';

export const AVENGERS = new VillainGroup({
  id: '5a6e5a2f-939c-4c7e-8d10-5261cf375553',
  name: 'Avengers',

  gameSet: META,
  keywords: [DEMOLISH, ELUSIVE],
});

export const DEFENDERS = new VillainGroup({
  id: 'be582617-82af-4727-9528-1cb35561af56',
  name: 'Defenders',

  gameSet: META,
});

export const MARVEL_KNIGHTS = new VillainGroup({
  id: 'b684fdfe-60ab-4af8-8b83-e46f7ebd708a',
  name: 'Marvel Knights',

  gameSet: META,
});

export const SPIDER_FRIENDS = new VillainGroup({
  id: '04b86954-b605-48cb-beed-1e3121384c98',
  name: 'Spider Friends',

  gameSet: META,
  keywords: [ELUSIVE],
});

export const UNCANNY_AVENGERS = new VillainGroup({
  id: '4ed437b8-13fc-4ebc-acf7-a4606396e928',
  name: 'Uncanny Avengers',

  gameSet: META,
  keywords: [X_TREME_ATTACK],
});

export const UNCANNY_XMEN = new VillainGroup({
  id: 'd5602d88-f8aa-4f4c-87c7-7a70e56e732f',
  name: 'Uncanny X-Men',

  gameSet: META,
  keywords: [ELUSIVE, X_TREME_ATTACK],
});

export const XMEN_FIRST_CLASS = new VillainGroup({
  id: '38875e12-6cf7-434b-9215-687f7f17932d',
  name: 'X-Men First Class',

  gameSet: META,
  keywords: [X_TREME_ATTACK],
});
