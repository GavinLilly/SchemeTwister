import {
  type AllCardTypes,
  type GameSet,
  CARD_TYPE,
} from '@schemetwister/libtwister';
import { describe, beforeAll, it, expect, test } from 'vitest';

interface GameSetTestConfig {
  gameSet: GameSet;
  numBystanders?: number;
  numHeroes: number;
  numVillains?: number;
  numHenchmen?: number;
  numMasterminds?: number;
  numSchemes?: number;
}

export const testGameSet = (config: GameSetTestConfig) =>
  describe(`${config.gameSet.name} game set`, () => {
    describe.each([
      ['bystanders', config.numBystanders ?? 0, CARD_TYPE.bystander],
      ['heroes', config.numHeroes, CARD_TYPE.hero],
      ['villains', config.numVillains ?? 0, CARD_TYPE.villainGroup],
      ['henchmen', config.numHenchmen ?? 0, CARD_TYPE.henchmen],
      ['masterminds', config.numMasterminds ?? 0, CARD_TYPE.mastermind],
      ['schemes', config.numSchemes ?? 0, CARD_TYPE.scheme],
    ])('%s deck', (_, numCards, cardType) => {
      let cards: AllCardTypes[];
      let allCardsAreType = false;

      beforeAll(() => {
        cards = config.gameSet.getCards(cardType) || [];
        allCardsAreType = cards.every(
          (card: AllCardTypes) => card.cardType === cardType
        );
      });

      it(`should have ${numCards} cards`, () =>
        expect(cards).toHaveLength(numCards));

      it(`should have all cards be of type ${cardType}`, () =>
        expect(allCardsAreType).toBeTruthy());
    });
  });

export const testStandardSmallGameSet = (gameSet: GameSet) =>
  testGameSet({
    gameSet,
    numHeroes: 5,
    numVillains: 2,
    numMasterminds: 2,
    numSchemes: 4,
  });

describe('Common tests for Game Sets', () =>
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  test('should be used for implementation', () => {}));
