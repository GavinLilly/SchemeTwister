import { CardSet, ICard } from './cardSet';
import { IGameSet } from './gamesets';

export function cardSetTest<T extends ICard, C extends CardSet<T>>(
  cardObject: C,
  cardNum: number,
  gameSet: IGameSet
) {
  describe(`${gameSet.name} set`, () => {
    it(`should give ${gameSet.name} cards`, () => {
      const chosen: T[] = cardObject.shuffle(cardNum);
      expect(chosen.every((item) => item.gameSet === gameSet)).toBeTruthy();
    });

    it(`should have ${cardNum} entries`, () =>
      expect(Object.values(cardObject.getCards())).toHaveLength(cardNum));
  });
}
