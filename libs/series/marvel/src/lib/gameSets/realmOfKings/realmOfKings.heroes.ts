import { Hero } from '@schemetwister/libtwister';

import { INHUMANS } from '../../teams';
import { TELEPORT } from '../darkCity/darkCity.keywords';

import {
  ABOMINATION,
  CHOOSE_A_VILLAIN_GROUP,
  THRONES_FAVOR,
  WHEN_RECRUITED,
} from './realmOfKings.keywords';
import { META } from './realmOfKings.meta';

export const BLACK_BOLT = new Hero({
  id: 'f78985a9-729d-446f-8a03-4c037f4f8fd9',
  name: 'Black Bolt',
  team: INHUMANS,

  gameSet: META,
  keywords: [WHEN_RECRUITED, THRONES_FAVOR],
});

export const MEDUSA = new Hero({
  id: 'dd9444f3-c449-4659-9712-2033f3877fc3',
  name: 'Medusa',
  team: INHUMANS,

  gameSet: META,
  keywords: [WHEN_RECRUITED, THRONES_FAVOR],
});

export const CRYSTAL = new Hero({
  id: '909a7a01-9a54-4940-abb6-77ff229127ec',
  name: 'Crystal',
  team: INHUMANS,

  gameSet: META,
  keywords: [WHEN_RECRUITED, THRONES_FAVOR],
});

export const KARNAK = new Hero({
  id: '8fea3024-3249-436f-b4cc-b58a0de37712',
  name: 'Karnak',
  team: INHUMANS,

  gameSet: META,
  keywords: [WHEN_RECRUITED, CHOOSE_A_VILLAIN_GROUP],
});

export const GORGON = new Hero({
  id: 'bf9a9dee-5187-4286-9af8-29d63d5678c8',
  name: 'Gorgon',
  team: INHUMANS,

  gameSet: META,
  keywords: [TELEPORT, WHEN_RECRUITED, ABOMINATION],
});
