import { LiteGameSetup } from '@schemetwister/libtwister';

export const TWIST_COUNT_NAME = 'twistCount';

export interface IStoredGameSetup extends LiteGameSetup {
  twistCount: number;
  playCount: number;
  winCount: number;
}
