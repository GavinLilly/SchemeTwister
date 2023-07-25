import { Timestamp } from '@firebase/firestore-types';
import { GameSetup, LiteGameSetup } from '@schemetwister/libtwister';
import firebase from 'firebase/app';

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
  created: firebase.firestore.Timestamp.now(),
  updated: firebase.firestore.Timestamp.now(),
};
