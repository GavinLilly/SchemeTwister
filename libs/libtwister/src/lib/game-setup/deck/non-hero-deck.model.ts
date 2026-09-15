import { Mastermind } from '../../mastermind/mastermind.model';
import { VillainGroup } from '../../villain-group/villain-group.model';
import { BaseDeck } from './base-deck.model';

export interface NonHeroDeck extends BaseDeck {
  villains?: VillainGroup[];
  numTwists?: number;
  masterminds?: Mastermind[];
}
