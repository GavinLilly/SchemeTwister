import { Henchmen } from '../cards/henchmen';
import { Hero } from '../cards/hero';
import { Mastermind } from '../cards/mastermind/mastermind';
import { VillainGroup } from '../cards/villain-group';

interface BaseDeck {
  heroes?: Hero[];
  henchmen?: Henchmen[];
  numBystanders?: number;
}

interface NonHeroDeck extends BaseDeck {
  villains?: VillainGroup[];
  numTwists?: number;
  masterminds?: Mastermind[];
}

export interface HeroDeck extends BaseDeck {
  heroes: Hero[];
}

export type HeroDeckMinimal = Partial<Pick<HeroDeck, 'heroes' | 'henchmen'>>;

export interface VillainDeck extends NonHeroDeck {
  villains: VillainGroup[];
  henchmen: Henchmen[];
  numTwists: number;
  numMasterStrikes: number;
  numSidekicks?: number;
  numAmbitions?: number;
  numShieldOfficers?: number;
}

export type VillainDeckMinimal = Partial<
  Pick<VillainDeck, 'heroes' | 'villains' | 'henchmen' | 'masterminds'>
>;

export interface AdditionalDeck extends NonHeroDeck {
  numWounds?: number;
}

export type AdditionalDeckDeckMinimal = Partial<
  Pick<AdditionalDeck, 'heroes' | 'henchmen' | 'masterminds' | 'villains'>
>;

export interface AdditionalDeckConfig {
  name: string;
  instructions?: string;
  deck: AdditionalDeck;
}
