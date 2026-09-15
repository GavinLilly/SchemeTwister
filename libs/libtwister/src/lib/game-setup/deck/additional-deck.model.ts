import { NonHeroDeck } from './non-hero-deck.model';

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
