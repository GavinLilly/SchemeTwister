import { GAME_SET as LEGENDARY } from '../../data/gameSets/legendary';
import { NEGATIVE_ZONE_PRISON_BREAKOUT } from '../../data/gameSets/legendary/legendary.schemes';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { SinglePlayerError } from '../errors';
import { NumPlayers } from '../types';

import { SoloBannedScheme } from './SoloBannedScheme';

describe('Solo Banned Scheme', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreBuilder().withSingleGameset(LEGENDARY).build();
  });

  beforeEach(() => store.reset());

  describe('Negative Zone Prison Breakout', () => {
    it('should throw an error for 1 player', () => {
      expect.assertions(1);

      const scheme = new SoloBannedScheme(NEGATIVE_ZONE_PRISON_BREAKOUT);
      try {
        scheme.getSetup(1, store.mastermindStore.getRandom(), store);
      } catch (e) {
        expect(e).toBeInstanceOf(SinglePlayerError);
      }
    });

    it.each([2, 3, 4, 5])('should generate a setup for %p players', (arg) => {
      const scheme2 = new SoloBannedScheme(NEGATIVE_ZONE_PRISON_BREAKOUT);
      expect(
        scheme2.getSetup(
          arg as NumPlayers,
          store.mastermindStore.getRandom(),
          store
        )
      ).toBeTruthy();
    });
  });
});
