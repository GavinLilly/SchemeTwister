import { Constructor } from 'type-fest';

import { RulesModifierFunction } from '../rules';
import { Scheme } from '../schemes/Scheme';

import { ICardType } from './cardType.interface';
import { IPlayableObject } from './playableObject.interface';

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

export interface IScheme extends IPlayableObject, ICardType {
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
