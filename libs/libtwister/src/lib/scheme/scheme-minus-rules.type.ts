import { SchemeDefinition } from '../scheme/scheme-definition';

export type SchemeMinusRules = Omit<SchemeDefinition, 'rules'>;
