import { IHero, CardType } from '../../../model';
import { FANTASTIC_FOUR } from '../../teams';
import { FOCUS } from '../fantasticFour/keywords';
import { CONQUEROR } from '../mcuPhaseOne/keywords';

import { MAN_OUT_OF_TIME } from './keywords';
import { META } from './meta';

export const BRAINSTORM: IHero = {
  id: '94ab015e-878a-4214-a252-c4add8d332d7',
  name: 'Brainstorm',
  team: FANTASTIC_FOUR,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [MAN_OUT_OF_TIME],
};

export const FANTASTIC_FOUR_UNITED: IHero = {
  id: '56a42ac5-2cc8-41ce-8751-9a719906101b',
  name: 'Fantastic Four United',
  team: FANTASTIC_FOUR,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [FOCUS],
};

export const HERALDS_OF_GALACTUS: IHero = {
  id: '74ba66f1-0584-4cf0-86f8-e2496f58aea9',
  name: 'Heralds of Galactus',
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [FOCUS, CONQUEROR],
};

export const PSI_LORD: IHero = {
  id: '6b72d592-b2e2-4455-b8e6-a10c34787743',
  name: 'Psi-Lord',
  team: FANTASTIC_FOUR,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [FOCUS, MAN_OUT_OF_TIME],
};

export const SUPER_SKRULL: IHero = {
  id: '747b5e67-1e4a-405e-a61e-90968d10b065',
  name: 'Super-Skrull',
  cardType: CardType.HERO,
  gameSetId: META.id,
};