import { Injectable, inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tapResponse } from '@ngrx/operators';
import {
  IStoredGameSetup,
  StoredSetupsService,
} from '@schemetwister/web-app/feature-setup-store';
import { Observable, from } from 'rxjs';

export interface LatestSetupsStoreState {
  setups: IStoredGameSetup[];
  numSetupsToGet: number;
}

const initialState: LatestSetupsStoreState = {
  setups: [],
  numSetupsToGet: 10,
};

@Injectable({ providedIn: 'root' })
export class LatestSetupsStore extends ComponentStore<LatestSetupsStoreState> {
  private readonly _storedSetupsService = inject(StoredSetupsService);

  constructor() {
    super(initialState);
  }

  readonly getLatestSetups = this.effect(() =>
    from(this._storedSetupsService.getLatestSetups()).pipe(
      tapResponse({
        next: (setups) =>
          this.patchState(() => ({
            setups,
          })),
        error: (error) => console.log(error),
      })
    )
  );

  readonly setups$: Observable<IStoredGameSetup[]> = this.select(
    (state) => state.setups
  );
}
