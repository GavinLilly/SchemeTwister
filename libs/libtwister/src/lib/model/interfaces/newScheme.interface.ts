import { Constructor } from 'type-fest';

import { RulesModifierFunction } from '../rules';
import { Scheme } from '../schemes/Scheme';

import { ICard } from './card.interface';
import { ICardType } from './cardType.interface';

/* eslint-disable @typescript-eslint/naming-convention */
interface IEachPlayerTwists {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}
/* eslint-enable @typescript-eslint/naming-convention */

export interface IOverrideScheme {
  schemeType: Constructor<Scheme>;
  params?: unknown[];
}

export interface IScheme extends ICard, ICardType {
  setup: string;
  twist: string;
  evilWins: string;
  specialRules?: string;
  meta: {
    numTwists: number | IEachPlayerTwists;
    rules?: RulesModifierFunction;
    overrideScheme?: IOverrideScheme;
  };
}

export type ShortScheme = Omit<IScheme, 'gameSet' | 'cardType'>;

export type SchemeMinusRules = Omit<IScheme, 'rules'>;
