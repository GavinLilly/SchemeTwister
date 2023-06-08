import { Teams } from '../../data';
import DARK_CITY from '../../data/gameSets/darkCity';
import REVELATIONS from '../../data/gameSets/revelations';
import { SCARLET_WITCH } from '../../data/gameSets/revelations/revelations.heroes';
import { HOUSE_OF_M } from '../../data/gameSets/revelations/revelations.schemes';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';
import { IGameSetup } from '../interfaces';

import { HouseOfMScheme } from './HouseOfMScheme';
import { Scheme } from './Scheme';

describe('House of M Scheme', () => {
  let store: StoreOfStores;
  let scheme: Scheme;
  let setup: IGameSetup;

  beforeAll(() => {
    store = new StoreBuilder()
      .withHeroGamesets(DARK_CITY, REVELATIONS)
      .withMastermindGamesets(DARK_CITY)
      .withVillainGamesets(DARK_CITY, REVELATIONS)
      .withHenchmenGamesets(DARK_CITY)
      .build();

    scheme = new HouseOfMScheme(
      injectGameSet(REVELATIONS, HOUSE_OF_M),
      SCARLET_WITCH
    );

    setup = scheme.getSetup(2, store.mastermindStore.getOneRandom(), store);
  });

  it('should include Scarlet Witch in the villain deck', () =>
    expect(setup.villainDeck.heroes).toContain(SCARLET_WITCH));

  it('should include 4 X-Men heroes in the hero deck', () =>
    expect(
      setup.heroDeck.heroes.filter((hero) => hero.team === Teams.X_MEN)
    ).toHaveLength(4));

  it('should include 2 non-X-Men heroes in the hero deck', () =>
    expect(
      setup.heroDeck.heroes.filter((hero) => hero.team !== Teams.X_MEN)
    ).toHaveLength(2));
});
