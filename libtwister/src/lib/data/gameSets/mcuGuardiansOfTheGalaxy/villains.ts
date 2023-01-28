import { CardType, IVillainGroup } from '../../../model';
import { VILLAINOUS_WEAPONS } from '../heroesOfAsgard/keywords';

import { COMMAND, TRIGGERED_ARTIFACTS } from './keywords';
import { META } from './meta';

export const FOLLOWERS_OF_RONAN: IVillainGroup = {
  id: '516413ba-1e1c-4d76-bdda-3b6eee1e16d0',
  name: 'Followers of Ronan',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [COMMAND, VILLAINOUS_WEAPONS],
};

export const RAVAGERS: IVillainGroup = {
  id: '899ad45d-7915-4a3e-98cf-2d23a0992180',
  name: 'Ravagers',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [COMMAND, VILLAINOUS_WEAPONS, TRIGGERED_ARTIFACTS],
};
