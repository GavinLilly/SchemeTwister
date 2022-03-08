import { Rules } from '../types/rules.type';

import { ICard } from './card.interface';

export interface IScheme extends ICard {
  setup: string;
  twist: string;
  evilWins: string;
  rules: Rules;
  specialRules?: string;
}
