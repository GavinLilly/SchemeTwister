import { Effect, Random } from 'effect';

import { AbstractRandom } from './abstractRandom';

export class RandomEffect<T> extends AbstractRandom<T> {
  /**
   * Return one random card from a list of available cards
   * @param originalArray The array to randomize from
   * @returns One randomized card
   */
  public static choice<T>(originalArray: T[]): Effect.Effect<T, RangeError>;

  /**
   * Return one card or an array of random cards from a list of
   * available cards
   * @param originalArray The array to randomize from
   * @param count The number of cards to return
   * @returns One card or an array of cards
   */
  public static choice<T>(
    originalArray: T[],
    count: number
  ): Effect.Effect<T[], RangeError>;

  public static choice<T>(
    originalArray: T[],
    count?: number
  ): Effect.Effect<T, RangeError> | Effect.Effect<T[], RangeError> {
    try {
      const random = new RandomEffect<T>();
      const realCount = random.getRealCount(originalArray, count);
      const generator = random.generateRandomItem(originalArray);

      const chosen = Effect.iterate<T[], never, never>([], {
        while: (state) => state.length < realCount,
        body: (state) => Effect.succeed([...state, generator.next().value]),
      });

      return count === undefined ? Effect.map(chosen, (t) => t[0]) : chosen;
    } catch (err) {
      if (err instanceof RangeError) {
        return Effect.fail(err);
      }
      return Effect.die(err);
    }
  }

  /**
   * Get a random number between 0 and maxNumber
   * @param max the maximum number to pick from
   * @returns an integer wrapped in an effect
   */
  public static integer(max: number): Effect.Effect<number>;

  /**
   * Get a random number between minNumber and maxNumber
   * @param min the minimum number to pick from
   * @param max the maximum number to pick from
   * @returns an integer wrapped in an effect
   */
  public static integer(min: number, max: number): Effect.Effect<number>;

  public static integer(minOrMax: number, max?: number): Effect.Effect<number> {
    const actualMin = AbstractRandom.minimum(minOrMax, max);
    const actualMax = AbstractRandom.maximum(minOrMax, max);

    return Random.nextRange(actualMin, actualMax);
  }
}
