/* eslint-disable no-redeclare */

import { randomInteger } from './randomInteger';

/**
 * Return one random card from a list of available cards
 * @param originalArray The array to randomize from
 * @returns One randomized card
 */
export function randomize<T>(originalArray: T[]): T;
/**
 * Return one card or an array of random cards from a list of
 * available cards
 * @param originalArray The array to randomize from
 * @param count The number of cards to return
 * @returns One card or an array of cards
 */
export function randomize<T>(originalArray: T[], count: number): T[];
/**
 * Return one card or an array of random cards from a list of
 * available cards
 * @param originalArray The array to randomize from
 * @param count The number of cards to return
 * @returns One card or an array of cards
 */
export function randomize<T>(originalArray: T[], count?: number): T | T[] {
  const realCount = count ?? 1;
  if (realCount < 1) {
    throw new RangeError(`Count must be 1 or higher`);
  }

  if (realCount > originalArray.length) {
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
    if (elements.length === realCount) {
      return elements;
    }

    const randomIdx = randomInteger(arr.length - 1);
    const randomItem = arr.splice(randomIdx, 1)[0];

    elements.push(randomItem);
    return getRandomElement(arr);
  };

  const chosenRandoms = getRandomElement(pickFrom);

  return count === undefined ? chosenRandoms[0] : chosenRandoms;
}
