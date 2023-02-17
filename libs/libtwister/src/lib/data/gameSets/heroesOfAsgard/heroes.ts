import { IHero, CardType } from '../../../model';
import { HEROES_OF_ASGARD } from '../../teams';
import { THROWN_ARTIFACT } from '../fearItself/keywords';
import { ARTIFACT } from '../guardiansOfTheGalaxy/keywords';
import { CONQUEROR } from '../mcuPhaseOne/keywords';

import { WORTHY } from './keywords';
import { META } from './meta';

export const THOR: IHero = {
  id: '7287c952-0348-4f84-87fd-83f2db55447e',
  name: 'Thor',
  team: HEROES_OF_ASGARD,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [THROWN_ARTIFACT, WORTHY],
};

export const BETA_RAY_BILL: IHero = {
  id: '92dadd88-cf41-44d0-945f-0c1743885de9',
  name: 'Beta Ray Bill',
  team: HEROES_OF_ASGARD,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [THROWN_ARTIFACT, WORTHY],
};

export const VALKYRIE: IHero = {
  id: '8fecbbeb-c9a3-46a4-a482-080cb13abc75',
  name: 'Valkyrie',
  team: HEROES_OF_ASGARD,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [THROWN_ARTIFACT, CONQUEROR],
};

export const LADY_SIF: IHero = {
  id: 'cf0b41f2-f0aa-4f80-a0a3-74a85629cf5c',
  name: 'Lady Sif',
  team: HEROES_OF_ASGARD,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [ARTIFACT, THROWN_ARTIFACT],
};

export const THE_WARRIORS_THREE: IHero = {
  id: '36daa26b-af79-47cc-bd07-2e1653a2655e',
  name: 'The Warriors Three',
  team: HEROES_OF_ASGARD,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [CONQUEROR],
};
