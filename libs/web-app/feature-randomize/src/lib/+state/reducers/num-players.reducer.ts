import { Action, createReducer, on } from '@ngrx/store';
import { NumPlayers } from '@schemetwister/libtwister';

import {
  decrementNumPlayers,
  incrementNumPlayers,
  setAdvancedSolo,
  setNumPlayers,
} from '../actions/num-players.actions';

export const numPlayersFeatureKey = 'numPlayers';

export interface INumPlayersState {
  numPlayers: NumPlayers;
  isAdvancedSolo: boolean;
}

export const initialState: INumPlayersState = {
  numPlayers: 2,
  isAdvancedSolo: false,
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const _numPlayersReducer = createReducer(
  initialState,
  on(incrementNumPlayers, (state) => ({
    ...state,
    numPlayers: (state.numPlayers + 1) as NumPlayers,
  })),
  on(decrementNumPlayers, (state) => ({
    ...state,
    numPlayers: (state.numPlayers - 1) as NumPlayers,
  })),
  on(setNumPlayers, (state, { numPlayers }) => ({
    ...state,
    numPlayers: numPlayers,
  })),
  on(setAdvancedSolo, (state, { isAdvancedSolo }) => ({
    ...state,
    isAdvancedSolo: isAdvancedSolo,
  }))
);

export function numPlayersReducer(
  state: INumPlayersState | undefined,
  action: Action
) {
  return _numPlayersReducer(state, action);
}
