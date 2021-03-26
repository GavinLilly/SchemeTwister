import { IGameSet } from '../gamesets';
import { ICard } from './card.interface';

export abstract class CardSet<T extends ICard> {
  protected availableRecords: T[] = [];

  constructor(private allRecords: T[], private gameSets?: IGameSet[]) {
    if (allRecords !== undefined) {
      if (allRecords.length > 0) {
        if (gameSets !== undefined) {
          if (gameSets.length > 0)
            this.availableRecords.push(
              ...allRecords.filter((item) => gameSets.includes(item.gameSet))
            );
          else throw new Error('Empty array of gameSets not allowed');
        } else {
          this.availableRecords.push(...allRecords);
        }
      } else {
        throw new Error('Empty array of records not allowed');
      }
    } else {
      throw new Error('An array of records must be passed to the constructor');
    }
  }

  /**
   * getRandom will recursively pick a number of records based on the passed in count and return an array of the picked records
   * @param {number} [count] The number of records required
   * @param {T[]} [elements] An array of records to include in the returned records. This ensures that the same entry isn't chosen twice
   * @param {T[]} [exclude] An optional array of records to select from
   */
  private getRandom(count: number, elements: T[], exclude?: T[]): T[];
  private getRandom(
    count: number = 1,
    elements: T[] = [],
    exclude: T[] = []
  ): T[] {
    function getRandomElement(arr: T[]): T[] {
      if (elements.length < count) {
        elements.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);

        return getRandomElement(arr);
      } else {
        return elements;
      }
    }

    const filteredRecords =
      exclude.length > 0
        ? this.availableRecords.filter((record) => !exclude.includes(record))
        : this.availableRecords;

    if (elements.length > 0) {
      return getRandomElement(
        filteredRecords.filter((record) => !elements.includes(record))
      );
    } else {
      return getRandomElement([...filteredRecords]);
    }
  }

  public shuffle(count: number, include: T[] = [], exclude: T[] = []) {
    if (count < 0) {
      throw new RangeError(
        `${this.allRecords[0].cardType}: Count must be 0 or higher`
      );
    } else if (count > this.availableRecords.length) {
      throw new RangeError(
        `${this.allRecords[0].cardType}: Count must be lower than the total deck size`
      );
    } else if (include.some((item) => exclude.includes(item))) {
      throw new Error('Cannot include and exclude the same item');
    } else if (
      include !== undefined &&
      !include.every((item) => {
        return this.availableRecords.some(
          (record) => record.gameSet === item.gameSet
        );
      })
    ) {
      throw new Error(
        'Gamesets of included cards must be in the pre-set list of gamesets'
      );
    } else if (include.length > count) {
      throw new RangeError(
        'The number of included cards cannot be more than the number of requested cards'
      );
    } else {
      return this.getRandom(count, include, exclude);
    }
  }

  public getCards(): T[] {
    return this.availableRecords;
  }
}
