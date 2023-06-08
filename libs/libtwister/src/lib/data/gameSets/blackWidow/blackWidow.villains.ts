import { VillainGroup } from '../../../model';
import { DARK_MEMORIES } from '../revelations/keywords';
import { UNDERCOVER } from '../shield/keywords';

import { UNLEASH } from './keywords';
import { META } from './meta';

export const TASKMASTERS_THUNDERBOLTS = new VillainGroup({
  id: 'b5a3e933-d0e6-4e73-a786-49bb07df113f',
  name: "Taskmaster's Thunderbolts",

  gameSet: META,
});

export const ELITE_ASSASSINS = new VillainGroup({
  id: '88e865c2-92e0-44b4-968c-dd002e0ed5ba',
  name: 'Elite Assassins',

  gameSet: META,
  keywords: [DARK_MEMORIES, UNDERCOVER, UNLEASH],
});
