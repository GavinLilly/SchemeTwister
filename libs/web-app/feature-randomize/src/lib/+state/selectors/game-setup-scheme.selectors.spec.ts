import {
  GameSetup,
  instantiateScheme,
  Scheme,
  StoreBuilder,
  StoreOfStores,
} from '@schemetwister/libtwister';
import { mainline } from '@schemetwister/series-marvel';

import { IGameSetupState } from '../reducers/game-setup.reducer';

import { selectGameSetupScheme } from './game-setup-scheme.selectors';

describe('GameSetupScheme Selectors', () => {
  let store: StoreOfStores;
  const selectedMastermind = mainline.LEGENDARY.Masterminds.DR_DOOM;
  let initialState: IGameSetupState;
  let scheme: Scheme;

  beforeAll(() => {
    store = new StoreBuilder()
      .withAllFromGamesets(mainline.LEGENDARY.GAME_SET)
      .build();
  });

  beforeEach(() => {
    scheme = instantiateScheme(mainline.LEGENDARY.Schemes.MIDTOWN_BANK_ROBBERY);
    const setup = scheme.getSetup({
      numPlayers: 2,
      mastermind: selectedMastermind,
      store,
    });

    initialState = {
      error: '',
      loading: false,
      gameSetup: new GameSetup(setup),
    };
  });

  it('should select the scheme', () => {
    const result = selectGameSetupScheme.projector(initialState);
    expect(result).toBe(scheme);
  });
});
