/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  GameSets,
  GameSetup,
  injectGameSet,
  instantiateScheme,
  Scheme,
} from '@schemetwister/libtwister';
import LEGENDARY from 'libs/libtwister/src/lib/data/gameSets/legendary';
import { MIDTOWN_BANK_ROBBERY } from 'libs/libtwister/src/lib/data/gameSets/legendary/schemes';
import {
  StoreBuilder,
  StoreOfStores,
} from 'libs/libtwister/src/lib/factories/storeOfStores';

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
    const selectedScheme = injectGameSet(
      GameSets.LEGENDARY.default.id,
      MIDTOWN_BANK_ROBBERY
    );

    scheme = instantiateScheme(selectedScheme);
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
