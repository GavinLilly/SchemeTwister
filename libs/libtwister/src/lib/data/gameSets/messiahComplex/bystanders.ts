import { Bystander } from '../../../model';
import { INVESTIGATE } from '../noir/keywords';

import { CLONE_HEROES, SHATTER } from './keywords';
import { META } from './meta';

export const OPERA_SINGER = new Bystander({
  id: '7937511e-ac43-4678-972f-35608d94a1dd',
  name: 'Opera Singer',
  copies: 1,
  victoryPoints: 1,
  gameSet: META,

  keywords: [SHATTER],
});

export const CLONE_TECHNICIAN = new Bystander({
  id: 'e8efc6f5-d2c1-4ffd-b247-67f0ffdac470',
  name: 'Clone Technician',
  copies: 1,
  victoryPoints: 1,
  gameSet: META,

  keywords: [CLONE_HEROES],
});

export const PRIVATE_INVESTIGATOR = new Bystander({
  id: 'c14f28ce-979c-4efe-bbd1-24b6fbe2f081',
  name: 'Private Investigator',
  copies: 1,
  victoryPoints: 1,
  gameSet: META,

  keywords: [INVESTIGATE],
});
