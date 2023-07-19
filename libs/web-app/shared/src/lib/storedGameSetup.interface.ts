import { Timestamp } from '@firebase/firestore-types';
import { LiteGameSetup } from '@schemetwister/libtwister';

export const TWIST_COUNT_NAME = 'twistCount';

export interface IStoredGameSetup extends LiteGameSetup {
  twistCount: number;
  playCount: number;
  winCount: number;
  created: Timestamp;
  updated: Timestamp;
}
