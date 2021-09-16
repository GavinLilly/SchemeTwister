import { MAN_OUT_OF_TIME, MASS_MOMENTUM, MOMENTUM } from './baseKeywords';
import { ManOutOfTime as ManOutOfTimeOriginal } from './captainAmerica.keywords';
import { IKeyword } from './keyword.interface';

export const Momentum: IKeyword = {
  ...MOMENTUM,
  description: `Cards with this keyword gain attack if they moved city spaces in a given turn`,
};

export const MassMomentum: IKeyword = {
  ...MASS_MOMENTUM,
  description: `Mass Momentum gives Annihilus a bonus for every villain the advances through the city in the turn.`,
};

export const ManOutOfTime: IKeyword = {
  ...MAN_OUT_OF_TIME,
  description: `${ManOutOfTimeOriginal.description}
---
Now some cards can send player cards "Out of Time"`,
};
