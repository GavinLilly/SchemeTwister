import { GAME_SET as LEGENDARY } from '../data/gameSets/legendary';
import { MIDTOWN_BANK_ROBBERY } from '../data/gameSets/legendary/legendary.schemes';
import { StoreOfStores, StoreBuilder } from '../factories';
import instantiateScheme from '../utils/instantiateScheme';

import { GameSetup } from './GameSetup';
import { LiteGameSetup } from './liteGameSetup';

let store: StoreOfStores;

beforeAll(() => {
  store = new StoreBuilder()
    .withHeroGamesets(LEGENDARY)
    .withMastermindGamesets(LEGENDARY)
    .withVillainGamesets(LEGENDARY)
    .withHenchmenGamesets(LEGENDARY)
    .build();
});

afterEach(() => store.reset());

describe('LiteGameSetup', () => {
  let liteSetup: LiteGameSetup;

  beforeAll(() => {
    const scheme = instantiateScheme(MIDTOWN_BANK_ROBBERY);
    const setup = scheme.getSetup(
      2,
      store.mastermindStore.getOneRandom(),
      store
    ) as GameSetup;

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

    beforeAll(() => {
      gameSetup = liteSetup.toGameSetup();
    });

    it('should fail with an unknown scheme ID', () =>
      expect(() =>
        new LiteGameSetup({
          numPlayers: 2,
          schemeId: 'FOO',
          heroDeck: [],
          mastermindId: 'BAR',
          villainDeck: [],
        }).toGameSetup()
      ).toThrow());

    it('should have 8 twists', () =>
      expect(gameSetup.villainDeck.numTwists).toBe(8));
  });
});
