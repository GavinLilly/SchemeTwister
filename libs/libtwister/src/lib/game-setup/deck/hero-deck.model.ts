import { Hero } from '../../hero/hero.model';
import { BaseDeck } from './base-deck.model';

export interface HeroDeck extends BaseDeck {
  heroes: Hero[];
}

export type HeroDeckMinimal = Partial<Pick<HeroDeck, 'heroes' | 'henchmen'>>;
