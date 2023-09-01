import { GAME_SET as DARK_CITY } from '../../data/gameSets/darkCity';
import { KINGPIN } from '../../data/gameSets/darkCity/darkCity.masterminds';
import { GAME_SET as MIDNIGHT_SONS } from '../../data/gameSets/midnightSons';
import { LILITH } from '../../data/gameSets/midnightSons/midnightSons.masterminds';
import { RITUAL_SACRIFICE_TO_SUMMON_CHTHON } from '../../data/gameSets/midnightSons/midnightSons.schemes';
import { LILIN } from '../../data/gameSets/midnightSons/midnightSons.villains';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { GameSetup } from '../GameSetup';

import { RitualSacrificeToSummonChthonScheme } from './RitualSacrificeToSummonChthonScheme';
import { Scheme } from './Scheme';
import { RequireCard } from './cardInDeck';

describe('RitualSacrificeToSummonChthonScheme', () => {
  let store: StoreOfStores;
  let scheme: Scheme;

  beforeEach(() => {
    store = new StoreBuilder()
      .withHeroGamesets(DARK_CITY)
      .withMastermindGamesets(DARK_CITY, MIDNIGHT_SONS)
      .withVillainGamesets(DARK_CITY, MIDNIGHT_SONS)
      .withHenchmenGamesets(DARK_CITY)
      .build();

    scheme = new RitualSacrificeToSummonChthonScheme(
      RITUAL_SACRIFICE_TO_SUMMON_CHTHON,
      new RequireCard(LILIN)
    );
  });

  describe('with Lilith as the Mastermind', () => {
    let setup: GameSetup;

    beforeEach(() => {
      store.reset();
      setup = scheme.getSetup(
        2,
        store.mastermindStore.pickOne(LILITH.id),
        store
      ) as GameSetup;
    });
    it('should set number of twists to 1', () =>
      expect(setup.villainDeck.numTwists).toBe(1));

    it('should contain Lilin in the villain deck', () =>
      expect(setup.villainDeck.villains).toContain(LILIN));
  });

  describe('without Lilith as the Mastermind', () => {
    let setup: GameSetup;

    beforeEach(() => {
      store.reset();
      setup = scheme.getSetup(
        2,
        store.mastermindStore.pickOne(KINGPIN.id),
        store
      ) as GameSetup;
    });

    it('should set number of twists to 8', () =>
      expect(setup.villainDeck.numTwists).toBe(8));

    it('should contain Lilin in the villain deck', () =>
      expect(setup.villainDeck.villains).toContain(LILIN));
  });
});
