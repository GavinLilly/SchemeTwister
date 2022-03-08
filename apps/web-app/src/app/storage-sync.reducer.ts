import { storageSync } from '@larscom/ngrx-store-storagesync';
import { ActionReducer } from '@ngrx/store';
import {
  IGameSetsState,
  IGameSetupState,
  INumPlayersState,
} from '@schemetwister/web-app/feature-randomize';

export interface IRootState {
  numPlayers: INumPlayersState;
  gameSets: IGameSetsState;
  gameSetup: IGameSetupState;
}

export function storageSyncReducer(
  reducer: ActionReducer<IRootState>
): ActionReducer<IRootState> {
  const metaReducer = storageSync<IRootState>({
    features: [{ stateKey: 'numPlayers' }, { stateKey: 'gameSets' }],
    storage: window.localStorage,
  });

  return metaReducer(reducer);
}
