import { Hero } from '@schemetwister/libtwister';
import { AVENGERS } from '@schemetwister/schemetwister-series-marvel-common';

import { MARVEL_KNIGHTS } from '../../teams';

import {
  ASTRAL_PLANE,
  DEMONIC_BARGAIN,
  RITUAL_ARTIFACTS,
} from './shadowsOfNightmare.keywords';
import { META } from './shadowsOfNightmare.meta';

export const DOCTOR_STRANGE = new Hero({
  id: '8aeff104-5b7a-4e71-9dc4-e2287b33f0b5',
  name: 'Doctor Strange',
  team: AVENGERS,
  gameSet: META,
  keywords: [RITUAL_ARTIFACTS],
});

export const CLEA = new Hero({
  id: '4aef3e46-2731-428e-8831-31ba4854ab2a',
  name: 'Clea',
  team: MARVEL_KNIGHTS,
  gameSet: META,
  keywords: [DEMONIC_BARGAIN, RITUAL_ARTIFACTS],
});

export const DOCTOR_VOODOO = new Hero({
  id: '068ad97a-50a8-4935-9b3a-ec2a6bbb05e5',
  name: 'Doctor Voodoo',
  team: AVENGERS,
  gameSet: META,
  keywords: [RITUAL_ARTIFACTS],
});

export const THE_ANCIENT_ONE = new Hero({
  id: 'be278c05-4224-432b-afc3-fe2723133cf8',
  name: 'The Ancient One',
  gameSet: META,
  keywords: [ASTRAL_PLANE, RITUAL_ARTIFACTS],
});

export const THE_VISHANTI = new Hero({
  id: '4f0f9b86-b983-4e46-bbec-655e0abad23e',
  name: 'The Vishanti',
  gameSet: META,
  keywords: [DEMONIC_BARGAIN, RITUAL_ARTIFACTS],
});
