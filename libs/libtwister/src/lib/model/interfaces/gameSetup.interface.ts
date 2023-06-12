import { Mastermind } from '../cards';
import { Scheme } from '../schemes';

import { IAdditionalDeck, IHeroDeck, IVillainDeck } from './deck.interface';
import { IKeyword } from './keyword.interface';

export interface IGameSetup {
  numPlayers: number;
  scheme: Scheme;
  mastermind: Mastermind;
  numWounds?: number;
  numShieldOfficers?: number;
  heroDeck: IHeroDeck;
  villainDeck: IVillainDeck;
  additionalDeck?: IAdditionalDeck;
  keywords?: Set<IKeyword>;
}
