/* eslint-disable @typescript-eslint/no-non-null-assertion */
import VILLAINS from '../../data/gameSets/villains';
import { COPS } from '../../data/gameSets/villains/henchmen';
import { CAGE_VILLAINS_IN_POWERSUPPRESSING_CELLS } from '../../data/gameSets/villains/schemes';
import { MultiCardStore } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';
import { AbstractMastermind } from '../AbstractMastermind';
import { IHero, IVillainGroup, IHenchmen } from '../interfaces';

import { RequireHenchmenInAdditionalDeckScheme } from './RequireHenchmenInAdditionalDeckScheme';

describe('Require Henchmen In Additional Deck Scheme', () => {
  let heroStore: MultiCardStore<IHero>;
  let villainStore: MultiCardStore<IVillainGroup>;
  let henchmenStore: MultiCardStore<IHenchmen>;
  let mastermindStore: MultiCardStore<AbstractMastermind>;

  beforeAll(() => {
    heroStore = new MultiCardStore(VILLAINS.heroes);
    villainStore = new MultiCardStore(VILLAINS.villains!);
    henchmenStore = new MultiCardStore(VILLAINS.henchmen!);
    mastermindStore = new MultiCardStore(VILLAINS.masterminds!);
  });

  it('It should include Cops in the additional deck', async () => {
    const scheme = new RequireHenchmenInAdditionalDeckScheme(
      injectGameSet(VILLAINS.id, CAGE_VILLAINS_IN_POWERSUPPRESSING_CELLS),
      COPS
    );
    const setup = await scheme.getSetup(
      2,
      mastermindStore.getOneRandom(),
      heroStore,
      villainStore,
      henchmenStore,
      mastermindStore
    );

    expect(setup.additionalDeck?.deck.henchmen).toContain(COPS);
  });
});
