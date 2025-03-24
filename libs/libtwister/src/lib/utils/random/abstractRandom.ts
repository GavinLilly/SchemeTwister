import { Array } from 'effect';

import { Random } from './random';

export abstract class AbstractRandom<T> {
  protected static readonly minimum = (min: number, max?: number) =>
    Math.ceil(max !== undefined ? min : 0);
  protected static readonly maximum = (min: number, max?: number) =>
    Math.floor(max ?? min);

  protected getRealCount(array: T[], count?: number): number {
    const realCount = count ?? 1;

    if (realCount < 1) {
      throw new RangeError(`Count must be 1 or higher`);
    }

    if (realCount > array.length) {
      throw new RangeError(
        `Count (${realCount}) must be lower than the total deck size of ${array.length}`
      );
    }

    return realCount;
  }

  protected *generateRandomItem(originalArray: T[]) {
    const availableItems = Array.copy(originalArray);

    let arraySize = availableItems.length;
    while (arraySize > 1) {
      const idx = Random.integer(arraySize - 1);
      yield availableItems.splice(idx, 1)[0];

      arraySize--;
    }

    return availableItems[0];
  }
}
