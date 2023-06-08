import { VillainGroup } from '../../../model';
import { CHIVALROUS_DUEL } from '../antMan/keywords';

import { CLONE_VILLAINS, PREY, SHATTER } from './keywords';
import { META } from './meta';

export const CLAN_YASHIDA = new VillainGroup({
  id: '229ecfc3-83db-4e1e-a6c4-c056d3d3536c',
  name: 'Clan Yashida',

  gameSet: META,
  keywords: [CHIVALROUS_DUEL],
});

export const ACOLYTES = new VillainGroup({
  id: '757bdfff-557e-4423-a25a-52ae7b4b2c85',
  name: 'Acolytes',

  gameSet: META,
  keywords: [SHATTER],
});

export const REAVERS = new VillainGroup({
  id: 'f4afd9d4-79d0-4c91-9943-804bfa826927',
  name: 'Reavers',

  gameSet: META,
  keywords: [PREY],
});

export const PURIFIERS = new VillainGroup({
  id: '432d06df-af81-4fbe-81b2-dca0fc97af38',
  name: 'Purifiers',

  gameSet: META,
  keywords: [PREY, CLONE_VILLAINS],
});
