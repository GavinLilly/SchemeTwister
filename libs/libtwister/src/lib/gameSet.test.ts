import { GameSet } from './model/GameSet';
import { AllCardTypes, CARD_TYPE } from './model/types';

export const gameSetTest = (
  gameSet: GameSet,
  numBystanders: number,
  numHeroes: number,
  numVillains: number,
  numHenchmen: number,
  numMasterminds: number,
  numSchemes: number
) =>
  describe(`${gameSet.name} game set`, () => {
    describe.each([
      ['bystanders', numBystanders, CARD_TYPE.bystander],
      ['heroes', numHeroes, CARD_TYPE.hero],
      ['villains', numVillains, CARD_TYPE.villainGroup],
      ['henchmen', numHenchmen, CARD_TYPE.henchmen],
      ['masterminds', numMasterminds, CARD_TYPE.mastermind],
      ['schemes', numSchemes, CARD_TYPE.scheme],
    ])('%s deck', (_, numCards, cardType) => {
      let cards: AllCardTypes[];

      beforeAll(() => {
        cards = gameSet.getCards(cardType) || [];
      });

      it(`should have ${numCards} cards`, () =>
        expect(cards).toHaveLength(numCards));

      it(`should have all cards be of type ${cardType}`, () =>
        expect(
          cards.every((card: AllCardTypes) => card.cardType === cardType)
        ).toBeTruthy());
    });
  });

describe('Common tests for Game Sets', () =>
  test('should be used for implementation', () => {}));
