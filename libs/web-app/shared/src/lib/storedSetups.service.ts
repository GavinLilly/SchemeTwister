import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IStoredGameSetup } from './storedGameSetup.interface';

const FIRESTORE_COLLECTION_TOKEN = 'FireStoreCollection';

@Injectable()
export class StoredSetupsService {
  constructor(
    private _firestore: AngularFirestore,
    @Inject(FIRESTORE_COLLECTION_TOKEN) private _collectionName: string
  ) {}

  public getSetupDocument(uid: string) {
    return this._firestore
      .doc<IStoredGameSetup>(`${this._collectionName}/${uid}`)
      .get();
  }

  public getLatestSetups(count = 10): Observable<IStoredGameSetup[]> {
    return this._firestore
      .collection<IStoredGameSetup>(this._collectionName, (ref) =>
        ref.orderBy('updated', 'desc').limit(count)
      )
      .snapshotChanges()
      .pipe(map((val) => val.map((foo) => foo.payload.doc.data())));
  }
}
