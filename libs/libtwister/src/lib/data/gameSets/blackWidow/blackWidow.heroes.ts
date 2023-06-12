import { Hero } from '../../../model';
import { AVENGERS, MARVEL_KNIGHTS, SHIELD } from '../../teams';
import { WHEN_RECRUITED } from '../realmOfKings/realmOfKings.keywords';
import { DARK_MEMORIES } from '../revelations/revelations.keywords';
import { UNDERCOVER } from '../shield/shield.keywords';
import { DODGE } from '../villains/villains.keywords';

import { UNLEASH } from './blackWidow.keywords';
import { META } from './blackWidow.meta';

export const BLACK_WIDOW = new Hero({
  id: '45950633-2ab7-4bf8-87da-df45a1cd42af',
  name: 'Black Widow',
  team: SHIELD,

  gameSet: META,
  keywords: [DODGE, DARK_MEMORIES, UNDERCOVER],
});

export const YELENA_BELOVA = new Hero({
  id: 'ca500a68-e8b5-4845-87be-05510c3176f5',
  name: 'Yelena Belova',
  team: SHIELD,

  gameSet: META,
  keywords: [UNDERCOVER, UNLEASH, DODGE],
});

export const RED_GUARDIAN = new Hero({
  id: '8fc823b4-11b0-4d96-89bb-98831eefb5cf',
  name: 'Red Guardian',

  gameSet: META,
  keywords: [WHEN_RECRUITED, UNDERCOVER, UNLEASH],
});

export const WHITE_TIGER = new Hero({
  id: 'e9114379-5eec-44bb-a2b2-f2cdd7ae43e7',
  name: 'White Tiger',
  team: MARVEL_KNIGHTS,

  gameSet: META,
  keywords: [DODGE, DARK_MEMORIES],
});

export const FALCON_AND_WINTER_SOLDIER = new Hero({
  id: 'eef98daf-b51b-459c-8ee7-f7d412d0dde0',
  name: 'Falcon & Winter Soldier',
  team: AVENGERS,

  gameSet: META,
  keywords: [DARK_MEMORIES, DODGE],
});
