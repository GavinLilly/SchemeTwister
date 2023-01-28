import { IHenchmen , CardType } from '../../../model';


import { LOCATIONS } from './keywords';
import { META } from './meta';

export const HYDRA_BASE: IHenchmen = {
  id: 'b6e568bb-cefb-45ed-9c3b-b18026b7d305',
  name: 'HYDRA Base',
  attackPoints: '2+',
  victoryPoints: 1,
  cardType: CardType.HENCHMEN,
  gameSetId: META.id,
  fight: 'KO one of your Heroes.',
  keywords: [LOCATIONS],
};

export const MANDARINS_RINGS: IHenchmen = {
  id: '225028da-e992-4073-84ae-2fd3853d1eac',
  name: "Mandarin's Rings",
  attackPoints: '3',
  victoryPoints: 1,
  cardType: CardType.HENCHMEN,
  gameSetId: META.id,
  fight: 'Draw a card.',
};
