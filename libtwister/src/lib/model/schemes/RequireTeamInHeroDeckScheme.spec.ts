import DARK_CITY from '../../data/gameSets/darkCity';
import DEADPOOL from '../../data/gameSets/deadpool';
import { EVERYBODY_HATES_DEADPOOL } from '../../data/gameSets/deadpool/schemes';
import { MERCS_FOR_MONEY } from '../../data/teams';
import { StoreBuilder, StoreOfStores } from '../../factories/storeOfStores';
import { injectGameSet } from '../../utils/schemeInjector';

import { RequireTeamInHeroDeckScheme } from './RequireTeamInHeroDeckScheme';

describe('Require Team In Hero Deck Scheme', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreBuilder()
      .withHeroGamesets(DEADPOOL, DARK_CITY)
      .withMastermindGamesets(DARK_CITY)
      .withVillainGamesets(DARK_CITY)
      .withHenchmenGamesets(DARK_CITY)
      .build();
  });

  it('should have at least 1 Merc for Money hero', async () => {
    const scheme = new RequireTeamInHeroDeckScheme(
      injectGameSet(DARK_CITY.id, EVERYBODY_HATES_DEADPOOL),
      MERCS_FOR_MONEY
    );
    const setup = await scheme.getSetup(
      2,
      store.mastermindStore.getOneRandom(),
      store
    );

    expect(
      setup.heroDeck.heroes.filter((hero) => hero.team === MERCS_FOR_MONEY)
        .length
    ).toBeGreaterThanOrEqual(1);
  });
});
