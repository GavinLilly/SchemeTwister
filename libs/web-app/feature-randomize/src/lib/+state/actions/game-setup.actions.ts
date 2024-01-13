/* eslint-disable @typescript-eslint/naming-convention */
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  Mastermind,
  SchemeMinusRules,
  GameSetup,
} from '@schemetwister/libtwister';

export const randomizePageActions = createActionGroup({
  source: 'Randomize Page',
  events: {
    'Generate GameSetup': emptyProps(),
    'Set Defined Scheme': props<{ scheme: SchemeMinusRules }>(),
    'Reset Defined Scheme': emptyProps(),
    'Set Defined Mastermind': props<{ mastermind: Mastermind }>(),
    'Reset Defined Mastermind': emptyProps(),
  },
});

export const gameSetupGeneratorActions = createActionGroup({
  source: 'Game Setup Generator',
  events: {
    Success: props<{ gameSetup: GameSetup }>(),
    Failure: (error?: Error) => ({
      payload: {
        error: error?.message ?? 'Error generating Game Setup',
      },
    }),
  },
});

export const saveGameSetupActions = createActionGroup({
  source: 'Game Setup Saver',
  events: {
    Success: emptyProps(),
    Failure: (error?: Error) => ({
      payload: {
        error: error?.message ?? 'Error saving Game Setup',
      },
    }),
  },
});
