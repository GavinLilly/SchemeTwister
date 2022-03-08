import { createAction, props } from '@ngrx/store';

const domain = '[Randomize Page]';

export const addGameSet = createAction(
  `${domain} Add Game Set`,
  props<{ gameSetId: string }>()
);

export const removeGameSet = createAction(
  `${domain} Remove Game Set`,
  props<{ gameSetId: string }>()
);

export const setGameSets = createAction(
  `${domain} Set Game Sets`,
  props<{ gameSetIds: string[] }>()
);

export const setGameSetsSuccess = createAction(
  `${domain} Set Game Sets Success`,
  props<{ gameSetIds: string[] }>()
);

export const setGameSetsFailure = createAction(
  `${domain} Set Game Sets Failure`,
  (errorMessage = 'Error: You must select at least 1 core or large box') => ({
    payload: { errorMessage },
  })
);
