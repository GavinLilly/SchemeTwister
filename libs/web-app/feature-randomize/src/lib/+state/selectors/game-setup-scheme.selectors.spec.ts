/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  GameSets,
  GameSetup,
  instantiateScheme,
  Scheme,
  StoreBuilder,
  StoreOfStores,
} from '@schemetwister/libtwister';
import { GAME_SET as LEGENDARY } from 'libs/libtwister/src/lib/data/gameSets/legendary';
import { MIDTOWN_BANK_ROBBERY } from 'libs/libtwister/src/lib/data/gameSets/legendary/legendary.schemes';

import { IGameSetupState } from '../reducers/game-setup.reducer';

import { selectGameSetupScheme } from './game-setup-scheme.selectors';

describe('GameSetupScheme Selectors', () => {
  let store: StoreOfStores;
  const selectedMastermind = GameSets.LEGENDARY.Masterminds.DR_DOOM;
  let initialState: IGameSetupState;
  let scheme: Scheme;

  beforeAll(() => {
    store = new StoreBuilder().withSingleGameset(LEGENDARY).build();
  });

  beforeEach(async () => {
    scheme = instantiateScheme(MIDTOWN_BANK_ROBBERY);
    const setup = await scheme.getSetup(2, selectedMastermind, store);

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
