import { Hero } from '@schemetwister/libtwister';
import { AVENGERS } from '@schemetwister/schemetwister-series-marvel-common';

import { MARVEL_KNIGHTS, X_FORCE } from '../../teams';
import { BERSERK } from '../xMen/xMen.keywords';

import { WEAPON_X_SEQUENCE } from './weaponX.keywords';
import { META } from './weaponX.meta';

export const WEAPON_X = new Hero({
  id: 'd7f6e222-9afc-45f3-b93a-106360dafdc0',
  name: 'Weapon X (Wolverine)',
  team: MARVEL_KNIGHTS,
  keywords: [BERSERK, WEAPON_X_SEQUENCE],
  gameSet: META,
});

export const WEAPON_H = new Hero({
  id: '7511d3a6-c357-4d40-852f-f900e1dcbb0f',
  name: 'Weapon H',
  team: AVENGERS,
  keywords: [BERSERK, WEAPON_X_SEQUENCE],
  gameSet: META,
});

export const MARROW = new Hero({
  id: '623faff2-9beb-4fb6-9b34-ee8109aa813a',
  name: 'Marrow',
  team: X_FORCE,
  keywords: [BERSERK, WEAPON_X_SEQUENCE],
  gameSet: META,
});

export const FANTOMEX = new Hero({
  id: '02ac394d-100a-45a9-a0af-fc7d0464378d',
  name: 'Fantomex',
  team: X_FORCE,
  keywords: [WEAPON_X_SEQUENCE],
  gameSet: META,
});
