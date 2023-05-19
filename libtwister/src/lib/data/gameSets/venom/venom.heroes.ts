import { Hero } from '../../../model';
import { VENOMVERSE } from '../../teams';
import { EXCESSIVE_VIOLENCE } from '../deadpool/keywords';
import { FEAST } from '../paintTheTownRed/keywords';

import { DIGEST, INDIGESTION } from './keywords';
import { META } from './meta';

export const CARNAGE = new Hero({
  id: 'b8ae624d-403d-4b16-885d-57c4c5b3766f',
  name: 'Carnage',
  team: VENOMVERSE,

  gameSet: META,
  keywords: [FEAST, EXCESSIVE_VIOLENCE, DIGEST, INDIGESTION],
});

export const VENOM = new Hero({
  id: 'c2b14ce7-1800-4abf-a50c-09fdcea904a2',
  name: 'Venom',
  team: VENOMVERSE,

  gameSet: META,
  keywords: [EXCESSIVE_VIOLENCE, DIGEST, INDIGESTION],
});

export const VENOM_ROCKET = new Hero({
  id: '5051052a-74d8-449a-9e9f-ed33aa8d66ef',
  name: 'Venom Rocket',
  team: VENOMVERSE,

  gameSet: META,
  keywords: [EXCESSIVE_VIOLENCE, DIGEST],
});

export const VENOMIZED_DR_STRANGE = new Hero({
  id: 'd70b182b-cdc8-4f0e-a001-cf0db996d788',
  name: 'Venomized Dr. Strange',
  team: VENOMVERSE,

  gameSet: META,
  keywords: [DIGEST],
});

export const VENOMPOOL = new Hero({
  id: '8037efb2-d80c-4cce-9c82-1e318c15fd90',
  name: 'Venompool',
  team: VENOMVERSE,

  gameSet: META,
  keywords: [EXCESSIVE_VIOLENCE, DIGEST, INDIGESTION],
});
