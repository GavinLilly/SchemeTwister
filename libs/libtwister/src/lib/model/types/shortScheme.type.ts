import { IScheme } from '../interfaces';

export type ShortScheme = Omit<IScheme, 'gameSetId' | 'rules' | 'cardType'>;
