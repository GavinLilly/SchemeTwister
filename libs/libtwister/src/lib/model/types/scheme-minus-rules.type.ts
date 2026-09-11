import { SchemeDefinition } from '../cards/scheme-definition';

export type SchemeMinusRules = Omit<SchemeDefinition, 'rules'>;
