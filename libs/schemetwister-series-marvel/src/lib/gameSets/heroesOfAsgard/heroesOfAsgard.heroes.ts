import { Hero } from '@schemetwister/libtwister';
import { FearItself } from '@schemetwister/schemetwister-series-marvelvillains';

import { HEROES_OF_ASGARD } from '../../../teams';
import { CONQUEROR } from '../../../../../../schemetwister-series-marvelstudios/src/lib/gameSets/marvelStudios/marvelStudios.keywords';
import { ARTIFACT } from '../guardiansOfTheGalaxy/guardiansOfTheGalaxy.keywords';

import { WORTHY } from './heroesOfAsgard.keywords';
import { META } from './heroesOfAsgard.meta';

export const THOR = new Hero({
  id: '7287c952-0348-4f84-87fd-83f2db55447e',
  name: 'Thor',
  team: HEROES_OF_ASGARD,
  gameSet: META,
  keywords: [FearItself.Keywords.THROWN_ARTIFACT, WORTHY],
});

export const BETA_RAY_BILL = new Hero({
  id: '92dadd88-cf41-44d0-945f-0c1743885de9',
  name: 'Beta Ray Bill',
  team: HEROES_OF_ASGARD,
  gameSet: META,
  keywords: [FearItself.Keywords.THROWN_ARTIFACT, WORTHY],
});

export const VALKYRIE = new Hero({
  id: '8fecbbeb-c9a3-46a4-a482-080cb13abc75',
  name: 'Valkyrie',
  team: HEROES_OF_ASGARD,
  gameSet: META,
  keywords: [FearItself.Keywords.THROWN_ARTIFACT, CONQUEROR],
});

export const LADY_SIF = new Hero({
  id: 'cf0b41f2-f0aa-4f80-a0a3-74a85629cf5c',
  name: 'Lady Sif',
  team: HEROES_OF_ASGARD,
  gameSet: META,
  keywords: [ARTIFACT, FearItself.Keywords.THROWN_ARTIFACT],
});

export const THE_WARRIORS_THREE = new Hero({
  id: '36daa26b-af79-47cc-bd07-2e1653a2655e',
  name: 'The Warriors Three',
  team: HEROES_OF_ASGARD,
  gameSet: META,
  keywords: [CONQUEROR],
});
