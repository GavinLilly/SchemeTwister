import { IPlayableObject } from '../model';
import { randomize } from '../utils/randomize';

import { SingleCardFactory } from './singleCardFactory';

/**
 * A factory for selecting multiple cards from a large set.
 */
export class MultiCardFactory<
  T extends IPlayableObject
> extends SingleCardFactory<T> {
  /**
   * Gets a number of random cards from the list of filtered cards while also
   * removing those cards from the record so they can't be selected later
   * @param count the number of cards to get
   * @param func an optional function for filtering the cards to randomize from
   * @returns an array of cards
   */
  public getManyRandom(count: number, func?: (card: T) => boolean): T[] {
    try {
      const cards =
        func !== undefined
          ? this.availableCards.filter(func)
          : this.availableCards;

      const random = randomize(cards, count);
      return random instanceof Array ? random : [random];
    } catch (e) {
      if (e instanceof RangeError) {
        throw e;
      }

      throw new Error(
        `Error caused by randomizing in ${this.getStoreType()} store.
Randomize count: ${count}
Number of available cards: ${this.availableCards.length}`
      );
    }
  }

  /**
   * For each ID passed to the function, get the full item associated with it.
   * Note: IDs that are not matched are skipped.
   * @param ids an array of ID strings
   * @returns an array of cards
   */
  public getAll(ids: string[]): T[] {
    const cards: T[] = [];
    ids.forEach((id) => {
      const card = this.getOne(id);

      if (card !== undefined) {
        cards.push(card);
      }
    });

    return cards;
  }
}
