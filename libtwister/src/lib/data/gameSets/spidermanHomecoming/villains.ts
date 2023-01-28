import { IVillainGroup , CardType } from '../../../model';
import { WALL_CRAWL } from '../paintTheTownRed/keywords';

import { DANGER_SENSE, STRIKER } from './keywords';
import { META } from './meta';

export const SALVAGERS: IVillainGroup = {
  id: '36db4913-6798-42f6-b8bb-0603ef256005',
  name: 'Salvagers',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [STRIKER],
};

export const VULTURE_TECH: IVillainGroup = {
  id: '4795a9f5-9992-4ef7-9884-c94118fd939f',
  name: 'Vulture Tech',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [WALL_CRAWL, DANGER_SENSE, STRIKER],
};
