import { ICard } from '../model';
import { randomize } from '../utils/randomize';

import { SingleCardFactory } from './singleCardFactory';

/**
 * A factory for selecting multiple cards from a large set.
 */
export class MultiCardFactory<T extends ICard> extends SingleCardFactory<T> {
  /**
   * Gets a number of random cards from the list of filtered cards while also
   * removing those carsd from the record so they can't be selected later
   * @param count the number of cards to get
   * @returns an array of cards
   */
  public getManyRandom(count: number, func?: (card: T) => boolean): T[] {
    try {
      if (func === undefined) {
        return randomize(this.availableCards, count);
      } else {
        return randomize(this.availableCards.filter(func), count);
      }
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

      if (card) {
        cards.push(card);
      }
    });
    return cards;
  }
}
