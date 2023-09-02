/**
 * This method will return an array of random card entries from a list of
 * available cards
 * @param originalArray The array to randomize from
 * @returns An array of cards
 */
export function randomize<T>(originalArray: T[]): T;
/**
 * This method will return an array of random card entries from a list of
 * available cards
 * @param originalArray The array to randomize from
 * @param count The number of cards to return
 * @returns An array of cards
 */
// eslint-disable-next-line no-redeclare
export function randomize<T>(originalArray: T[], count: number): T | T[];
/**
 * This method will return an array of random card entries from a list of
 * available cards
 * @param originalArray The array to randomize from
 * @param count The number of cards to return
 * @returns An array of cards
 */
// eslint-disable-next-line no-redeclare
export function randomize<T>(originalArray: T[], count: number = 1): T | T[] {
  if (count < 1) {
    throw new RangeError(`Count must be 1 or higher`);
  }

  if (count > originalArray.length) {
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
  const getRandomElement = (arr: T[]): T[] => {
    if (elements.length === count) {
      return elements;
    }

    elements.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    return getRandomElement(arr);
  };

  const chosenRandoms = getRandomElement(pickFrom);

  return chosenRandoms.length === 1 ? chosenRandoms[0] : chosenRandoms;
}
