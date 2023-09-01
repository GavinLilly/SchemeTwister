import { GAME_SET as DARK_CITY } from '../../data/gameSets/darkCity';
import { JEAN_GREY } from '../../data/gameSets/darkCity/darkCity.heroes';
import { GAME_SET as XMEN } from '../../data/gameSets/xMen';
import { PHOENIX } from '../../data/gameSets/xMen/xMen.heroes';
import { THE_DARK_PHOENIX_SAGA } from '../../data/gameSets/xMen/xMen.schemes';
import { HELLFIRE_CLUB } from '../../data/gameSets/xMen/xMen.villains';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { IGameSetup } from '../interfaces';

import { Scheme } from './Scheme';
import { TheDarkPhoenixSagaScheme } from './TheDarkPhoenixSagaScheme';
import { RequireCard, RequireCardWithBackup } from './cardInDeck';

describe('The Dark Phoenix Saga Scheme', () => {
  let store: StoreOfStores;
  let scheme: Scheme;

  beforeAll(() => {
    store = new StoreBuilder().withSingleGameset(XMEN).build();
    scheme = new TheDarkPhoenixSagaScheme(
      THE_DARK_PHOENIX_SAGA,
      new RequireCard(HELLFIRE_CLUB),
      new RequireCardWithBackup(JEAN_GREY, PHOENIX)
    );
  });

  beforeEach(() => store.reset());

  describe('with X-Men expansion', () => {
    let setup: IGameSetup;
    beforeAll(() => {
      setup = scheme.getSetup(2, store.mastermindStore.getRandom(), store);
    });

    it('should include Phoenix in the villain deck', () =>
      expect(setup.villainDeck.heroes).toContain(PHOENIX));

    it('should include Hellfire Club in the villain deck', () =>
      expect(setup.villainDeck.villains).toContain(HELLFIRE_CLUB));
  });

  describe('with the Dark City expansion', () => {
    let setup: IGameSetup;
    beforeAll(() => {
      const dcHeroStore = new StoreBuilder()
        .withHeroGamesets(DARK_CITY)
        .withMastermindGamesets(XMEN)
        .withVillainGamesets(XMEN)
        .withHenchmenGamesets(XMEN)
        .build();
      setup = scheme.getSetup(
        2,
        dcHeroStore.mastermindStore.getRandom(),
        dcHeroStore
      );
    });

    it('should include Jean Grey in the villain deck', () =>
      expect(setup.villainDeck.heroes).toContain(JEAN_GREY));

    it('should include Hellfire Club in the villain deck', () =>
      expect(setup.villainDeck.villains).toContain(HELLFIRE_CLUB));
  });
});
