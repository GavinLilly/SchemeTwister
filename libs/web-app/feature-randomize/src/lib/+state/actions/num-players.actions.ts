import { createAction, props } from '@ngrx/store';
import { NumPlayers } from '@schemetwister/libtwister';

const domain = '[Randomize Page]';

export const incrementNumPlayers = createAction(
  `${domain} Increment NumPlayers`
);

export const decrementNumPlayers = createAction(
  `${domain} Decrement NumPlayers`
);

export const setNumPlayers = createAction(
  `${domain} Set NumPlayers`,
  props<{ numPlayers: NumPlayers }>()
);

export const setAdvancedSolo = createAction(
  `${domain} Set AdvancedSolo`,
  props<{ isAdvancedSolo: boolean }>()
);
