import { IScheme } from '../interfaces';

export type SchemeMinusRules = Omit<IScheme, 'rules'>;
