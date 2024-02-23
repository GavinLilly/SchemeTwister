import { Hero } from '@schemetwister/libtwister';

import {
  AVENGERS,
  CABAL,
  ILLUMINATI,
  SPIDER_FRIENDS,
  X_MEN,
} from '../../teams';
import { TELEPORT } from '../darkCity/darkCity.keywords';

import { CROSS_DIMENSIONAL_RAMPAGE } from './sw1.keywords';
import { META } from './sw1.meta';

export const APOCALYPTIC_KITTY_PRYDE = new Hero({
  id: 'ff75f7c1-ea51-4611-8906-007f34020f36',
  name: 'Apocalyptic Kitty Pryde',
  team: X_MEN,

  gameSet: META,
});

export const BLACK_BOLT = new Hero({
  id: '70aa9d63-2a1a-4a88-b020-fcd29f1682a7',
  name: 'Black Bolt',
  team: ILLUMINATI,

  gameSet: META,
});

export const BLACK_PANTHER = new Hero({
  id: '25a81d82-c642-4a64-bc88-0ec167ad72f8',
  name: 'Black Panther',
  team: ILLUMINATI,

  gameSet: META,
});

export const CAPTAIN_MARVEL = new Hero({
  id: 'd5292626-4ec9-46c0-b578-233dff88061e',
  name: 'Captain Marvel',
  team: AVENGERS,

  gameSet: META,
});

export const DR_STRANGE = new Hero({
  id: '072aca76-b88d-4e36-b338-dfb6a843deee',
  name: 'Dr. Strange',
  team: ILLUMINATI,

  gameSet: META,
  keywords: [TELEPORT],
});

export const LADY_THOR = new Hero({
  id: 'b5d618dd-0a8c-42fb-9016-237121c33679',
  name: 'Lady Thor',
  team: AVENGERS,

  gameSet: META,
});

export const MAGIK = new Hero({
  id: 'ce8f16e3-6b58-4109-96b8-6151d88be656',
  name: 'Magik',
  team: X_MEN,

  gameSet: META,
  keywords: [TELEPORT],
});

export const MAXIMUS = new Hero({
  id: '9a8c0cc8-2c50-4222-801e-224cbb7a3cc6',
  name: 'Maximus',
  team: CABAL,

  gameSet: META,
});

export const NAMOR_THE_SUBMARINER = new Hero({
  id: 'd7489478-616e-42a7-9ebc-7ae5940ea3a3',
  name: 'Namor, the Sub-Mariner',
  team: CABAL,

  gameSet: META,
});

export const OLD_MAN_LOGAN = new Hero({
  id: '7c410c7c-b1d8-4295-a8eb-33d7503369cd',
  name: 'Old Man Logan',
  team: X_MEN,

  gameSet: META,
  keywords: [CROSS_DIMENSIONAL_RAMPAGE],
});

export const PROXIMA_MIDNIGHT = new Hero({
  id: 'bb939bcc-ad84-4e61-9217-413338c3fcf2',
  name: 'Proxima Midnight',
  team: CABAL,

  gameSet: META,
});

export const SUPERIOR_IRON_MAN = new Hero({
  id: '786c707d-0b8c-459b-8c34-a1652002ba54',
  name: 'Superior Iron Man',
  team: ILLUMINATI,

  gameSet: META,
});

export const THANOS = new Hero({
  id: '5209393c-c682-45bf-bd96-ac57de0acfa3',
  name: 'Thanos',
  team: CABAL,

  gameSet: META,
  keywords: [TELEPORT],
});

export const ULTIMATE_SPIDERMAN = new Hero({
  id: '3765d005-a552-472e-b47c-531323c87528',
  name: 'Ultimate Spider-Man',
  team: SPIDER_FRIENDS,

  gameSet: META,
});
