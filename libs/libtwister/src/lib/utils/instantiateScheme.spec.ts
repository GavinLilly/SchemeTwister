import { RequireCardInDeckScheme, Scheme, SoloBannedScheme } from '../model';
import {
  TEST_NORMAL_SCHEME,
  TEST_REQUIRE_CARD_IN_DECK_SCHEME,
  TEST_SOLO_BANNED_SCHEME,
} from '../testData/schemes';

import instantiateScheme from './instantiateScheme';

describe('instantiateScheme', () => {
  describe('with no overridden scheme', () => {
    it("should create a default 'Scheme' instance", () => {
      expect(instantiateScheme(TEST_NORMAL_SCHEME)).toBeInstanceOf(Scheme);
    });
  });

  describe('with parameters in the overridden scheme', () => {
    expect(instantiateScheme(TEST_REQUIRE_CARD_IN_DECK_SCHEME)).toBeInstanceOf(
      RequireCardInDeckScheme
    );
  });

  describe('with no parameters in the overridden scheme', () => {
    expect(instantiateScheme(TEST_SOLO_BANNED_SCHEME)).toBeInstanceOf(
      SoloBannedScheme
    );
  });
});
