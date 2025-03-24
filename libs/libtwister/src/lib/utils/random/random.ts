import { AbstractRandom } from './abstractRandom';

export class Random<T> extends AbstractRandom<T> {
  /**
   * Return one random card from a list of available cards
   * @param originalArray The array to randomize from
   * @returns One randomized card
   */
  public static choice<T>(originalArray: T[]): T;

  /**
   * Return one card or an array of random cards from a list of
   * available cards
   * @param originalArray The array to randomize from
   * @param count The number of cards to return
   * @returns One card or an array of cards
   */
  public static choice<T>(originalArray: T[], count: number): T[];

  public static choice<T>(originalArray: T[], count?: number): T | T[] {
    const random = new Random<T>();

    const realCount = random.getRealCount(originalArray, count);
    const generator = random.generateRandomItem(originalArray);

    const chosen: T[] = [];

    while (chosen.length < realCount) {
      chosen.push(generator.next().value);
    }

    return count === undefined ? chosen[0] : chosen;
  }

  /**
   * Get a random number between 0 and maxNumber
   * @param max the maximum number to pick from
   * @returns an integer
   */
  public static integer(max: number): number;

  /**
   * Get a random number between minNumber and maxNumber
   * @param min the minimum number to pick from
   * @param max the maximum number to pick from
   * @returns an integer
   */
  public static integer(min: number, max: number): number;

  public static integer(minOrMax: number, max?: number): number {
    const actualMin = AbstractRandom.minimum(minOrMax, max);
    const actualMax = AbstractRandom.maximum(minOrMax, max);

    return Math.floor(Math.random() * (actualMax - actualMin + 1)) + actualMin;
  }
}
