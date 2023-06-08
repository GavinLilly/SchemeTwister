import { IVillainGroup, CardType } from '../../../model';
import { CONQUEROR } from '../marvelStudios/keywords';

import { MAN_OUT_OF_TIME, MOMENTUM } from './keywords';
import { META } from './meta';

export const ANNIHILATION_WAVE: IVillainGroup = {
  id: 'efcbc5ba-b401-4268-844b-b35c97b4a274',
  name: 'Annihilation Wave',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [MOMENTUM],
};

export const TIMELINES_OF_KANG: IVillainGroup = {
  id: '3ff639d6-d3ed-47d5-92a3-5696636368d2',
  name: 'Timelines of Kang',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [CONQUEROR, MAN_OUT_OF_TIME],
};
