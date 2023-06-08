import { CardType, IVillainGroup } from '../../../model';
import { EMPOWERED } from '../antMan/keywords';

import { META } from './meta';

export const KILLMONGERS_LEAGUE: IVillainGroup = {
  id: '92b6d184-167c-48c4-bfe3-af9647289783',
  name: "Killmonger's League",
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
};

export const ENEMIES_OF_WAKANDA: IVillainGroup = {
  id: '6c925a24-caf0-4fe5-af81-e26c3933fedf',
  name: 'Enemies of Wakanda',
  cardType: CardType.VILLAINGROUP,
  gameSet: META,
  keywords: [EMPOWERED],
};
