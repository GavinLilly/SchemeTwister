import DARK_CITY from '../../data/gameSets/darkCity';
import INTO_THE_COSMOS from '../../data/gameSets/intoTheCosmos';
import { ADAM_WARLOCK } from '../../data/gameSets/intoTheCosmos/intoTheCosmos.heroes';
import { TURN_THE_SOUL_OF_ADAM_WARLOCK } from '../../data/gameSets/intoTheCosmos/intoTheCosmos.schemes';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';

import { RequireHeroInAdditionalDeckScheme } from './RequireHeroInAdditionalDeckScheme';

describe('Require Hero In Additional Deck Scheme', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreBuilder()
      .withHeroGamesets(DARK_CITY, INTO_THE_COSMOS)
      .withMastermindGamesets(DARK_CITY)
      .withVillainGamesets(DARK_CITY, INTO_THE_COSMOS)
      .withHenchmenGamesets(DARK_CITY)
      .build();
  });

  it('It should include Adam Warlock in the additional deck', () => {
    const scheme = new RequireHeroInAdditionalDeckScheme(
      injectGameSet(DARK_CITY, TURN_THE_SOUL_OF_ADAM_WARLOCK),
      ADAM_WARLOCK
    );
    const setup = scheme.getSetup(
      2,
      store.mastermindStore.getOneRandom(),
      store
    );

    expect(setup.additionalDeck?.deck.heroes).toContain(ADAM_WARLOCK);
  });
});
