import { CardType, Keyword } from '../cardSet';
import { GameSets } from '../gamesets';
import { IHenchmen } from './henchmen.interface';

type HenchmenNames =
  | 'SIDERA_MARIS_BRIDGE_BUILDERS'
  | 'UNIVERSAL_CHURCH_OF_TRUTH';

export const IntoTheCosmos: Record<HenchmenNames, IHenchmen> = {
  SIDERA_MARIS_BRIDGE_BUILDERS: {
    id: '094737d8-4ba8-4d61-b1b0-0a3726a0ca5d',
    name: 'Sidera Maris, Bridge Builders',
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.INTO_THE_COSMOS,
    fight: 'KO one of your Heroes.',
  },
  UNIVERSAL_CHURCH_OF_TRUTH: {
    id: '56f2c6ea-ef75-47b6-a8a8-6891c97a9969',
    name: 'Universal Church of Truth',
    attackPoints: '2',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.INTO_THE_COSMOS,
    fight: 'Burn 2 Shards: KO one of your Heroes',
  },
};
