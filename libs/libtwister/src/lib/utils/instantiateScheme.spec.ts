import { describe, expect, it } from 'vitest';

import { MockCardFactory } from '../mocks/mockCardFactory';
import { MockGameSetFactory } from '../mocks/mockGameSetFactory';
import { RequireCard } from '../model/schemes/cardInDeck/requireCard';
import { RequireCardInDeckScheme } from '../model/schemes/cardInDeck/requireCardInDeckScheme';
import { RequireVillainGroup } from '../model/schemes/cardInDeck/requireVillainGroup';
import { Scheme } from '../model/schemes/Scheme';
import { SoloBannedScheme } from '../model/schemes/SoloBannedScheme';
import { DECK_TYPE } from '../model/types/deckType.type';

import instantiateScheme from './instantiateScheme';
import { randomize } from './randomize';

const mockCardFactory = new MockCardFactory();

describe('instantiateScheme', () => {
  describe('with no overridden scheme', () =>
    it("should create a default 'Scheme' instance", () =>
      expect(
        instantiateScheme(mockCardFactory.createSchemeDefinition())
      ).toBeInstanceOf(Scheme)));

  describe('with parameters in the overridden scheme', () =>
    it("should create a 'RequireCardInDeckScheme' instance", () => {
      const gameSet = new MockGameSetFactory().createGameSet();
      const schemeDef1 = mockCardFactory.createSchemeDefinition();
      schemeDef1.meta.numTwists = 8;
      schemeDef1.meta.rules = (rule) => {
        rule.heroDeck.numHeroes = 6;
        return rule;
      };
      schemeDef1.meta.overrideScheme = {
        schemeType: RequireCardInDeckScheme,
        params: [
          new RequireCard(randomize(gameSet.villains!)),
          new RequireVillainGroup(),
          DECK_TYPE.villain,
        ],
      };
      expect(instantiateScheme(schemeDef1)).toBeInstanceOf(
        RequireCardInDeckScheme
      );
    }));

  describe('with no parameters in the overridden scheme', () =>
    it("should create a 'SoloBannedScheme' instance", () => {
      const soloBannedScheme = new MockCardFactory().createSchemeDefinition();
      soloBannedScheme.meta.overrideScheme = {
        schemeType: SoloBannedScheme,
      };
      expect(instantiateScheme(soloBannedScheme)).toBeInstanceOf(
        SoloBannedScheme
      );
    }));
});
