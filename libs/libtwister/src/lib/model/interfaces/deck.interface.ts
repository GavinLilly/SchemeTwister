import { Hero, Henchmen, VillainGroup, Mastermind } from '../cards';

interface IDeck {
  heroes?: Set<Hero>;
  henchmen?: Set<Henchmen>;
  numBystanders?: number;
}

interface INonHeroDeck extends IDeck {
  villains?: Set<VillainGroup>;
  numTwists?: number;
  masterminds?: Set<Mastermind>;
}

export interface IHeroDeck extends IDeck {
  heroes: Set<Hero>;
}

export type HeroDeckMinimal = Partial<Pick<IHeroDeck, 'heroes' | 'henchmen'>>;

export interface IVillainDeck extends INonHeroDeck {
  villains: Set<VillainGroup>;
  henchmen: Set<Henchmen>;
  numTwists: number;
  numMasterStrikes: number;
  numSidekicks?: number;
  numAmbitions?: number;
  numShieldOfficers?: number;
}

export type VillainDeckMinimal = Partial<
  Pick<IVillainDeck, 'heroes' | 'villains' | 'henchmen' | 'masterminds'>
>;

export interface IAdditionalDeckDeck extends INonHeroDeck {
  numWounds?: number;
}

export type AdditionalDeckDeckMinimal = Partial<
  Pick<IAdditionalDeckDeck, 'heroes' | 'henchmen' | 'masterminds' | 'villains'>
>;

export interface IAdditionalDeck {
  name: string;
  instructions?: string;
  deck: IAdditionalDeckDeck;
}
