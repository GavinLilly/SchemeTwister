import { GAME_SET as DARK_CITY } from '../../data/gameSets/darkCity';
import { JEAN_GREY } from '../../data/gameSets/darkCity/darkCity.heroes';
import { TRANSFORM_CITIZENS_INTO_DEMONS } from '../../data/gameSets/darkCity/darkCity.schemes';
import { StoreBuilder, StoreOfStores } from '../../factories';

import { RequireHeroInVillainDeckScheme } from './RequireHeroInVillainDeckScheme';

describe('Require Hero In Villain Deck Scheme', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreBuilder().withSingleGameset(DARK_CITY).build();
  });

  it('It should include Jean Grey in the villain deck', () => {
    const scheme = new RequireHeroInVillainDeckScheme(
      TRANSFORM_CITIZENS_INTO_DEMONS,
      JEAN_GREY
    );
    const setup = scheme.getSetup(
      2,
      store.mastermindStore.getOneRandom(),
      store
    );

    expect(setup.villainDeck.heroes).toContain(JEAN_GREY);
  });
});
