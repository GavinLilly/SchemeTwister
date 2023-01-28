import { IHenchmen , CardType } from '../../../model';


import { SHIELD_CLEARANCE } from './keywords';
import { META } from './meta';

export const MANDROID: IHenchmen = {
  id: 'cdda62f3-711b-43ec-a30f-1a6d68739298',
  name: 'Mandroid',
  attackPoints: '2+',
  victoryPoints: 1,
  cardType: CardType.HENCHMEN,
  gameSetId: META.id,
  fight: 'KO one of your Heroes.',
};

export const CAPE_KILLERS: IHenchmen = {
  id: '7f0e7c78-884d-494d-9b66-9e0b0323d942',
  name: 'Cape-Killers',
  attackPoints: '3',
  victoryPoints: 1,
  cardType: CardType.HENCHMEN,
  gameSetId: META.id,
  fight: 'KO a card from your discard pile.',
  keywords: [SHIELD_CLEARANCE],
};
