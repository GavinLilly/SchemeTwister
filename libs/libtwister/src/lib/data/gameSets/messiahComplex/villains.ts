import { CardType, IVillainGroup } from '../../../model';
import { CHIVALROUS_DUEL } from '../antMan/keywords';

import { CLONE, PREY, SHATTER } from './keywords';
import { META } from './meta';

export const CLAN_YASHIDA: IVillainGroup = {
  id: '229ecfc3-83db-4e1e-a6c4-c056d3d3536c',
  name: 'Clan Yashida',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [CHIVALROUS_DUEL],
};

export const ACOLYTES: IVillainGroup = {
  id: '757bdfff-557e-4423-a25a-52ae7b4b2c85',
  name: 'Acolytes',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [SHATTER],
};

export const REAVERS: IVillainGroup = {
  id: 'f4afd9d4-79d0-4c91-9943-804bfa826927',
  name: 'Reavers',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [PREY],
};

export const PURIFIERS: IVillainGroup = {
  id: '432d06df-af81-4fbe-81b2-dca0fc97af38',
  name: 'Purifiers',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [PREY, CLONE],
};
