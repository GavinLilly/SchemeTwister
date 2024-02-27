import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { IRootState } from './models/root-state';

export function localStorageSyncReducer(
  reducer: ActionReducer<IRootState>
): ActionReducer<IRootState> {
  return localStorageSync({
    keys: [
      { numPlayers: ['numPlayers', 'isAdvancedSolo'] },
      { gameSets: ['gameSetIds', 'seriesIds'] },
    ],
    rehydrate: true,
  })(reducer);
}
