import { CARD_TYPE, Hero } from '@schemetwister/libtwister';
import {
  AVENGERS,
  DIVIDED,
  PHASING,
} from '@schemetwister/schemetwister-series-marvel-common';

import { ENDGAME, SACRIFICE } from './mcuInfinitySaga.keywords';
import { META } from './mcuInfinitySaga.meta';

export const BLACK_PANTHER = new Hero({
  id: 'd1072e65-7913-485e-b80b-84d4b8cc7b6e',
  name: 'Black Panther',
  team: AVENGERS,
  gameSet: META,
  cardType: CARD_TYPE.hero,
  keywords: [SACRIFICE],
});

export const DOCTOR_STRANGE = new Hero({
  id: 'fb640feb-0bd0-4f4c-b5bd-e165574570d3',
  name: 'Doctor Strange',
  team: AVENGERS,
  gameSet: META,
  cardType: CARD_TYPE.hero,
  keywords: [PHASING, SACRIFICE],
});

export const BRUCE_BANNER = new Hero({
  id: 'bbbf1d68-d869-40af-88e9-735a679e6c8b',
  name: 'Bruce Banner',
  team: AVENGERS,
  gameSet: META,
  cardType: CARD_TYPE.hero,
  keywords: [SACRIFICE],
});

export const CAPTAIN_MARVEL = new Hero({
  id: 'fe9ec57d-b46b-4528-b4f7-92c3164ed9ae',
  name: 'Captain Marvel',
  team: AVENGERS,
  gameSet: META,
  cardType: CARD_TYPE.hero,
  keywords: [ENDGAME],
});

export const WANDA_AND_VISION = new Hero({
  id: '42bf6b58-75a5-4ff8-939d-17ee8761805b',
  name: 'Wanda & Vision',
  team: AVENGERS,
  gameSet: META,
  cardType: CARD_TYPE.hero,
  keywords: [PHASING, DIVIDED],
});
