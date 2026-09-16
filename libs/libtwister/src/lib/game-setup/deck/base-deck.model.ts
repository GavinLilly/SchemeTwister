import { Henchmen } from '../../henchmen/henchmen.model';
import { Hero } from '../../hero/hero.model';

export interface BaseDeck {
  heroes?: Hero[];
  henchmen?: Henchmen[];
  numBystanders?: number;
}
