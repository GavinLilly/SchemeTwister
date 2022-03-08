import { createAction, props } from '@ngrx/store';
import { GameSetup } from '@schemetwister/libtwister';

const domain = '[Randomize Page]';

export const generateGameSetup = createAction(`${domain} Generate GameSetup`);

export const generateGameSetupSuccess = createAction(
  `${domain} Generate GameSetup Success`,
  props<{ gameSetup: GameSetup }>()
);

export const generateGameSetupFailure = createAction(
  `${domain} Generate GameSetup Failure`,
  (errorMessage = 'Error generating Game Setup') => ({
    payload: { errorMessage },
  })
);
