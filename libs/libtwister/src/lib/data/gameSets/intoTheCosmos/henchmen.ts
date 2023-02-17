import { IHenchmen , CardType } from '../../../model';


import { BURNING_SHARDS, SHARDS } from './keywords';
import { META } from './meta';

export const SIDERA_MARIS_BRIDGE_BUILDERS: IHenchmen = {
  id: '094737d8-4ba8-4d61-b1b0-0a3726a0ca5d',
  name: 'Sidera Maris, Bridge Builders',
  attackPoints: '3',
  victoryPoints: 1,
  cardType: CardType.HENCHMEN,
  gameSetId: META.id,
  fight: 'KO one of your Heroes.',
  keywords: [SHARDS],
};

export const UNIVERSAL_CHURCH_OF_TRUTH: IHenchmen = {
  id: '56f2c6ea-ef75-47b6-a8a8-6891c97a9969',
  name: 'Universal Church of Truth',
  attackPoints: '2',
  victoryPoints: 1,
  cardType: CardType.HENCHMEN,
  gameSetId: META.id,
  fight: 'Burn 2 Shards: KO one of your Heroes',
  keywords: [SHARDS, BURNING_SHARDS],
};