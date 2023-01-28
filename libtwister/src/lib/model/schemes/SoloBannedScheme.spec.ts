import LEGENDARY from '../../data/gameSets/legendary';
import { NEGATIVE_ZONE_PRISON_BREAKOUT } from '../../data/gameSets/legendary/schemes';
import { StoreBuilder, StoreOfStores } from '../../factories/storeOfStores';
import { injectGameSet } from '../../utils/schemeInjector';
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
    it('should throw an error for 1 player', async () => {
      expect.assertions(1);

      const scheme = new SoloBannedScheme(
        injectGameSet(LEGENDARY.id, NEGATIVE_ZONE_PRISON_BREAKOUT)
      );
      try {
        await scheme.getSetup(1, store.mastermindStore.getOneRandom(), store);
      } catch (e) {
        expect(e).toBeInstanceOf(SinglePlayerError);
      }
    });

    it.each([2, 3, 4, 5])(
      'should generate a setup for %p players',
      async (arg) => {
        const scheme2 = new SoloBannedScheme(
          injectGameSet(LEGENDARY.id, NEGATIVE_ZONE_PRISON_BREAKOUT)
        );
        expect(
          await scheme2.getSetup(
            arg as NumPlayers,
            store.mastermindStore.getOneRandom(),
            store
          )
        ).toBeTruthy();
      }
    );
  });
});
