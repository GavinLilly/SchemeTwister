import { afterEach, beforeAll, describe, expect, it } from 'vitest';

import { StoreBuilder, StoreOfStores } from '../factories';
import { LibTwister } from '../libTwister';
import instantiateScheme from '../utils/instantiateScheme';

import { MockSeriesFactory } from '../mocks';
import { GameSetup } from './GameSetup';
import { LiteGameSetup } from './liteGameSetup';

const SERIES_FACTORY = new MockSeriesFactory();
const SERIES = SERIES_FACTORY.createSeries();
const TEST_GAME_SET_1 = SERIES.gameSets[0];

describe('LiteGameSetup', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreBuilder()
      .withHeroGamesets(TEST_GAME_SET_1)
      .withMastermindGamesets(TEST_GAME_SET_1)
      .withVillainGamesets(TEST_GAME_SET_1)
      .withHenchmenGamesets(TEST_GAME_SET_1)
      .build();
  });

  afterEach(() => store.reset());

  let liteSetup: LiteGameSetup;

  beforeAll(() => {
    const scheme = instantiateScheme(TEST_GAME_SET_1.schemes![0]);
    const setup = scheme.getSetup({ numPlayers: 2, store });
    const gameSetup = new GameSetup(setup);

    liteSetup = LiteGameSetup.of(gameSetup);
  });

  it('should create', () => expect(liteSetup).toBeTruthy());

  it('should have 5 cards in the hero deck', () =>
    expect(liteSetup.heroDeck).toHaveLength(5));

  it('should have 3 cards in the villain deck', () =>
    expect(liteSetup.villainDeck).toHaveLength(3));

  it('should have 0 cards in the additional deck', () =>
    expect(liteSetup.additionalDeck).toHaveLength(0));

  describe('calculateUid', () => {
    it('shoud have 10 characters', () =>
      expect(liteSetup.calculateUid()).toHaveLength(10));
    it('should have only lower case alphabet characters', () =>
      expect(liteSetup.calculateUid()).toMatch(/^[a-z]+$/));
  });

  describe('toGameSetup', () => {
    let gameSetup: GameSetup;
    const libTwister = new LibTwister({ series: [SERIES] });

    beforeAll(() => {
      gameSetup = liteSetup.toGameSetup(libTwister);
    });

    it('should fail with an unknown scheme ID', () =>
      expect(() =>
        new LiteGameSetup({
          numPlayers: 2,
          schemeId: 'FOO',
          heroDeck: [],
          mastermindId: 'BAR',
          villainDeck: [],
        }).toGameSetup(libTwister)
      ).toThrow());

    const expectedNumTwists = TEST_GAME_SET_1.schemes![0].meta.numTwists;

    it(`should have ${expectedNumTwists} twists`, () =>
      expect(gameSetup.villainDeck.numTwists).toBe(expectedNumTwists));
  });
});
