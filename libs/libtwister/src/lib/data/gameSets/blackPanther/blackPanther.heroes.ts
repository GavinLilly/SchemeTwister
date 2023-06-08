import { Hero } from '../../../model';
import { HEROES_OF_WAKANDA } from '../../teams';
import { EMPOWERED } from '../antMan/keywords';
import { THRONES_FAVOR } from '../realmOfKings/keywords';

import { AMBUSH_ON_HEROES } from './keywords';
import { META } from './meta';

export const KING_BLACK_PANTHER = new Hero({
  id: '37049ad8-ff78-4af5-a289-4c865cda016c',
  name: 'King Black Panther',
  team: HEROES_OF_WAKANDA,

  gameSet: META,
  keywords: [THRONES_FAVOR, AMBUSH_ON_HEROES],
});

export const QUEEN_STORM_OF_WAKANDA = new Hero({
  id: '05a51bfe-ba61-4d1a-844a-840f0605fafd',
  name: 'Queen Storm of Wakanda',
  team: HEROES_OF_WAKANDA,

  gameSet: META,
  keywords: [EMPOWERED, AMBUSH_ON_HEROES, THRONES_FAVOR],
});

export const GENERAL_OKOYE = new Hero({
  id: '528a8f5d-a58b-4979-bb8f-7efcd72c3262',
  name: 'General Okoye',
  team: HEROES_OF_WAKANDA,

  gameSet: META,
  keywords: [AMBUSH_ON_HEROES],
});

export const PRINCESS_SHURI = new Hero({
  id: 'e7694aa8-b0e6-4b47-8e76-2747e7968e3f',
  name: 'Princess Shuri',
  team: HEROES_OF_WAKANDA,

  gameSet: META,
  keywords: [AMBUSH_ON_HEROES, EMPOWERED],
});

export const WHITE_WOLF = new Hero({
  id: '5dac83e5-a396-4237-816a-83790ca70f6d',
  name: 'White Wolf',
  team: HEROES_OF_WAKANDA,

  gameSet: META,
  keywords: [AMBUSH_ON_HEROES],
});
