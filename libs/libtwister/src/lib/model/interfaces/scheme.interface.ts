import { Constructor } from 'type-fest';

import { RulesModifierFunction } from '../rules';
import { Scheme } from '../schemes/scheme';

import { ICardType } from './card-type.interface';
import { ISpecialRules } from './special-rules.interface';

/* eslint-disable @typescript-eslint/naming-convention */
interface IEachPlayerNumber {
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

export interface ISchemeMeta {
  numTwists: number | IEachPlayerNumber;
  rules?: RulesModifierFunction;
  overrideScheme?: IOverrideScheme;
  numCourageTokens?: number | IEachPlayerNumber;
}

export interface IScheme extends ISpecialRules, ICardType {
  setup: string;
  twist: string;
  evilWins: string;
  meta: ISchemeMeta;
}
