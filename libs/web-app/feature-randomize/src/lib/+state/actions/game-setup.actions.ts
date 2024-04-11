/* eslint-disable @typescript-eslint/naming-convention */
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  Mastermind,
  SchemeMinusRules,
  GameSetup,
  Hero,
  Henchmen,
  VillainGroup,
} from '@schemetwister/libtwister';

export const randomizePageActions = createActionGroup({
  source: 'Randomize Page',
  events: {
    'Generate GameSetup': emptyProps(),
    'Set Defined Scheme': props<{ scheme: SchemeMinusRules }>(),
    'Reset Defined Scheme': emptyProps(),
    'Set Defined Mastermind': props<{ mastermind: Mastermind }>(),
    'Reset Defined Mastermind': emptyProps(),
    'Reset all': emptyProps(),
  },
});

type HeroDeckCardProps = { card: Hero | Henchmen };

export const heroDeckActions = createActionGroup({
  source: 'Hero Deck',
  events: {
    'Add card': props<HeroDeckCardProps>(),
    'Remove card': props<HeroDeckCardProps>(),
  },
});

type VillainAdditionalDeckCardProps = {
  card: Hero | Henchmen | VillainGroup | Mastermind;
};

export const villainDeckActions = createActionGroup({
  source: 'Villain Deck',
  events: {
    'Add card': props<VillainAdditionalDeckCardProps>(),
    'Remove card': props<VillainAdditionalDeckCardProps>(),
  },
});

export const additionalDeckActions = createActionGroup({
  source: 'Additional Deck',
  events: {
    'Add card': props<VillainAdditionalDeckCardProps>(),
    'Remove card': props<VillainAdditionalDeckCardProps>(),
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
