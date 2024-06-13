import { Inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
} from '@angular/fire/firestore';

import { IStoredGameSetup } from './storedGameSetup.interface';

export const FIRESTORE_COLLECTION_TOKEN = 'FireStoreCollection';

@Injectable()
export class StoredSetupsService {
  constructor(
    private _firestore: Firestore,
    @Inject(FIRESTORE_COLLECTION_TOKEN) private _collectionName: string
  ) {}

  public getSetupDocument = (uid: string) =>
    doc(this._firestore, `${this._collectionName}/${uid}`);

  public async getLatestSetups(count = 10): Promise<IStoredGameSetup[]> {
    const setupsCollection = collection(this._firestore, this._collectionName);
    const latestSetupsQuery = query(
      setupsCollection,
      orderBy('updated'),
      limit(count)
    );

    const setups: IStoredGameSetup[] = [];
    const snapshot = await getDocs(latestSetupsQuery);
    snapshot.forEach((doc) => setups.push(doc.data() as IStoredGameSetup));

    return setups;
  }
}
