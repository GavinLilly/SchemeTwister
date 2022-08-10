/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  AbstractMastermind,
  GameSets,
  GameSetup,
  IHenchmen,
  IHero,
  injectGameSet,
  IVillainGroup,
  MultiCardStore,
  instantiateScheme,
  Scheme,
} from '@schemetwister/libtwister';
import { MIDTOWN_BANK_ROBBERY } from 'libs/libtwister/src/lib/data/gameSets/legendary/schemes';

import { IGameSetupState } from '../reducers/game-setup.reducer';

import { selectGameSetupScheme } from './game-setup-scheme.selectors';

describe('GameSetupScheme Selectors', () => {
  let heroStore: MultiCardStore<IHero>;
  let villainStore: MultiCardStore<IVillainGroup>;
  let henchmenStore: MultiCardStore<IHenchmen>;
  let mastermindStore: MultiCardStore<AbstractMastermind>;
  const selectedMastermind = GameSets.LEGENDARY.Masterminds.DR_DOOM;
  let initialState: IGameSetupState;
  let scheme: Scheme;

  beforeAll(() => {
    heroStore = new MultiCardStore(Object.values(GameSets.LEGENDARY.Heroes));
    villainStore = new MultiCardStore(
      Object.values(GameSets.LEGENDARY.Villains)
    );
    henchmenStore = new MultiCardStore(
      Object.values(GameSets.LEGENDARY.Henchmen)
    );
    mastermindStore = new MultiCardStore(
      Object.values(GameSets.LEGENDARY.Masterminds)
    );
  });

  beforeEach(async () => {
    const selectedScheme = injectGameSet(
      GameSets.LEGENDARY.default.id,
      MIDTOWN_BANK_ROBBERY
    );

    scheme = instantiateScheme(selectedScheme);
    const setup = await scheme.getSetup(
      2,
      selectedMastermind,
      heroStore,
      villainStore,
      henchmenStore,
      mastermindStore
    );

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
