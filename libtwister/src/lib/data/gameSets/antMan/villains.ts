import { CardType, IVillainGroup } from '../../../model';

import {
  CHIVALROUS_DUEL,
  EMPOWERED,
  MICROSCOPIC_SIZE_CHANGING,
  SIZE_CHANGING,
} from './keywords';
import { META } from './meta';

export const ULTRONS_LEGACY: IVillainGroup = {
  id: 'ac9173ae-138c-41ca-a4c8-945d1e09ffcd',
  name: "Ultron's Legacy",
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [MICROSCOPIC_SIZE_CHANGING, SIZE_CHANGING, EMPOWERED],
};

export const QUEENS_VENGEANCE: IVillainGroup = {
  id: 'cd0cfd2c-6b04-4385-bee1-573ee311af17',
  name: "Queen's Vengeance",
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [MICROSCOPIC_SIZE_CHANGING, CHIVALROUS_DUEL],
};
