import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { IStoredGameSetup } from '@schemetwister/web-app/shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface LatestSetupsStoreState {
  setups: IStoredGameSetup[];
  numSetupsToGet: number;
}

const initialState: LatestSetupsStoreState = {
  setups: [],
  numSetupsToGet: 10,
};

export const FIRESTORE_COLLECTION_TOKEN = 'FireStoreCollection';

@Injectable()
export class LatestSetupsStoreStore extends ComponentStore<LatestSetupsStoreState> {
  constructor(
    private _firestore: AngularFirestore,
    @Inject(FIRESTORE_COLLECTION_TOKEN) private _collectionName: string
  ) {
    super(initialState);
  }

  readonly getLatestSetups = this.effect(() =>
    this._firestore
      .collection<IStoredGameSetup>(this._collectionName, (ref) =>
        ref
          .orderBy('updated', 'desc')
          .limit(this.get((state) => state.numSetupsToGet))
      )
      .snapshotChanges()
      .pipe(
        map((val) => val.map((foo) => foo.payload.doc.data())),
        tapResponse(
          (setups) =>
            this.patchState(() => ({
              setups,
            })),
          (error) => console.log(error)
        )
      )
  );

  readonly setups$: Observable<IStoredGameSetup[]> = this.select(
    (state) => state.setups
  );
}
