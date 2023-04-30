import { AbstractMastermind } from '../AbstractMastermind';

import { IHenchmen } from './henchmen.interface';
import { IHero } from './hero.interface';
import { IVillainGroup } from './villainGroup.interface';

interface IDeck {
  heroes?: IHero[];
  henchmen?: IHenchmen[];
  numBystanders?: number;
}

export interface IHeroDeck extends IDeck {
  heroes: IHero[];
}

export type HeroDeckMinimal = Partial<Pick<IHeroDeck, 'heroes' | 'henchmen'>>;

export interface IVillainDeck extends IDeck {
  villains: IVillainGroup[];
  henchmen: IHenchmen[];
  numTwists: number;
  numMasterStrikes: number;
  masterminds?: AbstractMastermind[];
  numSidekicks?: number;
  numAmbitions?: number;
  numShieldOfficers?: number;
}

export type VillainDeckMinimal = Partial<
  Pick<IVillainDeck, 'heroes' | 'villains' | 'henchmen' | 'masterminds'>
>;

export interface IAdditionalDeckDeck extends IDeck {
  villains?: IVillainGroup[];
  numTwists?: number;
  numWounds?: number;
  masterminds?: AbstractMastermind[];
}

export type AdditionalDeckDeckMinimal = Partial<
  Pick<IAdditionalDeckDeck, 'heroes' | 'henchmen' | 'masterminds' | 'villains'>
>;

export interface IAdditionalDeck {
  name: string;
  instructions?: string;
  deck: IAdditionalDeckDeck;
}
