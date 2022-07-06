import { createAction, props } from '@ngrx/store';
import {
  AbstractMastermind,
  AbstractScheme,
  GameSetup,
} from '@schemetwister/libtwister';

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

export const setDefinedScheme = createAction(
  `${domain} Set Defined Scheme`,
  props<{ scheme: AbstractScheme }>()
);

export const resetDefinedScheme = createAction(
  `${domain} Reset Defined Scheme`
);

export const setDefinedMastermind = createAction(
  `${domain} Set Defined Mastermind`,
  props<{ mastermind: AbstractMastermind }>()
);

export const resetDefinedMastermind = createAction(
  `${domain} Reset Defined Mastermind`
);