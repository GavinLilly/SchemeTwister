import { ICard } from './card.interface';

export interface IScheme extends ICard {
  setup: string;
  twist: string;
  evilWins: string;
  specialRules?: string;
}
