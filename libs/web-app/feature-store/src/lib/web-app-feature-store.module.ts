import { NgModule } from '@angular/core';
import {
  Action,
  ActionReducerMap,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  gameSetsReducer,
  gameSetupReducer,
  numPlayersReducer,
} from '@schemetwister/web-app/feature-randomize';

import { IRootState } from './models/root-state';
import { localStorageSyncReducer } from './storage-sync.reducer';

const reducers: ActionReducerMap<IRootState> = {
  numPlayers: numPlayersReducer,
  gameSets: gameSetsReducer,
  gameSetup: gameSetupReducer,
};

const metaReducers: Array<MetaReducer<IRootState, Action>> = [
  localStorageSyncReducer,
];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 30, serialize: true , connectInZone: true}),
  ],
  exports: [StoreModule],
})
export class WebAppFeatureStoreModule {}
