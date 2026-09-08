import { describe, expect, it } from 'vitest';

import { RequireCardInDeckScheme, Scheme, SoloBannedScheme } from '../model';
import {
  createRequireCardInDeckScheme,
  TEST_NORMAL_SCHEME,
  TEST_SOLO_BANNED_SCHEME,
} from '../testData/schemes';

import instantiateScheme from './instantiateScheme';

describe('instantiateScheme', () => {
  describe('with no overridden scheme', () =>
    it("should create a default 'Scheme' instance", () =>
      expect(instantiateScheme(TEST_NORMAL_SCHEME)).toBeInstanceOf(Scheme)));

  describe('with parameters in the overridden scheme', () =>
    it("should create a 'RequireCardInDeckScheme' instance", () =>
      expect(instantiateScheme(createRequireCardInDeckScheme())).toBeInstanceOf(
        RequireCardInDeckScheme
      )));

  describe('with no parameters in the overridden scheme', () =>
    it("should create a 'SoloBannedScheme' instance", () =>
      expect(instantiateScheme(TEST_SOLO_BANNED_SCHEME)).toBeInstanceOf(
        SoloBannedScheme
      )));
});
