import { Hero, Henchmen, VillainGroup, Mastermind } from '../cards';

interface IDeck {
  heroes?: Hero[];
  henchmen?: Henchmen[];
  numBystanders?: number;
}

export interface IHeroDeck extends IDeck {
  heroes: Hero[];
}

export type HeroDeckMinimal = Partial<Pick<IHeroDeck, 'heroes' | 'henchmen'>>;

export interface IVillainDeck extends IDeck {
  villains: VillainGroup[];
  henchmen: Henchmen[];
  numTwists: number;
  numMasterStrikes: number;
  masterminds?: Mastermind[];
  numSidekicks?: number;
  numAmbitions?: number;
  numShieldOfficers?: number;
}

export type VillainDeckMinimal = Partial<
  Pick<IVillainDeck, 'heroes' | 'villains' | 'henchmen' | 'masterminds'>
>;

export interface IAdditionalDeckDeck extends IDeck {
  villains?: VillainGroup[];
  numTwists?: number;
  numWounds?: number;
  masterminds?: Mastermind[];
}

export type AdditionalDeckDeckMinimal = Partial<
  Pick<IAdditionalDeckDeck, 'heroes' | 'henchmen' | 'masterminds' | 'villains'>
>;

export interface IAdditionalDeck {
  name: string;
  instructions?: string;
  deck: IAdditionalDeckDeck;
}
