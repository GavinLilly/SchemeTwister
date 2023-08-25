import { GAME_SET as DARK_CITY } from '../../data/gameSets/darkCity';
import { JEAN_GREY } from '../../data/gameSets/darkCity/darkCity.heroes';
import { TRANSFORM_CITIZENS_INTO_DEMONS } from '../../data/gameSets/darkCity/darkCity.schemes';
import { GAME_SET as INTO_THE_COSMOS } from '../../data/gameSets/intoTheCosmos';
import { ADAM_WARLOCK } from '../../data/gameSets/intoTheCosmos/intoTheCosmos.heroes';
import { TURN_THE_SOUL_OF_ADAM_WARLOCK } from '../../data/gameSets/intoTheCosmos/intoTheCosmos.schemes';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { DECK_TYPE } from '../types';

import { RequireHeroInDeckScheme } from './requireHeroInDeckScheme';

describe('RequireHeroInDeckScheme', () => {
  describe('Additional Deck', () => {
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
      const scheme = new RequireHeroInDeckScheme(
        TURN_THE_SOUL_OF_ADAM_WARLOCK,
        ADAM_WARLOCK,
        DECK_TYPE.ADDITIONAL
      );
      const setup = scheme.getSetup(
        2,
        store.mastermindStore.getOneRandom(),
        store
      );

      expect(setup.additionalDeck?.deck.heroes).toContain(ADAM_WARLOCK);
    });
  });

  describe('Villain Deck', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreBuilder().withSingleGameset(DARK_CITY).build();
    });

    it('It should include Jean Grey in the villain deck', () => {
      const scheme = new RequireHeroInDeckScheme(
        TRANSFORM_CITIZENS_INTO_DEMONS,
        JEAN_GREY,
        DECK_TYPE.VILLAIN
      );
      const setup = scheme.getSetup(
        2,
        store.mastermindStore.getOneRandom(),
        store
      );

      expect(setup.villainDeck.heroes).toContain(JEAN_GREY);
    });
  });
});
