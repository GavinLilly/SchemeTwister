import { IScheme } from '../interfaces';

export type ShortScheme = Omit<IScheme, 'gameSet' | 'cardType'>;

export type SchemeMinusRules = Omit<IScheme, 'rules'>;
