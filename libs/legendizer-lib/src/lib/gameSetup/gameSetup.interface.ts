import { ICard } from '../cardSet';
import { IMastermind } from '../masterminds/mastermind.interface';
import { IScheme } from '../schemes';

export interface IDeck {
  cards: ICard[];
  numBystanders?: number;
  numWounds?: number;
  numTwists?: number;
}

export interface IVillainDeck extends IDeck {
  numTwists: number;
  numSidekicks?: number;
  numShieldOfficers?: number;
  numAmbitions?: number;
  numMasterStrikes: number;
}

export interface IAdditionalDeck {
  name: string;
  instructions?: string;
  deck: IDeck;
}

export interface IGameSetup {
  numPlayers: number;
  scheme: IScheme;
  mastermind: IMastermind;
  heroDeck: IDeck;
  villainDeck: IVillainDeck;
  numWounds?: number;
  additionalDeck?: IAdditionalDeck;
  numShieldOfficers?: number;
}
