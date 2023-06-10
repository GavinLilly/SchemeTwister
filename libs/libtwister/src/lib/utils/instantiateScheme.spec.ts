import LEGENDARY from '../data/gameSets/legendary';
import {
  SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS,
  SUPER_HERO_CIVIL_WAR,
  THE_LEGACY_VIRUS,
} from '../data/gameSets/legendary/legendary.schemes';
import {
  RequireVillainsInVillainDeckScheme,
  Scheme,
  SoloBannedScheme,
} from '../model';

import instantiateScheme from './instantiateScheme';
import { injectGameSet } from './schemeInjector';

describe('instantiateScheme', () => {
  describe('with no overridden scheme', () => {
    it("should create a default 'Scheme' instance", () => {
      const scheme = injectGameSet(LEGENDARY, THE_LEGACY_VIRUS);
      expect(instantiateScheme(scheme)).toBeInstanceOf(Scheme);
    });
  });

  describe('with parameters in the overridden scheme', () => {
    const scheme = injectGameSet(
      LEGENDARY,
      SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS
    );
    expect(instantiateScheme(scheme)).toBeInstanceOf(
      RequireVillainsInVillainDeckScheme
    );
  });

  describe('with no parameters in the overridden scheme', () => {
    const scheme = injectGameSet(LEGENDARY, SUPER_HERO_CIVIL_WAR);
    expect(instantiateScheme(scheme)).toBeInstanceOf(SoloBannedScheme);
  });
});
