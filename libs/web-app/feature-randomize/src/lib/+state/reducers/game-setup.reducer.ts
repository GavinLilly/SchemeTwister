import { Action, createReducer, on } from '@ngrx/store';
import {
  Mastermind,
  GameSetup,
  SchemeMinusRules,
  IGameSetup,
  TransformingMastermind,
  VillainDeckMinimal,
  AdditionalDeckDeckMinimal,
  Hero,
  Henchmen,
  HeroDeckMinimal,
  VillainGroup,
} from '@schemetwister/libtwister';

import {
  additionalDeckActions,
  gameSetupGeneratorActions,
  heroDeckActions,
  randomizePageActions,
  villainDeckActions,
} from '../actions/game-setup.actions';

export const gameSetupFeatureKey = 'gameSetup';

export interface IGameSetupState {
  gameSetup: IGameSetup;
  loading: boolean;
  error: string;
  definedScheme?: SchemeMinusRules;
  definedMastermind?: Mastermind | TransformingMastermind;
  lockedHeroDeck?: HeroDeckMinimal;
  lockedVillainDeck?: VillainDeckMinimal;
  lockedAdditionalDeck?: AdditionalDeckDeckMinimal;
}

export const initialState: IGameSetupState = {
  gameSetup: GameSetup.empty(),
  loading: false,
  error: '',
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const _gameSetupReducer = createReducer(
  initialState,
  on(randomizePageActions.generateGameSetup, (state) => ({
    ...state,
    loading: true,
  })),
  on(gameSetupGeneratorActions.success, (state, { gameSetup }) => ({
    ...state,
    gameSetup: gameSetup,
    loading: false,
  })),
  on(gameSetupGeneratorActions.failure, (state, { payload }) => ({
    ...state,
    error: payload.error,
  })),
  on(randomizePageActions.resetAll, (state) => ({
    ...state,
    definedMastermind: undefined,
    definedScheme: undefined,
    lockedHeroDeck: undefined,
    lockedVillainDeck: undefined,
    lockedAdditionalDeck: undefined,
  })),
  on(randomizePageActions.setDefinedScheme, (state, { scheme }) => ({
    ...state,
    definedScheme: scheme,
  })),
  on(randomizePageActions.setDefinedMastermind, (state, { mastermind }) => ({
    ...state,
    definedMastermind: mastermind,
  })),
  on(randomizePageActions.resetDefinedScheme, (state) => ({
    ...state,
    definedScheme: undefined,
  })),
  on(randomizePageActions.resetDefinedMastermind, (state) => ({
    ...state,
    definedMastermind: undefined,
  })),
  on(heroDeckActions.addCard, (state, { card }) => {
    if (card instanceof Hero) {
      return {
        ...state,
        lockedHeroDeck: {
          ...state.lockedHeroDeck,
          heroes: [...(state.lockedHeroDeck?.heroes ?? []), card],
        },
      };
    } else if (card instanceof Henchmen) {
      return {
        ...state,
        lockedHeroDeck: {
          ...state.lockedHeroDeck,
          henchmen: [...(state.lockedHeroDeck?.henchmen ?? []), card],
        },
      };
    }

    return state;
  }),
  on(heroDeckActions.removeCard, (state, { card }) => {
    if (state.lockedHeroDeck !== undefined) {
      if (card instanceof Hero) {
        const heroes = new Set(state.lockedHeroDeck.heroes);
        heroes.delete(card);
        return {
          ...state,
          lockedHeroDeck: {
            ...state.lockedHeroDeck,
            heroes: Array.from(heroes),
          },
        };
      } else if (card instanceof Henchmen) {
        const henchmen = new Set(state.lockedHeroDeck.henchmen);
        henchmen.delete(card);
        return {
          ...state,
          lockedHeroDeck: {
            ...state.lockedHeroDeck,
            henchmen: Array.from(henchmen),
          },
        };
      }
    }

    return state;
  }),
  on(villainDeckActions.addCard, (state, { card }) => {
    if (card instanceof Hero) {
      return {
        ...state,
        lockedVillainDeck: {
          ...state.lockedVillainDeck,
          heroes: [...(state.lockedVillainDeck?.heroes ?? []), card],
        },
      };
    } else if (card instanceof Henchmen) {
      return {
        ...state,
        lockedVillainDeck: {
          ...state.lockedVillainDeck,
          henchmen: [...(state.lockedVillainDeck?.henchmen ?? []), card],
        },
      };
    } else if (card instanceof VillainGroup) {
      return {
        ...state,
        lockedVillainDeck: {
          ...state.lockedVillainDeck,
          villains: [...(state.lockedVillainDeck?.villains ?? []), card],
        },
      };
    } else if (card instanceof Mastermind) {
      return {
        ...state,
        lockedVillainDeck: {
          ...state.lockedVillainDeck,
          masterminds: [...(state.lockedVillainDeck?.masterminds ?? []), card],
        },
      };
    }

    return state;
  }),
  on(villainDeckActions.removeCard, (state, { card }) => {
    if (state.lockedVillainDeck !== undefined) {
      if (card instanceof Hero) {
        const heroes = new Set(state.lockedVillainDeck.heroes);
        heroes.delete(card);
        return {
          ...state,
          lockedVillainDeck: {
            ...state.lockedVillainDeck,
            heroes: Array.from(heroes),
          },
        };
      } else if (card instanceof Henchmen) {
        const henchmen = new Set(state.lockedVillainDeck.henchmen);
        henchmen.delete(card);
        return {
          ...state,
          lockedVillainDeck: {
            ...state.lockedVillainDeck,
            henchmen: Array.from(henchmen),
          },
        };
      } else if (card instanceof VillainGroup) {
        const villains = new Set(state.lockedVillainDeck.villains);
        villains.delete(card);
        return {
          ...state,
          lockedVillainDeck: {
            ...state.lockedVillainDeck,
            villains: Array.from(villains),
          },
        };
      } else if (card instanceof Mastermind) {
        const masterminds = new Set(state.lockedVillainDeck.masterminds);
        masterminds.delete(card);
        return {
          ...state,
          lockedVillainDeck: {
            ...state.lockedVillainDeck,
            masterminds: Array.from(masterminds),
          },
        };
      }
    }

    return state;
  }),
  on(additionalDeckActions.addCard, (state, { card }) => {
    if (card instanceof Hero) {
      return {
        ...state,
        lockedAdditionalDeck: {
          ...state.lockedAdditionalDeck,
          heroes: [...(state.lockedAdditionalDeck?.heroes ?? []), card],
        },
      };
    } else if (card instanceof Henchmen) {
      return {
        ...state,
        lockedAdditionalDeck: {
          ...state.lockedAdditionalDeck,
          henchmen: [...(state.lockedAdditionalDeck?.henchmen ?? []), card],
        },
      };
    } else if (card instanceof VillainGroup) {
      return {
        ...state,
        lockedAdditionalDeck: {
          ...state.lockedAdditionalDeck,
          villains: [...(state.lockedAdditionalDeck?.villains ?? []), card],
        },
      };
    } else if (card instanceof Mastermind) {
      return {
        ...state,
        lockedAdditionalDeck: {
          ...state.lockedAdditionalDeck,
          masterminds: [
            ...(state.lockedAdditionalDeck?.masterminds ?? []),
            card,
          ],
        },
      };
    }

    return state;
  }),
  on(additionalDeckActions.removeCard, (state, { card }) => {
    if (state.lockedAdditionalDeck !== undefined) {
      if (card instanceof Hero) {
        const heroes = new Set(state.lockedAdditionalDeck.heroes);
        heroes.delete(card);
        return {
          ...state,
          lockedAdditionalDeck: {
            ...state.lockedAdditionalDeck,
            heroes: Array.from(heroes),
          },
        };
      } else if (card instanceof Henchmen) {
        const henchmen = new Set(state.lockedAdditionalDeck.henchmen);
        henchmen.delete(card);
        return {
          ...state,
          lockedAdditionalDeck: {
            ...state.lockedAdditionalDeck,
            henchmen: Array.from(henchmen),
          },
        };
      } else if (card instanceof VillainGroup) {
        const villains = new Set(state.lockedAdditionalDeck.villains);
        villains.delete(card);
        return {
          ...state,
          lockedAdditionalDeck: {
            ...state.lockedAdditionalDeck,
            villains: Array.from(villains),
          },
        };
      } else if (card instanceof Mastermind) {
        const masterminds = new Set(state.lockedAdditionalDeck.masterminds);
        masterminds.delete(card);
        return {
          ...state,
          lockedAdditionalDeck: {
            ...state.lockedAdditionalDeck,
            masterminds: Array.from(masterminds),
          },
        };
      }
    }

    return state;
  })
);

export function gameSetupReducer(
  state: IGameSetupState | undefined,
  action: Action
) {
  return _gameSetupReducer(state, action);
}
