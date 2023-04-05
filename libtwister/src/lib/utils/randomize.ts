/**
 * This method will return an array of random card entries from a list of
 * available cards
 * @param originalArray the array to randomize from
 * @param count The number of cards to return
 * @returns An array of cards
 */
export function randomize<T>(originalArray: T[], count: number): T[] {
  if (count < 1) {
    throw new RangeError(`Count must be 1 or higher`);
  } else if (count > originalArray.length) {
    throw new RangeError(
      `Count (${count}) must be lower than the total deck size of ${originalArray.length}`
    );
  }

  const pickFrom = Object.assign([], originalArray);

  const elements: T[] = [];

  /**
   * This sub function will recurse until the correct number of entries have
   * been selected
   * @param arr The array to select from
   * @returns An array of selected items
   */
  function getRandomElement(arr: T[]): T[] {
    if (elements.length < count) {
      elements.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);

      return getRandomElement(arr);
    } else {
      return elements;
    }
  }

  return getRandomElement(pickFrom);
}
