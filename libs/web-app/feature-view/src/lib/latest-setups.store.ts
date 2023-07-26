import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import {
  IStoredGameSetup,
  StoredSetupsService,
} from '@schemetwister/web-app/shared';
import { Observable } from 'rxjs';

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
export class LatestSetupsStore extends ComponentStore<LatestSetupsStoreState> {
  constructor(private _storedSetupsService: StoredSetupsService) {
    super(initialState);
  }

  readonly getLatestSetups = this.effect(() =>
    this._storedSetupsService.getLatestSetups().pipe(
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
