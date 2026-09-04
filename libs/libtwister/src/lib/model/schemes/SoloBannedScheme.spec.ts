import { describe, expect, it } from 'vitest';

import { StoreBuilder } from '../../factories';
import { MockGameSetFactory } from '../../mocks';
import { TEST_SOLO_BANNED_SCHEME } from '../../testData/schemes';
import { SinglePlayerError } from '../errors/SinglePlayerError';
import { NumPlayers } from '../types/numPlayers.type';

import { SoloBannedScheme } from './SoloBannedScheme';

const gameSetFactory = new MockGameSetFactory();

describe('Solo Banned Scheme', () => {
  describe('Negative Zone Prison Breakout', () => {
    const scheme = new SoloBannedScheme(TEST_SOLO_BANNED_SCHEME);

    it('should throw an error for 1 player', () => {
      const store = new StoreBuilder()
        .withAllFromGamesets(gameSetFactory.createGameSet())
        .build();

      expect.assertions(1);

      try {
        scheme.getSetup({ numPlayers: 1, store });
      } catch (e) {
        expect(e).toBeInstanceOf(SinglePlayerError);
      }
    });

    it.each([2, 3, 4, 5])('should generate a setup for %p players', (arg) => {
      const store = new StoreBuilder()
        .withAllFromGamesets(
          gameSetFactory.createGameSet(),
          gameSetFactory.createGameSet()
        )
        .build();

      expect(
        scheme.getSetup({ numPlayers: arg as NumPlayers, store })
      ).toBeTruthy();
    });
  });
});
