/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  AbstractMastermind,
  GameSets,
  GameSetup,
  IHenchmen,
  IHero,
  IVillainGroup,
} from '@schemetwister/libtwister';
import { MultiCardStore } from 'libs/libtwister/src/lib/factories';

import { IGameSetupState } from '../reducers/game-setup.reducer';

import { selectGameSetupScheme } from './game-setup-scheme.selectors';

describe('GameSetupScheme Selectors', () => {
  const heroStore: MultiCardStore<IHero> = new MultiCardStore(
    Object.values(GameSets.LEGENDARY.Heroes)
  );
  const villainStore: MultiCardStore<IVillainGroup> = new MultiCardStore(
    Object.values(GameSets.LEGENDARY.Villains)
  );
  const henchmenStore: MultiCardStore<IHenchmen> = new MultiCardStore(
    Object.values(GameSets.LEGENDARY.Henchmen)
  );
  const mastermindStore: MultiCardStore<AbstractMastermind> =
    new MultiCardStore(Object.values(GameSets.LEGENDARY.Masterminds));
  const selectedMastermind = GameSets.LEGENDARY.Masterminds.DR_DOOM;
  let selectedScheme: GameSetup;
  let initialState: IGameSetupState;

  beforeAll(async () => {
    const tempScheme =
      await GameSets.LEGENDARY.Schemes.MIDTOWN_BANK_ROBBERY.getSetup(
        2,
        selectedMastermind,
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

    selectedScheme = new GameSetup(tempScheme);

    initialState = {
      error: '',
      loading: false,
      gameSetup: selectedScheme,
    };
  });

  it('should select the scheme', () => {
    const result = selectGameSetupScheme.projector(initialState);
    expect(result).toBe(GameSets.LEGENDARY.Schemes.MIDTOWN_BANK_ROBBERY);
  });
});
