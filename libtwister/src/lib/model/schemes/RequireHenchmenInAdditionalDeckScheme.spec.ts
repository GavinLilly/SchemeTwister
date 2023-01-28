import VILLAINS from '../../data/gameSets/villains';
import { COPS } from '../../data/gameSets/villains/henchmen';
import { CAGE_VILLAINS_IN_POWERSUPPRESSING_CELLS } from '../../data/gameSets/villains/schemes';
import { StoreBuilder, StoreOfStores } from '../../factories/storeOfStores';
import { injectGameSet } from '../../utils/schemeInjector';

import { RequireHenchmenInAdditionalDeckScheme } from './RequireHenchmenInAdditionalDeckScheme';

describe('Require Henchmen In Additional Deck Scheme', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreBuilder().withSingleGameset(VILLAINS).build();
  });

  it('It should include Cops in the additional deck', async () => {
    const scheme = new RequireHenchmenInAdditionalDeckScheme(
      injectGameSet(VILLAINS.id, CAGE_VILLAINS_IN_POWERSUPPRESSING_CELLS),
      COPS
    );
    const setup = await scheme.getSetup(
      2,
      store.mastermindStore.getOneRandom(),
      store
    );

    expect(setup.additionalDeck?.deck.henchmen).toContain(COPS);
  });
});
