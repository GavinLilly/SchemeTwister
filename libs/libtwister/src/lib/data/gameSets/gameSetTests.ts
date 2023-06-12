/* eslint-disable no-undef */
import { GameSet, CardType, AllCardTypes } from '../../model';

export function gameSetTest(
  gameSet: GameSet,
  numBystanders: number,
  numHeroes: number,
  numVillains: number,
  numHenchmen: number,
  numMasterminds: number,
  numSchemes: number
) {
  describe(`${gameSet.name} game set`, () => {
    describe.each([
      ['bystanders', numBystanders, CardType.BYSTANDER],
      ['heroes', numHeroes, CardType.HERO],
      ['villains', numVillains, CardType.VILLAINGROUP],
      ['henchmen', numHenchmen, CardType.HENCHMEN],
      ['masterminds', numMasterminds, CardType.MASTERMIND],
      ['schemes', numSchemes, CardType.SCHEME],
    ])('%s deck', (readableCardType, numCards, cardType) => {
      let cards: AllCardTypes[];

      beforeAll(() => {
        cards = gameSet.get(cardType) || [];
      });

      it(`should have ${numCards} cards`, () =>
        expect(cards).toHaveLength(numCards));

      it(`should have all cards be of type ${cardType}`, () =>
        expect(
          cards.every((card: AllCardTypes) => card.cardType === cardType)
        ).toBeTruthy());
    });
  });
}
