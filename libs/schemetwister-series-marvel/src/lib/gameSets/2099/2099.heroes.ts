import { Hero } from '@schemetwister/libtwister';
import { SPIDER_FRIENDS } from '@schemetwister/schemetwister-series-marvel-common';

import { MARVEL_KNIGHTS } from '../../teams';
import { UNDERCOVER } from '../shield/shield.keywords';

import { CYBER_MOD, FATED_FUTURE } from './2099.keywords';
import { META } from './2099.meta';

export const SPIDER_MAN_2099 = new Hero({
  id: '1d48f0d9-5843-4787-9a6a-479076ea95bf',
  name: 'Spider-Man 2099',
  team: SPIDER_FRIENDS,
  gameSet: META,
  keywords: [UNDERCOVER, CYBER_MOD, FATED_FUTURE],
});

export const GHOST_RIDER_2099 = new Hero({
  id: '261a716b-9a15-4ea8-986f-8e25a6711f48',
  name: 'Ghost Rider 2099',
  team: MARVEL_KNIGHTS,
  gameSet: META,
  keywords: [CYBER_MOD, UNDERCOVER, FATED_FUTURE],
});

export const DOCTOR_DOOM_2099 = new Hero({
  id: '5c8c9d15-5922-43be-bf85-744bbb113590',
  name: 'Doctor Doom 2099',
  gameSet: META,
  keywords: [UNDERCOVER, CYBER_MOD, FATED_FUTURE],
});

export const HULK_2099 = new Hero({
  id: '7fe57298-3a27-429a-a221-bbb1903a6001',
  name: 'Hulk 2099',
  team: MARVEL_KNIGHTS,
  gameSet: META,
  keywords: [CYBER_MOD, UNDERCOVER, FATED_FUTURE],
});

export const RAVAGE_2099 = new Hero({
  id: '305c9912-7eb6-4dfb-8558-5e026e1e0e80',
  name: 'Ravage 2099',
  team: MARVEL_KNIGHTS,
  gameSet: META,
  keywords: [FATED_FUTURE],
});
