import DARK_CITY from '../../data/gameSets/darkCity';
import { JEAN_GREY } from '../../data/gameSets/darkCity/darkCity.heroes';
import { TRANSFORM_CITIZENS_INTO_DEMONS } from '../../data/gameSets/darkCity/schemes';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';

import { RequireHeroInVillainDeckScheme } from './RequireHeroInVillainDeckScheme';

describe('Require Hero In Villain Deck Scheme', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreBuilder().withSingleGameset(DARK_CITY).build();
  });

  it('It should include Jean Grey in the villain deck', async () => {
    const scheme = new RequireHeroInVillainDeckScheme(
      injectGameSet(DARK_CITY, TRANSFORM_CITIZENS_INTO_DEMONS),
      JEAN_GREY
    );
    const setup = await scheme.getSetup(
      2,
      store.mastermindStore.getOneRandom(),
      store
    );

    expect(setup.villainDeck.heroes).toContain(JEAN_GREY);
  });
});
