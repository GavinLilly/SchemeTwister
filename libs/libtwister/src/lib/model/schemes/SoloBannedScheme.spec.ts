import { StoreBuilder, StoreOfStores } from '../../factories';
import { TEST_GAME_SET_1 } from '../../testData/gameSets';
import { TEST_SOLO_BANNED_SCHEME } from '../../testData/schemes';
import { SinglePlayerError } from '../errors/SinglePlayerError';
import { NumPlayers } from '../types/numPlayers.type';

import { SoloBannedScheme } from './SoloBannedScheme';

describe('Solo Banned Scheme', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreBuilder().withAllFromGamesets(TEST_GAME_SET_1).build();
  });

  beforeEach(() => store.reset());

  describe('Negative Zone Prison Breakout', () => {
    it('should throw an error for 1 player', () => {
      expect.assertions(1);

      const scheme = new SoloBannedScheme(TEST_SOLO_BANNED_SCHEME);
      try {
        scheme.getSetup({ numPlayers: 1, store });
      } catch (e) {
        expect(e).toBeInstanceOf(SinglePlayerError);
      }
    });

    it.each([2, 3, 4, 5])('should generate a setup for %p players', (arg) => {
      const scheme2 = new SoloBannedScheme(TEST_SOLO_BANNED_SCHEME);
      expect(
        scheme2.getSetup({ numPlayers: arg as NumPlayers, store })
      ).toBeTruthy();
    });
  });
});
