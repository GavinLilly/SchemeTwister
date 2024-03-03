import { StoreOfStores, StoreBuilder } from '../factories';
import { LibTwister } from '../libTwister';
import { TEST_GAME_SET_1 } from '../testData/gameSets';
import { TEST_NORMAL_SCHEME } from '../testData/schemes';
import { TEST_SERIES_1 } from '../testData/series';
import instantiateScheme from '../utils/instantiateScheme';

import { GameSetup } from './GameSetup';
import { LiteGameSetup } from './liteGameSetup';

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

describe('LiteGameSetup', () => {
  let liteSetup: LiteGameSetup;

  beforeAll(() => {
    const scheme = instantiateScheme(TEST_NORMAL_SCHEME);
    const setup = scheme.getSetup({ numPlayers: 2, store }) as GameSetup;

    liteSetup = LiteGameSetup.of(setup);
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
    const libTwister = new LibTwister(TEST_SERIES_1);

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

    it('should have 8 twists', () =>
      expect(gameSetup.villainDeck.numTwists).toBe(8));
  });
});
