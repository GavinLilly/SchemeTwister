import { ICard } from '../model';
import { randomize } from '../utils/randomize';

import { SingleCardFactory } from './singleCardFactory';

export class MultiCardFactory<T extends ICard> extends SingleCardFactory<T> {
  /**
   * This methods gets a number of random cards from the list of filtered cards while also
   * removing those carsd from the record so they can't be selected later
   * @param count the number of cards to get
   * @returns an array of cards
   */
  public getManyRandom(count: number, func?: (hero: T) => boolean): T[] {
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
}
