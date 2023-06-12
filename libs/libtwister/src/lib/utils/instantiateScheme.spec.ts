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

describe('instantiateScheme', () => {
  describe('with no overridden scheme', () => {
    it("should create a default 'Scheme' instance", () => {
      expect(instantiateScheme(THE_LEGACY_VIRUS)).toBeInstanceOf(Scheme);
    });
  });

  describe('with parameters in the overridden scheme', () => {
    expect(
      instantiateScheme(SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS)
    ).toBeInstanceOf(RequireVillainsInVillainDeckScheme);
  });

  describe('with no parameters in the overridden scheme', () => {
    expect(instantiateScheme(SUPER_HERO_CIVIL_WAR)).toBeInstanceOf(
      SoloBannedScheme
    );
  });
});
