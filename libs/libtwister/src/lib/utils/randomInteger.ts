/* eslint-disable no-redeclare */

/**
 * Get a random number between 0 and maxNumber
 * @param maxNumber the maximum number to pick from
 * @returns an integer
 */
export function randomInteger(maxNumber: number): number;
/**
 * Get a random number between minNumber and maxNumber
 * @param minNumber the minimum number to pick from
 * @param maxNumber the maximum number to pick from
 * @returns an integer
 */
export function randomInteger(minNumber: number, maxNumber: number): number;
/**
 * Get a random number between minNumber and maxNumber
 * @param minNumber the minimum number to pick from
 * @param maxNumber the maximum number to pick from
 * @returns an integer
 */
export function randomInteger(minNumber: number, maxNumber?: number): number {
  const actualMin = Math.ceil(maxNumber !== undefined ? minNumber : 0);
  const actualMax = Math.floor(maxNumber ?? minNumber);

  return Math.floor(Math.random() * (actualMax - actualMin + 1)) + actualMin;
}
