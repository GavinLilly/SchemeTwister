import { Timestamp } from '@angular/fire/firestore';
import { GameSetup, LiteGameSetup } from '@schemetwister/libtwister';

export const TWIST_COUNT_NAME = 'twistCount';

export interface IStoredGameSetup
  extends Omit<LiteGameSetup, 'toGameSetup' | 'calculateUid'> {
  twistCount: number;
  playCount: number;
  winCount: number;
  created: Timestamp;
  updated: Timestamp;
}

export const EMPTY_STORED_SETUP: IStoredGameSetup = {
  ...LiteGameSetup.of(GameSetup.empty()),
  twistCount: 1,
  playCount: 0,
  winCount: 0,
  created: Timestamp.now(),
  updated: Timestamp.now(),
};
