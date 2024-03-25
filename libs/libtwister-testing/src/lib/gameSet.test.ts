import {
  type AllCardTypes,
  type GameSet,
  CARD_TYPE,
} from '@schemetwister/libtwister';

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
      let allCardsAreType = false;

      beforeAll(() => {
        cards = gameSet.getCards(cardType) || [];
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

describe('Common tests for Game Sets', () =>
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  test('should be used for implementation', () => {}));
