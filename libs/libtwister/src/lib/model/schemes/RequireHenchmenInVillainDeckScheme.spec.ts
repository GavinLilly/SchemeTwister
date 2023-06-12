import { GAME_SET as DARK_CITY } from '../../data/gameSets/darkCity';
import { MAGGIA_GOONS } from '../../data/gameSets/darkCity/darkCity.henchmen';
import { ORGANIZED_CRIME_WAVE } from '../../data/gameSets/darkCity/darkCity.schemes';
import { StoreBuilder, StoreOfStores } from '../../factories';

import { RequireHenchmenInVillainDeckScheme } from './RequireHenchmenInVillainDeckScheme';

describe('Require Henchmen In Villain Deck Scheme', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreBuilder().withSingleGameset(DARK_CITY).build();
  });

  it('It should include Maggia Goons in the villain deck', () => {
    const scheme = new RequireHenchmenInVillainDeckScheme(
      ORGANIZED_CRIME_WAVE,
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
