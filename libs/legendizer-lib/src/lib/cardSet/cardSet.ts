import { ICard } from './card.interface';
import { IGameSet } from '../gamesets';

export abstract class CardSet<T extends ICard> {
  protected availableRecords: T[] = [];

  constructor(
    private allRecords?: T[],
    private gameSets?: IGameSet[]
  ) {
    if (allRecords !== undefined) {
      if (allRecords.length > 0) {
        if (gameSets !== undefined) {
          if (gameSets.length > 0)
            this.availableRecords.push(
              ...allRecords.filter((item) => gameSets.includes(item.gameSet))
            );
          else
            throw new Error("Empty array of gameSets not allowed");
        } else {
          this.availableRecords.push(...allRecords);
        }
      } else {
        throw new Error("Empty array of records not allowed");
      }
    }
  }

  /**
   * getRandom will recursively pick a number of records based on the passed in count and return an array of the picked records
   * @param {T[]} records An array of records to select from
   * @param {number} [count] The number of records required
   * @param {T[]} [elements] An array of records to include in the returned records. This ensures that the same entry isn't chosen twice
   */
  private getRandom(): T;
  private getRandom(count: number, elements: T[]): T[];
  private getRandom(count: number = 1, elements: T[] = []): T | T[] {
    function getRandomElement(arr: T[]) {
      if (elements.length < count) {
        elements.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);

        return getRandomElement(arr);
      } else {
        return elements;
      }
    }

    if (elements.length > 0) {
      return getRandomElement(
        this.availableRecords.filter((record) => !elements.includes(record))
      );
    } else {
      if (count === 1) return getRandomElement([...this.availableRecords])[0];
      else return getRandomElement([...this.availableRecords]);
    }
  }

  public shuffle(): T;
  public shuffle(count: number, include?: T[], exclude?: T[]): T[];
  public shuffle(count: number = 1, include: T[] = [], exclude: T[] = []) {
    if (count === 1) {
      return this.getRandom();
    } else if (count < 0) {
      throw new RangeError('Count must be 0 or higher');
    } else if (count > this.availableRecords.length) {
      throw new RangeError('Count must be lower than the total deck size');
    } else if (include.some((item) => exclude.includes(item))) {
      throw new Error('Cannot include and exclude the same item');
    } else {
      return this.getRandom(count, include);
    }
  }

  public getCards(): T[] {
    return this.availableRecords;
  }
}
