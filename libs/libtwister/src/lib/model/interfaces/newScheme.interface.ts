import { Constructor } from 'type-fest';

import { RulesModifierFunction } from '../rules';
import { Scheme } from '../schemes/Scheme';

import { IScheme } from './scheme.interface';

interface IEachPlayerTwists {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

export interface IOverrideScheme {
  schemeType: Constructor<Scheme>;
  params?: unknown[];
}

interface INewScheme extends IScheme {
  meta: {
    numTwists: number | IEachPlayerTwists;
    rules?: RulesModifierFunction;
    overrideScheme?: IOverrideScheme;
  };
}

export type NewScheme = Omit<INewScheme, 'gameSetId' | 'cardType'>;

export type SchemeMinusRules = Omit<INewScheme, 'rules'>;