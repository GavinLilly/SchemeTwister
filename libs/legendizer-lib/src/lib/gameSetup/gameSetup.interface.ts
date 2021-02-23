import { IHenchmen } from '../henchmen/henchmen.interface';
import { IHero } from '../heroes/hero.interface';
import { IMastermind } from '../masterminds/mastermind.interface';
import { IScheme } from '../schemes/scheme.interface';
import { IVillainGroup } from '../villains/villainGroup.interface';

export interface IHeroDeck {
  heroes: IHero[];
  bystanders?: number;
  henchmen?: IHenchmen[];
}

export interface IVillainDeck {
  henchmen: IHenchmen[];
  villains: IVillainGroup[];
  heroes?: IHero[];
  bystanders: number;
  twists: number;
}

export interface IAdditionalDeck {
  name: string;
  cards: {
    heroes?: IHero[];
    henchmen?: IHenchmen[];
    masterminds?: IMastermind[];
    numBystanders?: number;
  };
}

export interface IGameSetup {
  numPlayers: number;
  scheme: IScheme;
  mastermind: IMastermind;
  heroDeck: IHeroDeck;
  villainDeck: IVillainDeck;
  numWounds?: number;
  additionalDeck?: IAdditionalDeck;
}
