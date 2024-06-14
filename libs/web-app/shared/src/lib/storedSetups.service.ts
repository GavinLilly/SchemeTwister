import { Inject, Injectable } from '@angular/core';
import {
  CollectionReference,
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from '@angular/fire/firestore';

import { IStoredGameSetup } from './storedGameSetup.interface';

export const FIRESTORE_COLLECTION_TOKEN = 'FireStoreCollection';

@Injectable()
export class StoredSetupsService {
  setupsCollection: CollectionReference;
  constructor(
    _firestore: Firestore,
    @Inject(FIRESTORE_COLLECTION_TOKEN) _collectionName: string
  ) {
    this.setupsCollection = collection(_firestore, _collectionName);
  }

  public async getSetupDocument(uid: string) {
    const docRef = doc(this.setupsCollection, uid);
    return getDoc(docRef);
  }

  public async getLatestSetups(count = 10): Promise<IStoredGameSetup[]> {
    const latestSetupsQuery = query(
      this.setupsCollection,
      orderBy('updated'),
      limit(count)
    );

    const snapshot = await getDocs(latestSetupsQuery);
    return snapshot.docs.map((doc) => doc.data() as IStoredGameSetup);
  }
}
