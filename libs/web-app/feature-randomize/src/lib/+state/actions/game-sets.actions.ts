/* eslint-disable @typescript-eslint/naming-convention */
import { createActionGroup, props } from '@ngrx/store';

export const gameSetSelectionActions = createActionGroup({
  source: 'Game Set Selection dialog',
  events: {
    'Add Game Set': props<{ gameSetId: string }>(),
    'Remove Game Set': props<{ gameSetId: string }>(),
    'Set Game Sets': props<{ gameSetIds: string[] }>(),
  },
});

export const gameSetCheckerActions = createActionGroup({
  source: 'Game Set Checker',
  events: {
    'Set Game Sets Success': props<{ gameSetIds: string[] }>(),
    'Set Game Sets Failure': (error?: Error) => ({
      payload: {
        error:
          error?.message ??
          'There is a problem with the list of game sets selected. Please ensure that at least 1 core or large box is chosen',
      },
    }),
  },
});
