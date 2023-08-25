import { GAME_SET as DARK_CITY } from '../../data/gameSets/darkCity';
import { MAGGIA_GOONS } from '../../data/gameSets/darkCity/darkCity.henchmen';
import { ORGANIZED_CRIME_WAVE } from '../../data/gameSets/darkCity/darkCity.schemes';
import { GAME_SET as VILLAINS } from '../../data/gameSets/villains';
import { COPS } from '../../data/gameSets/villains/villains.henchmen';
import { CAGE_VILLAINS_IN_POWERSUPPRESSING_CELLS } from '../../data/gameSets/villains/villains.schemes';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { DECK_TYPE } from '../types';

import { RequireHenchmenInDeckScheme } from './requireHenchmenInDeckScheme';

describe('Require Henchmen In', () => {
  describe('Villain Deck', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreBuilder().withSingleGameset(DARK_CITY).build();
    });

    it('It should include Maggia Goons in the villain deck', () => {
      const scheme = new RequireHenchmenInDeckScheme(
        ORGANIZED_CRIME_WAVE,
        MAGGIA_GOONS,
        DECK_TYPE.VILLAIN
      );
      const setup = scheme.getSetup(
        2,
        store.mastermindStore.getOneRandom(),
        store
      );

      expect(setup.villainDeck.henchmen).toContain(MAGGIA_GOONS);
    });
  });

  describe('Additional Deck', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreBuilder().withSingleGameset(VILLAINS).build();
    });

    it('It should include Cops in the additional deck', () => {
      const scheme = new RequireHenchmenInDeckScheme(
        CAGE_VILLAINS_IN_POWERSUPPRESSING_CELLS,
        COPS,
        DECK_TYPE.ADDITIONAL
      );
      const setup = scheme.getSetup(
        2,
        store.mastermindStore.getOneRandom(),
        store
      );

      expect(setup.additionalDeck?.deck.henchmen).toContain(COPS);
    });
  });
});
