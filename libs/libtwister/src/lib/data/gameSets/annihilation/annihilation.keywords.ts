import { IKeyword } from '../../../model';
import { KeywordName } from '../../keywordName.enum';
import { MAN_OUT_OF_TIME as ManOutOfTimeOriginal } from '../captainAmerica/captainAmerica.keywords';

export const MOMENTUM: IKeyword = {
  name: KeywordName.MOMENTUM,
  id: '51c6dbde-1cd6-4ee1-b84a-d5620e8e7b1e',
  description: `Cards with this keyword gain attack if they moved city spaces in a given turn`,
};

export const MASS_MOMENTUM: IKeyword = {
  name: KeywordName.MASS_MOMENTUM,
  id: '2facb642-db2b-4585-b2b3-8947ec655336',
  description: `Mass Momentum gives Annihilus a bonus for every villain the advances through the city in the turn.`,
};

export const MAN_OUT_OF_TIME: IKeyword = {
  name: KeywordName.MAN_OUT_OF_TIME,
  id: '373e159e-59ed-46ea-9345-5c3876124549',
  description: `${ManOutOfTimeOriginal.description}
---
Now some cards can send player cards "Out of Time"`,
};
