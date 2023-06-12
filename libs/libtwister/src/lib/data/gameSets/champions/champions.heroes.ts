import { Hero } from '../../../model';
import { CHAMPIONS } from '../../teams';
import { VERSATILE } from '../darkCity/darkCity.keywords';
import { DEMOLISH } from '../villains/villains.keywords';

import { CHEERING_CROWDS, SIZE_CHANGING } from './champions.keywords';
import { META } from './champions.meta';

export const GWENPOOL = new Hero({
  id: '1ecb9f13-f1cd-4613-8197-ba1b4c626ab2',
  name: 'Gwenpool',
  team: CHAMPIONS,

  gameSet: META,
  keywords: [VERSATILE, DEMOLISH, CHEERING_CROWDS, SIZE_CHANGING],
});

export const MS_MARVEL = new Hero({
  id: '7b8700bf-4e45-4e27-ac0e-c223a2e0cb77',
  name: 'Ms. Marvel',
  team: CHAMPIONS,

  gameSet: META,
  keywords: [VERSATILE, CHEERING_CROWDS, SIZE_CHANGING],
});

export const NOVA = new Hero({
  id: 'cb322dba-93f8-43ba-9442-dcdad10b6e38',
  name: 'Nova',
  team: CHAMPIONS,

  gameSet: META,
  keywords: [VERSATILE, CHEERING_CROWDS, SIZE_CHANGING],
});

export const TOTALLY_AWESOME_HULK = new Hero({
  id: 'de462bef-ed15-451a-bf96-be598c8fcbe7',
  name: 'Totally Awesome Hulk',
  team: CHAMPIONS,

  gameSet: META,
  keywords: [CHEERING_CROWDS, SIZE_CHANGING],
});

export const VIV_VISION = new Hero({
  id: 'fb512758-213f-4f31-a6b8-a786c8d16f6c',
  name: 'Viv Vision',
  team: CHAMPIONS,

  gameSet: META,
  keywords: [VERSATILE, CHEERING_CROWDS, SIZE_CHANGING],
});
