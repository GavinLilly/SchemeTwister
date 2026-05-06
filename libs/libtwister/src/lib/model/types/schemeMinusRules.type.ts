import { IScheme } from '../interfaces/scheme.interface';

export type SchemeMinusRules = Omit<IScheme, 'rules'>;
