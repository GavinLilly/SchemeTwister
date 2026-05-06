/* eslint-disable @typescript-eslint/naming-convention */
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { NumPlayers } from '@schemetwister/libtwister';

export const numPlayersActions = createActionGroup({
  source: 'Number of players component',
  events: {
    'Increment Number of Players': emptyProps(),
    'Decrement Number of Players': emptyProps(),
    'Set Number of Players': props<{ numPlayers: NumPlayers }>(),
    'Set AdvancedSolo': props<{ isAdvancedSolo: boolean }>(),
  },
});
