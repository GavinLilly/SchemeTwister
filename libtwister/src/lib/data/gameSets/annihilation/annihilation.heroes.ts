import { Hero } from '../../../model';
import { FANTASTIC_FOUR } from '../../teams';
import { FOCUS } from '../fantasticFour/keywords';
import { CONQUEROR } from '../marvelStudios/keywords';

import { MAN_OUT_OF_TIME } from './keywords';
import { META } from './meta';

export const BRAINSTORM = new Hero({
  id: '94ab015e-878a-4214-a252-c4add8d332d7',
  name: 'Brainstorm',
  team: FANTASTIC_FOUR,

  gameSet: META,
  keywords: [MAN_OUT_OF_TIME],
});

export const FANTASTIC_FOUR_UNITED = new Hero({
  id: '56a42ac5-2cc8-41ce-8751-9a719906101b',
  name: 'Fantastic Four United',
  team: FANTASTIC_FOUR,

  gameSet: META,
  keywords: [FOCUS],
});

export const HERALDS_OF_GALACTUS = new Hero({
  id: '74ba66f1-0584-4cf0-86f8-e2496f58aea9',
  name: 'Heralds of Galactus',

  gameSet: META,
  keywords: [FOCUS, CONQUEROR],
});

export const PSI_LORD = new Hero({
  id: '6b72d592-b2e2-4455-b8e6-a10c34787743',
  name: 'Psi-Lord',
  team: FANTASTIC_FOUR,

  gameSet: META,
  keywords: [FOCUS, MAN_OUT_OF_TIME],
});

export const SUPER_SKRULL = new Hero({
  id: '747b5e67-1e4a-405e-a61e-90968d10b065',
  name: 'Super-Skrull',

  gameSet: META,
});
