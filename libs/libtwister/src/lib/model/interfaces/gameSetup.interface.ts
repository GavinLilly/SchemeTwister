import { AbstractMastermind } from '../AbstractMastermind';
import { AbstractScheme } from '../AbstractScheme';

import { IAdditionalDeck, IHeroDeck, IVillainDeck } from './deck.interface';
import { IKeyword } from './keyword.interface';

export interface IGameSetup {
  numPlayers: number;
  scheme: AbstractScheme;
  mastermind: AbstractMastermind;
  numWounds?: number;
  numShieldOfficers?: number;
  heroDeck: IHeroDeck;
  villainDeck: IVillainDeck;
  additionalDeck?: IAdditionalDeck;
  keywords?: Set<IKeyword>;
}
