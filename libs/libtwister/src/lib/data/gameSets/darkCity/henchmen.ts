import { CardType, IHenchmen } from '../../../model';
import { HeroClass } from '../../enums';

import { BRIBE } from './keywords';
import { META } from './meta';

export const MAGGIA_GOONS: IHenchmen = {
  id: '11b440df-9d3d-4546-af21-498058cfe6f7',
  name: 'Maggia Goons',
  keywords: [BRIBE],
  fight: 'KO one of your Heroes.',
  attackPoints: 4,
  victoryPoints: 1,
  gameSetId: META.id,
  cardType: CardType.HENCHMEN,
};

export const PHALANX: IHenchmen = {
  id: 'afd81252-9b06-42fa-bc75-e7b928ca49aa',
  name: 'Phalanx',
  fight: `Reveal a ${HeroClass.TECH} Hero or KO one of your Heroes with an Attack icon`,
  attackPoints: 3,
  victoryPoints: 1,
  gameSetId: META.id,
  cardType: CardType.HENCHMEN,
};
