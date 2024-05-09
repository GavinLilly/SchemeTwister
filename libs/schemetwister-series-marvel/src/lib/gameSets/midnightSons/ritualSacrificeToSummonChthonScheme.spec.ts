import {
  StoreOfStores,
  Scheme,
  StoreBuilder,
  RequireCard,
  GameSetup,
} from '@schemetwister/libtwister';

import { GAME_SET as DARK_CITY } from '../darkCity/darkCity.gameset';
import { KINGPIN } from '../darkCity/darkCity.masterminds';

import { GAME_SET as MIDNIGHT_SONS } from './midnightSons.gameset';
import { LILITH } from './midnightSons.masterminds';
import { RITUAL_SACRIFICE_TO_SUMMON_CHTHON } from './midnightSons.schemes';
import { LILIN } from './midnightSons.villains';
import { RitualSacrificeToSummonChthonScheme } from './ritualSacrificeToSummonChthonScheme';

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
    let gameSetup: GameSetup;

    beforeEach(() => {
      store.reset();
      const setup = scheme.getSetup({
        numPlayers: 2,
        mastermind: store.mastermindStore.pickOne(LILITH.id),
        store,
      });
      gameSetup = new GameSetup(setup);
    });
    it('should set number of twists to 1', () =>
      expect(gameSetup.villainDeck.numTwists).toBe(1));

    it('should contain Lilin in the villain deck', () =>
      expect(gameSetup.villainDeck.villains).toContain(LILIN));
  });

  describe('without Lilith as the Mastermind', () => {
    let gameSetup: GameSetup;

    beforeEach(() => {
      store.reset();
      const setup = scheme.getSetup({
        numPlayers: 2,
        mastermind: store.mastermindStore.pickOne(KINGPIN.id),
        store,
      });
      gameSetup = new GameSetup(setup);
    });

    it('should set number of twists to 8', () =>
      expect(gameSetup.villainDeck.numTwists).toBe(8));

    it('should contain Lilin in the villain deck', () =>
      expect(gameSetup.villainDeck.villains).toContain(LILIN));
  });
});
