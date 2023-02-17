import { CardType, IHero } from '../../../model';
import { AVENGERS } from '../../teams';
import { DIVIDED } from '../civilWar/keywords';

import { ENDGAME, PHASING, SACRIFICE } from './keywords';
import { META } from './meta';

export const BLACK_PANTHER: IHero = {
  id: 'd1072e65-7913-485e-b80b-84d4b8cc7b6e',
  name: 'Black Panther',
  team: AVENGERS,
  gameSetId: META.id,
  cardType: CardType.HERO,
  keywords: [SACRIFICE],
};

export const DOCTOR_STRANGE: IHero = {
  id: 'fb640feb-0bd0-4f4c-b5bd-e165574570d3',
  name: 'Doctor Strange',
  team: AVENGERS,
  gameSetId: META.id,
  cardType: CardType.HERO,
  keywords: [PHASING, SACRIFICE],
};

export const BRUCE_BANNER: IHero = {
  id: 'bbbf1d68-d869-40af-88e9-735a679e6c8b',
  name: 'Bruce Banner',
  team: AVENGERS,
  gameSetId: META.id,
  cardType: CardType.HERO,
  keywords: [SACRIFICE],
};

export const CAPTAIN_MARVEL: IHero = {
  id: 'fe9ec57d-b46b-4528-b4f7-92c3164ed9ae',
  name: 'Captain Marvel',
  team: AVENGERS,
  gameSetId: META.id,
  cardType: CardType.HERO,
  keywords: [ENDGAME],
};

export const WANDA_AND_VISION: IHero = {
  id: '42bf6b58-75a5-4ff8-939d-17ee8761805b',
  name: 'Wanda & Vision',
  team: AVENGERS,
  gameSetId: META.id,
  cardType: CardType.HERO,
  keywords: [PHASING, DIVIDED],
};
