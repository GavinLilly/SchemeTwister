import { VillainGroup } from '@schemetwister/libtwister';

import { BERSERK } from '../xMen/xMen.keywords';

import { WEAPON_X_SEQUENCE } from './weaponX.keywords';
import { META } from './weaponX.meta';

export const BERSERKERS = new VillainGroup({
  id: '6abc8081-1d00-424c-a871-e539667691dc',
  name: 'Berserkers',
  keywords: [BERSERK],
  gameSet: META,
});

export const WEAPON_PLUS = new VillainGroup({
  id: 'd52c2e9d-26da-4e55-9811-fe6162cb6984',
  name: 'Weapon Plus',
  keywords: [WEAPON_X_SEQUENCE, BERSERK],
  gameSet: META,
});
