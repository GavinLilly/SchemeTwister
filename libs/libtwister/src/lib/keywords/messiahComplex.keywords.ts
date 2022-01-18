import {
  CLONE,
  PREY,
  SHATTER,
  TACTICAL_FORMATION,
  VEILED_SCHEMES,
} from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const Clone: IKeyword = {
  ...CLONE,
  description: 'TBD',
};

export const Shatter: IKeyword = {
  ...SHATTER,
  description: 'TBD',
};

export const Prey: IKeyword = {
  ...PREY,
  description: 'TBD',
};

export const TacticalFormation: IKeyword = {
  ...TACTICAL_FORMATION,
  description: 'TBD',
};

export const VeiledSchemes: IKeyword = {
  ...VEILED_SCHEMES,
  description: 'TBD',
};
