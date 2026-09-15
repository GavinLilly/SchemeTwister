import { Henchmen } from '../../henchmen/henchmen.model';
import { VillainGroup } from '../../villain-group/villain-group.model';

import { NonHeroDeck } from './non-hero-deck.model';

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
