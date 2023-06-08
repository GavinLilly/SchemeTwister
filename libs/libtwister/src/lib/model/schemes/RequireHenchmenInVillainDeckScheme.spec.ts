import DARK_CITY from '../../data/gameSets/darkCity';
import { MAGGIA_GOONS } from '../../data/gameSets/darkCity/henchmen';
import { ORGANIZED_CRIME_WAVE } from '../../data/gameSets/darkCity/schemes';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';

import { RequireHenchmenInVillainDeckScheme } from './RequireHenchmenInVillainDeckScheme';

describe('Require Henchmen In Villain Deck Scheme', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreBuilder().withSingleGameset(DARK_CITY).build();
  });

  it('It should include Maggia Goons in the villain deck', () => {
    const scheme = new RequireHenchmenInVillainDeckScheme(
      injectGameSet(DARK_CITY, ORGANIZED_CRIME_WAVE),
      MAGGIA_GOONS
    );
    const setup = scheme.getSetup(
      2,
      store.mastermindStore.getOneRandom(),
      store
    );

    expect(setup.villainDeck.henchmen).toContain(MAGGIA_GOONS);
  });
});
